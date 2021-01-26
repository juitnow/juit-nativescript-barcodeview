import {
  BarcodeFormat,
  KnownBarcodeFormat,
  UnknownBarcodeFormat,
} from './barcodeview.shared'

import {
  BarcodeFormats,
  BarcodeScannerViewBase,
  debug as abstractDebug,
} from './barcodeview.abstract'

export { BarcodeFormat, UnknownBarcodeFormat }

/* ========================================================================== *
 * UTILITIES                                                                  *
 * ========================================================================== */

/* Prefix debug output with '(ios)' */
const debug = abstractDebug.bind(null, '(ios)')

/** Our mapper between local barcode formats and native barcode types */
const iosFormats = new BarcodeFormats<string>({
  'AZTEC': AVMetadataObjectTypeAztecCode,
  'CODE_128': AVMetadataObjectTypeCode128Code,
  'CODE_39_MOD_43': AVMetadataObjectTypeCode39Mod43Code,
  'CODE_39': AVMetadataObjectTypeCode39Code,
  'CODE_93': AVMetadataObjectTypeCode93Code,
  'DATA_MATRIX': AVMetadataObjectTypeDataMatrixCode,
  'EAN_13': AVMetadataObjectTypeEAN13Code,
  'EAN_8': AVMetadataObjectTypeEAN8Code,
  'INTERLEAVED_2_OF_5': AVMetadataObjectTypeInterleaved2of5Code,
  'ITF_14': AVMetadataObjectTypeITF14Code,
  'PDF_417': AVMetadataObjectTypePDF417Code,
  'QR_CODE': AVMetadataObjectTypeQRCode,
  'UPC_E': AVMetadataObjectTypeUPCECode,
})

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

/* ========================================================================== *
 * IOS BARCODEVIEW IMPLEMENTATION                                             *
 * ========================================================================== */

export interface BarcodeScannerView {
  ios: UIView | undefined
}

export class BarcodeScannerView extends BarcodeScannerViewBase {
  private _frontDevice?: AVCaptureDevice
  private _backDevice?: AVCaptureDevice

  private _metadataOutput?: AVCaptureMetadataOutput
  private _captureSession?: AVCaptureSession
  private _previewLayer?: AVCaptureVideoPreviewLayer
  private _metadataDelegate?: BarcodeMetadataObjectsDelegate

  private _delegateCallback: (type: string, text: string) => void

  constructor() {
    super()

    const defaultDevice = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo)
    if (defaultDevice) {
      this._frontDevice = AVCaptureDevice.defaultDeviceWithDeviceTypeMediaTypePosition(AVCaptureDeviceTypeBuiltInWideAngleCamera, AVMediaTypeVideo, AVCaptureDevicePosition.Front) || defaultDevice
      this._backDevice = AVCaptureDevice.defaultDeviceWithDeviceTypeMediaTypePosition(AVCaptureDeviceTypeBuiltInWideAngleCamera, AVMediaTypeVideo, AVCaptureDevicePosition.Back) || defaultDevice
      debug(`constructor(frontDevice="${this._frontDevice?.uniqueID}", backDevice="${this._backDevice?.uniqueID}")`)
    } else {
      console.warn('No devices available')
    }

    // Keep the delegate callback's reference, we don't want it to be garbage collected
    this._delegateCallback = (function(this: BarcodeScannerView, type: string, text: string) {
      debug(`scanned(type="${type}", text="${text}")`)
      const format = iosFormats.localBarcodeFormat(type)
      this._notifyScanResult(format, text)
    }).bind(this)
  }

  /* ======================================================================== *
   * NATIVESCRIPT VIEW LIFECYCLE                                              *
   * ======================================================================== */

  createNativeView() {
    debug('createNativeView()', this.formats)

    // The native view comes from the super implementation, a UIView
    const view = <UIView> super.createNativeView()

    // OK, we have a device... Let's setup our capture session
    this._captureSession = AVCaptureSession.alloc().init()

    // The output of the capture session is a metadata capture output
    this._metadataOutput = AVCaptureMetadataOutput.alloc().init()

    // Create and setup our delegate into the metadata output
    this._metadataDelegate = BarcodeMetadataObjectsDelegate.alloc().initWithCallback(this._delegateCallback)
    this._metadataDelegate.setup(this._metadataOutput)
    this._captureSession.addOutput(this._metadataOutput)

    // Prepare our view, adding our preview layer
    this._previewLayer = AVCaptureVideoPreviewLayer.layerWithSession(this._captureSession)
    this._previewLayer.videoGravity = AVLayerVideoGravityResizeAspectFill
    view.layer.insertSublayerAtIndex(this._previewLayer, 0)
    this._previewLayer.frame = view.bounds

    // Return our view
    return view
  }

  public onLayout(left: number, top: number, right: number, bottom: number) {
    debug('onLayout()')

    super.onLayout(left, top, right, bottom)
    if (this._previewLayer && this.ios) {
      this._previewLayer.frame = this.ios.bounds
    }
  }

  /* ======================================================================== *
   * PROPERTIES HANDLERS                                                      *
   * ======================================================================== */

  protected _setPreferFrontCamera(preferFrontCamera: boolean): void {
    debug(`setPreferFrontCamera(preferFrontCamera=${preferFrontCamera})`)

    // No session or no new device? No update
    if (! this._captureSession) return
    const newDevice = preferFrontCamera ? this._frontDevice : this._backDevice
    if (! newDevice) return

    // Start reconfiguring the session
    this._captureSession.beginConfiguration()

    // Reconfigure the inputs to just leave the new device, if it was there already
    let newDeviceAlreadyConfigured = false
    for (const input of new NSArrayIterator(this._captureSession.inputs)) {
      const device = (<AVCaptureDeviceInput> input).device
      if (device && device != newDevice) {
        this._captureSession.removeInput(input)
      } else if (device == newDevice) {
        // If we see the new device already remember it (to skip the step below)
        newDeviceAlreadyConfigured = true
      }
    }

    // If the new device was not found in the inputs, add it...
    if (! newDeviceAlreadyConfigured) {
      const newInput = AVCaptureDeviceInput.deviceInputWithDeviceError(newDevice)
      this._captureSession.addInput(newInput)
      debug(`updateCamera(newDevice="${newDevice.uniqueID}")`)
    }

    // Done, commit the configuration
    this._captureSession.commitConfiguration()
  }

  protected _setFormats(formats: KnownBarcodeFormat[]): void {
    debug(`setFormats(formats=[${formats.join(',')}])`)

    if (this._metadataOutput) {
      const types = iosFormats.nativeBarcodeFormats(formats)

      // Intersect what's requested and what's avaible on the platform
      const available = NSMutableSet.setWithArray(this._metadataOutput.availableMetadataObjectTypes)
      available.intersectSet(NSSet.setWithArray(types))

      // Set the object types to the intersection of requested and available
      this._metadataOutput.metadataObjectTypes = available.allObjects

      // Debug, it's a bit heavy so wrap
      if (BarcodeScannerViewBase.debugEnabled) {
        const array = [ ...new NSArrayIterator(this._metadataOutput.metadataObjectTypes) ]
        debug(`updateBarcodeTypes(metadataObjectTypes=[${array.join(',')}])`)
      }
    }
  }

  protected _setIsPaused(isPaused: boolean): void {
    debug(`setIsPaused(isPaused=${isPaused})`)

    if (this._captureSession && (this._captureSession.running == isPaused)) {
      if (isPaused) {
        this._captureSession.stopRunning()
        debug('stopRunning()')
      } else {
        this._captureSession.startRunning()
        debug('startRunning()')
      }
    }
  }
}