import {
  KnownBarcodeFormat,
  UnknownBarcodeFormat,
  UNKNOWN_BARCODE_FORMAT,
} from './barcodeview.shared'

import {
  BarcodeScannerViewBase,
  debug,
  formatsProperty,
  pausedProperty,
  preferFrontCameraProperty,
  torchOnProperty,
} from './barcodeview.abstract'

/* ========================================================================== *
 * BARCODE NATIVE <-> LOCAL CONVERSION                                        *
 * ========================================================================== */

/** Convert our `BarcodeFormat` into iOS's own AVMetadataObjectTypeXXXCode */
function nativeBarcodeFormat(format: KnownBarcodeFormat): string | undefined {
  switch (format) {
    case 'AZTEC': return AVMetadataObjectTypeAztecCode
    // case 'CODABAR': return AVMetadataObjectType...Code
    case 'CODE_128': return AVMetadataObjectTypeCode128Code
    case 'CODE_39_MOD_43': return AVMetadataObjectTypeCode39Mod43Code
    case 'CODE_39': return AVMetadataObjectTypeCode39Code
    case 'CODE_93': return AVMetadataObjectTypeCode93Code
    case 'DATA_MATRIX': return AVMetadataObjectTypeDataMatrixCode
    case 'EAN_13': return AVMetadataObjectTypeEAN13Code
    case 'EAN_8': return AVMetadataObjectTypeEAN8Code
    case 'INTERLEAVED_2_OF_5': return AVMetadataObjectTypeInterleaved2of5Code
    case 'ITF': return AVMetadataObjectTypeITF14Code
    // case 'MAXICODE': return AVMetadataObjectType...Code
    case 'PDF_417': return AVMetadataObjectTypePDF417Code
    case 'QR_CODE': return AVMetadataObjectTypeQRCode
    // case 'RSS_14': return AVMetadataObjectType...Code
    // case 'UPC_A': return AVMetadataObjectType...Code
    case 'UPC_E': return AVMetadataObjectTypeUPCECode
  }

  // Where it's not supported, return "undefined"
  console.log(`Barcode format "${format}" not available on iOS`)
}

function nativeBarcodeFormats(formats: KnownBarcodeFormat[]): string[] {
  return <string[]> formats
    .map((format) => nativeBarcodeFormat(format))
    .filter((format) => !! format)
}

function localBarcodeFormat(format: string): KnownBarcodeFormat | UnknownBarcodeFormat {
  switch (format) {
    case AVMetadataObjectTypeAztecCode: return 'AZTEC'
    case AVMetadataObjectTypeCode128Code: return 'CODE_128'
    case AVMetadataObjectTypeCode39Mod43Code: return 'CODE_39_MOD_43'
    case AVMetadataObjectTypeCode39Code: return 'CODE_39'
    case AVMetadataObjectTypeCode93Code: return 'CODE_93'
    case AVMetadataObjectTypeDataMatrixCode: return 'DATA_MATRIX'
    case AVMetadataObjectTypeEAN13Code: return 'EAN_13'
    case AVMetadataObjectTypeEAN8Code: return 'EAN_8'
    case AVMetadataObjectTypeInterleaved2of5Code: return 'INTERLEAVED_2_OF_5'
    case AVMetadataObjectTypeITF14Code: return 'ITF'
    case AVMetadataObjectTypePDF417Code: return 'PDF_417'
    case AVMetadataObjectTypeQRCode: return 'QR_CODE'
    case AVMetadataObjectTypeUPCECode: return 'UPC_E'
    default: return UNKNOWN_BARCODE_FORMAT
  }
}

/* Export declared in "barcodeview.shared.ts" with the _actual_ values */
const SUPPORTED_BARCODE_TYPES: string[] = [
  AVMetadataObjectTypeAztecCode,
  AVMetadataObjectTypeCode128Code,
  AVMetadataObjectTypeCode39Mod43Code,
  AVMetadataObjectTypeCode39Code,
  AVMetadataObjectTypeCode93Code,
  AVMetadataObjectTypeDataMatrixCode,
  AVMetadataObjectTypeEAN13Code,
  AVMetadataObjectTypeEAN8Code,
  AVMetadataObjectTypeInterleaved2of5Code,
  AVMetadataObjectTypeITF14Code,
  AVMetadataObjectTypePDF417Code,
  AVMetadataObjectTypeQRCode,
  AVMetadataObjectTypeUPCECode,
]

export const SUPPORTED_BARCODE_FORMATS = SUPPORTED_BARCODE_TYPES.map((type) => localBarcodeFormat(type))

/* ========================================================================== *
 * UTILITIES                                                                  *
 * ========================================================================== */

/** An `IterableIterator` wrapping an `NSArray` instance */
class NSArrayIterator<T> implements IterableIterator<T> {
  private readonly _array: NSArray<T>
  private _position = 0

  constructor(array: NSArray<T>) {
    this._array = array
  }

  [Symbol.iterator]() {
    return this
  }

  next(): IteratorResult<T> {
    if (this._position < this._array.count) {
      return { value: this._array.objectAtIndex(this._position ++) }
    } else {
      return { value: undefined, done: true }
    }
  }

}

/** Update the formats detected by an `AVCaptureMetadataOutput` instance */
function updateFormats(output?: AVCaptureMetadataOutput, formats?: KnownBarcodeFormat[]): void {
  if (! output) return // Nothing to do if no output...

  // An empty barcode formats array means "all"
  const types = nativeBarcodeFormats(formats || [])
  if (types.length === 0) types.push(...SUPPORTED_BARCODE_TYPES)

  // Intersect what's requested and what's avaible on the platform
  const available = NSMutableSet.setWithArray(output.availableMetadataObjectTypes)
  available.intersectSet(NSSet.setWithArray(types))

  // Set the object types to the intersection of requested and available
  output.metadataObjectTypes = available.allObjects

  // Debug...
  const array = [ ...new NSArrayIterator(output.metadataObjectTypes) ]
  debug(`updateFormats metadataObjectTypes=[${array.join(',')}]`)
}

/** Update an `AVCaptureSession` replacing any existing device with a new one */
function updateCamera(session?: AVCaptureSession, newDevice?: AVCaptureDevice) {
  // No session or no new device? No update
  if (! session) return
  if (! newDevice) return

  // Start reconfiguring the session
  session.beginConfiguration()

  // Reconfigure the inputs to just leave the new device, if it was there already
  let newDeviceAlreadyConfigured = false
  for (const input of new NSArrayIterator(session.inputs)) {
    const device = (<AVCaptureDeviceInput> input).device

    if (device && device != newDevice) {
      // Any old device gets removed and its torch goes off
      session.removeInput(input)
      updateTorch(device, false)
    } else if (device == newDevice) {
      // If we see the new device already remember it (to skip the step below)
      newDeviceAlreadyConfigured = true
    }
  }

  // If the new device was not found in the inputs, add it...
  if (! newDeviceAlreadyConfigured) {
    const newInput = AVCaptureDeviceInput.deviceInputWithDeviceError(newDevice)
    session.addInput(newInput)
  }

  // Done, commit the configuration
  session.commitConfiguration()

  // Debug...
  debug(`updateCamera device=${newDevice.uniqueID}`)
}

/** Update the torch on *all* devices on an `AVCaptureSession` */
function updateTorches(session?: AVCaptureSession, on?: boolean) {
  if (session) {
    for (const input of new NSArrayIterator(session.inputs)) {
      updateTorch((<AVCaptureDeviceInput> input).device, on)
    }
  }
}

/** Set the torch on or off for an `AVCaptureDevice` */
function updateTorch(device?: AVCaptureDevice, on?: boolean) {
  if (device?.hasTorch) {
    const mode = on ? AVCaptureTorchMode.On : AVCaptureTorchMode.Off
    if ((device.torchMode != mode) && (device.isTorchModeSupported(mode))) {
      device.lockForConfiguration()
      device.torchMode = mode
      device.unlockForConfiguration()
      debug(`updateTorch torchMode=${mode}`)
    }
  }
}

function updatePaused(session?: AVCaptureSession, paused?: boolean) {
  if (session && (session.running == paused)) {
    if (paused) {
      session.stopRunning()
      debug('updatePaused call=stopRunning()')
    } else {
      session.startRunning()
      debug('updatePaused call=startRunning()')
    }
  }
}

/* ========================================================================== *
 * IOS BARCODEVIEW IMPLEMENTATION                                             *
 * ========================================================================== */

export class BarcodeScannerView extends BarcodeScannerViewBase {
  private _frontDevice?: AVCaptureDevice
  private _backDevice?: AVCaptureDevice

  private _metadataOutput?: AVCaptureMetadataOutput
  private _captureSession?: AVCaptureSession
  private _previewLayer?: AVCaptureVideoPreviewLayer
  private __view: any

  constructor() {
    super()

    const defaultDevice = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo)
    if (defaultDevice) {
      this._frontDevice = AVCaptureDevice.defaultDeviceWithDeviceTypeMediaTypePosition(AVCaptureDeviceTypeBuiltInWideAngleCamera, AVMediaTypeVideo, AVCaptureDevicePosition.Front) || defaultDevice
      this._backDevice = AVCaptureDevice.defaultDeviceWithDeviceTypeMediaTypePosition(AVCaptureDeviceTypeBuiltInWideAngleCamera, AVMediaTypeVideo, AVCaptureDevicePosition.Back) || defaultDevice
      debug(`Constructor frontDevice=${this._frontDevice?.uniqueID}, backDevice=${this._backDevice?.uniqueID}`)
    } else {
      debug('Constructor (no devices available)')
    }
  }

  /* ======================================================================== *
   * PROPERTIES                                                               *
   * ======================================================================== */

  [formatsProperty.setNative](formats: KnownBarcodeFormat[]) {
    debug(`setFormats([${formats.join(',')}])`)
    updateFormats(this._metadataOutput, formats)
  }

  [preferFrontCameraProperty.setNative](front: boolean) {
    debug(`setPreferFrontCamera(${front})`)
    updateCamera(this._captureSession, front ? this._frontDevice : this._backDevice)
  }

  [torchOnProperty.setNative](torchOn: boolean) {
    debug(`setTorchOn(${torchOn})`)
    updateTorches(this._captureSession, torchOn)
  }

  [pausedProperty.setNative](paused: boolean) {
    debug(`setPaused(${paused})`)
    updatePaused(this._captureSession, paused)
  }

  /* ======================================================================== *
   * NATIVESCRIPT VIEW LIFECYCLE                                              *
   * ======================================================================== */

  createNativeView() {
    debug('createNativeView')

    // The native view comes from the super implementation, a UIView
    const view = super.createNativeView() as UIView

    // If we don't have a device, simply return our empty UIView
    const device = this.preferFrontCamera ? this._frontDevice : this._backDevice
    if (! device) return view

    // OK, we have a device... Let's setup our capture session
    this._captureSession = AVCaptureSession.alloc().init()

    // The input of the capture session is our current device
    const input = AVCaptureDeviceInput.deviceInputWithDeviceError(device)
    this._captureSession.addInput(input)

    // The output of the capture session is a metadata capture output
    this._metadataOutput = AVCaptureMetadataOutput.alloc().init()
    this._captureSession.addOutput(this._metadataOutput)
    updateFormats(this._metadataOutput, this.formats) // after adding as output!

    // Create and setup our delegate into the metadata output
    BarcodeMetadataObjectsDelegate.alloc().initWithCallback((type: string, text: string) => {
      debug(`scanned type="${type}", text="${text}", paused="${this.paused}"`)
      const format = localBarcodeFormat(type)
      this._notifyScanResult(format, text)
    }).setup(this._metadataOutput)

    // Prepare our view, adding our preview layer
    this._previewLayer = AVCaptureVideoPreviewLayer.layerWithSession(this._captureSession)
    this._previewLayer.videoGravity = AVLayerVideoGravityResizeAspectFill
    view.layer.insertSublayerAtIndex(this._previewLayer, 0)
    this._previewLayer.frame = view.bounds

    // Return our view
    return this.__view = view
  }

  initNativeView() {
    debug('initNativeView')

    super.initNativeView()
    updateTorches(this._captureSession, this.torchOn)
    updatePaused(this._captureSession, this.paused)
  }

  disposeNativeView() {
    debug('disposeNativeView')

    updatePaused(this._captureSession, true)
    updateTorches(this._captureSession, false)
    return super.disposeNativeView()
  }

  public onLayout(left: number, top: number, right: number, bottom: number) {
    debug('onLayout')

    super.onLayout(left, top, right, bottom)
    if (this._previewLayer) this._previewLayer.frame = this.nativeView.bounds
  }
}
