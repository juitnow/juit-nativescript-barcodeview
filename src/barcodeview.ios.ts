import {
  BarcodeFormat,
  KnownBarcodeFormat,
  ScanResult,
  UnknownBarcodeFormat,
} from './barcodeview.shared'

import {
  BarcodeFormats,
  BarcodeScannerViewBase,
  debug as abstractDebug,
} from './barcodeview.abstract'
import { ImageAsset } from '@nativescript/core'

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

/** Our mapper between local barcode formats and native barcode symbologies */
const iosSymbologies = new BarcodeFormats<string>({
  'AZTEC': VNBarcodeSymbologyAztec,
  'CODE_128': VNBarcodeSymbologyCode128,
  'CODE_39_MOD_43': VNBarcodeSymbologyCode39FullASCII,
  'CODE_39': VNBarcodeSymbologyCode39FullASCIIChecksum,
  'CODE_93': VNBarcodeSymbologyCode93,
  'DATA_MATRIX': VNBarcodeSymbologyDataMatrix,
  'EAN_13': VNBarcodeSymbologyEAN13,
  'EAN_8': VNBarcodeSymbologyEAN8,
  'INTERLEAVED_2_OF_5': VNBarcodeSymbologyI2of5,
  'ITF_14': VNBarcodeSymbologyITF14,
  'PDF_417': VNBarcodeSymbologyPDF417,
  'QR_CODE': VNBarcodeSymbologyQR,
  'UPC_E': VNBarcodeSymbologyUPCE,
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
      if (type && text) { // sometimes those might be null
        debug(`scanned(type="${type}", text="${text}")`)
        const format = iosFormats.localBarcodeFormat(type)
        this._notifyScanResult(format, text)
      }
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

/* ========================================================================== *
 * STATIC BARCODE (IMAGE) PARSER                                              *
 * ========================================================================== */

export function parseBarcodes(asset?: ImageAsset, formats?: KnownBarcodeFormat[]): Promise<ScanResult[]> {
  return new Promise((resolve, reject) => {
    if (! asset) return resolve([])

    // Get the native UIImage from the NativeScript imageAsset
    asset.getImageAsync((image: UIImage, error: any) => {
      if (error) return reject(error) // in case of errors, simply reject
      if (! image) return resolve([]) // no image? definitely no barcodes!

      // Prepare a Vision barcode request with a callback to resolve/reject
      const request = new VNDetectBarcodesRequest({ completionHandler: (request: VNRequest, error: NSError) => {
        if (error) return reject(error) // in case of errors, simply reject
        if (! request.results) return resolve([]) // no results? no barcodes

        // Convert our "VNBarcodeObservation"
        const results: ScanResult[] = []
        for (const result of new NSArrayIterator(request.results)) {
          const observation = <VNBarcodeObservation> result

          const text = observation.payloadStringValue
          const format = iosSymbologies.localBarcodeFormat(observation.symbology)

          if (text && (format != BarcodeFormat.UNKNOWN)) {
            results.push({ format, text })
          }
        }

        // Resolve with our results */
        return resolve(results)
      } })

      // The symbologies to look for (restricted to those available)
      const symbologies = iosSymbologies.nativeBarcodeFormats(formats)
      const available = NSMutableSet.setWithArray(VNDetectBarcodesRequest.supportedSymbologies)
      available.intersectSet(NSSet.setWithArray(symbologies))
      request.symbologies = available.allObjects

      // Create a new Vision image handler that will perform the parsing
      const options = NSDictionary.alloc<string, any>().init()
      const handler = VNImageRequestHandler.alloc().initWithCGImageOptions(image.CGImage, options)

      // This seems to hang until the image is correctly processed. Workers???
      handler.performRequestsError([ request ])
    })
  })
}
