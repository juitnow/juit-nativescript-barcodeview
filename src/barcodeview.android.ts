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

import { Application, ImageAsset } from '@nativescript/core'

export { BarcodeFormat, UnknownBarcodeFormat }

/* ========================================================================== *
 * UTILITIES                                                                  *
 * ========================================================================== */

/* Prefix debug output with '(android)' */
const debug = abstractDebug.bind(null, '(android)')

/** Our mapper between local barcode formats and native barcode types */
const androidFormats = new BarcodeFormats<com.google.zxing.BarcodeFormat>({
  'AZTEC': com.google.zxing.BarcodeFormat.AZTEC,
  'CODABAR': com.google.zxing.BarcodeFormat.CODABAR,
  'CODE_128': com.google.zxing.BarcodeFormat.CODE_128,
  'CODE_39': com.google.zxing.BarcodeFormat.CODE_39,
  'CODE_93': com.google.zxing.BarcodeFormat.CODE_93,
  'DATA_MATRIX': com.google.zxing.BarcodeFormat.DATA_MATRIX,
  'EAN_13': com.google.zxing.BarcodeFormat.EAN_13,
  'EAN_8': com.google.zxing.BarcodeFormat.EAN_8,
  'ITF_14': com.google.zxing.BarcodeFormat.ITF,
  'MAXICODE': com.google.zxing.BarcodeFormat.MAXICODE,
  'PDF_417': com.google.zxing.BarcodeFormat.PDF_417,
  'QR_CODE': com.google.zxing.BarcodeFormat.QR_CODE,
  'RSS_14': com.google.zxing.BarcodeFormat.RSS_14,
  'RSS_EXPANDED': com.google.zxing.BarcodeFormat.RSS_EXPANDED,
  'UPC_A': com.google.zxing.BarcodeFormat.UPC_A,
  'UPC_E': com.google.zxing.BarcodeFormat.UPC_E,
  'UPC_EAN_EXTENSION': com.google.zxing.BarcodeFormat.UPC_EAN_EXTENSION,
})

/* ========================================================================== *
 * ANDROID BARCODESCANNERVIEW IMPLEMENTATION                                  *
 * ========================================================================== */

export interface BarcodeScannerView {
  android: com.journeyapps.barcodescanner.BarcodeView | undefined
}

export class BarcodeScannerView extends BarcodeScannerViewBase {
  private _activityPaused: () => void
  private _activityResumed: () => void
  private _barcodeCallback: com.journeyapps.barcodescanner.BarcodeCallback

  constructor() {
    debug('constructor()')
    super()

    // Keep all of the callback's references, we don't want them to be garbage collected

    this._activityPaused = (function(this: BarcodeScannerView) {
      debug('activityPaused()', this.formats)
      this._setIsPaused(true)
    }).bind(this)

    this._activityResumed = (function(this: BarcodeScannerView) {
      debug('activityResumed()', this.formats)
      this._setIsPaused(this.isPaused)
    }).bind(this)

    const notifyScanResult = this._notifyScanResult.bind(this)
    this._barcodeCallback = new com.journeyapps.barcodescanner.BarcodeCallback({
      barcodeResult(result: com.journeyapps.barcodescanner.BarcodeResult) {
        const format = result.getBarcodeFormat()
        const text = result.getText()
        if (format && text) {
          debug(`scanned(type="${format}", text="${text}")`)
          notifyScanResult(androidFormats.localBarcodeFormat(format), text)
        }
      },
      possibleResultPoints() {
        // Implemented just to satisfy interface requirement...
      },
    })
  }

  /* ======================================================================== *
   * VIEW LIFECYCLE                                                           *
   * ======================================================================== */

  createNativeView() {
    debug('createNativeView()', this.formats)

    // Ignore "super.createNativeView()"... BarcodeView is already a ViewGroup
    const view = new com.journeyapps.barcodescanner.BarcodeView(Application.android.context)

    // Setup the camera

    // Setup our listener (we continuoisly decode)
    view.decodeContinuous(this._barcodeCallback)

    // As the view is initialized, pause/resume depending on activity status
    Application.android.on('activityPaused', this._activityPaused, this)
    Application.android.on('activityResumed', this._activityResumed, this)

    // Return the view...
    return view
  }

  disposeNativeView() {
    debug('disposeNativeView()')
    super.disposeNativeView()

    this.android?.pauseAndWait()
    this.android?.stopDecoding()

    Application.android.off('activityPaused', this._activityPaused, this)
    Application.android.off('activityResumed', this._activityResumed, this)
  }

  /* ======================================================================== *
   * PROPERTIES HANDLERS                                                      *
   * ======================================================================== */

  protected _setPreferFrontCamera(preferFrontCamera: boolean): void {
    debug(`setPreferFrontCamera(preferFrontCamera=${preferFrontCamera})`)

    if (this.android) {
      const camera = preferFrontCamera ?
        android.hardware.Camera.CameraInfo.CAMERA_FACING_FRONT :
        android.hardware.Camera.CameraInfo.CAMERA_FACING_BACK
      const settings = this.android.getCameraSettings()

      if (settings.getRequestedCameraId() != camera) {
        this._setIsPaused(true)
        settings.setRequestedCameraId(camera)
        this.android.setCameraSettings(settings)
        this._setIsPaused(this.isPaused)
        debug(`updateCamera(newDevice="${camera}")`)
      }
    }
  }

  protected _setFormats(formats: KnownBarcodeFormat[]): void {
    debug(`setFormats(formats=[${formats.join(',')}])`)

    if (this.android) {
      const types = androidFormats.nativeBarcodeFormats(this.formats)
      const list = java.util.Arrays.asList(types)
      const decoderFactory = new com.journeyapps.barcodescanner.DefaultDecoderFactory(list)
      this.android.setDecoderFactory(decoderFactory)
      debug(`updateBarcodeTypes(metadataObjectTypes=[${types.join(',')}])`)
    }
  }

  protected _setIsPaused(isPaused: boolean): void {
    debug(`setIsPaused(isPaused=${isPaused})`)

    if (this.android) {
      const isRunning = this.android.isActive()
      if (isRunning && (isRunning == isPaused)) {
        this.android.pause()
        debug('pause()')
      } else if (isRunning == isPaused) {
        // TODO: permissions!
        this.android.resume()
        debug('resume()')
      }
    }
  }
}

/* ========================================================================== *
 * STATIC BARCODE (IMAGE) PARSER                                              *
 * ========================================================================== */

export function parseBarcodes(asset?: ImageAsset, formats?: KnownBarcodeFormat[]): Promise<ScanResult[]> {
  return new Promise((resolve, rejector) => {
    if (! asset) return resolve([])

    function reject(rejection: any) {
      if (rejection instanceof Error) return rejector(rejection)
      if (rejection instanceof java.lang.Throwable) {
        return rejector(new Error(`Native Error [${rejection.getClass().getName()}]: ${rejection.getMessage}`))
      }
      if (typeof rejection === 'string') return rejector(new Error(rejection))

      console.log('Failed with unknown error', rejection)
      return rejector(new Error('Failed with unknown error'))
    }

    // Get the native UIImage from the NativeScript imageAsset
    asset.getImageAsync((image: android.graphics.Bitmap, error: any) => {
      if (error) return reject(error) // in case of errors, simply reject
      if (! image) return resolve([]) // no image? definitely no barcodes!

      debug(`Scanning image of w=${image.getWidth()} h=${image.getHeight()} pixels`)

      // According to https://www.kdab.com/efficient-barcode-scanning-qzxing/
      // it seems that ZXing does not accept images bigger than 999x99 (could
      // not find this into the official doccos), but truth to be told, the
      // resizing done below actually makes it work on larger images...
      const width = image.getWidth()
      const height = image.getHeight()
      const scale = (width > height ? width : height) / 999
      if (scale > 1) {
        const newWidth = Math.round(width / scale)
        const newHeight = Math.round(height / scale)
        image = android.graphics.Bitmap.createScaledBitmap(image, newWidth, newHeight, true)
        debug(`Rescaled image to w=${image.getWidth()} h=${image.getHeight()} pixels`)
      }

      // Copy pixel data from the Bitmap into the 'intArray' array
      const intArray = Array.create('int', image.getWidth() * image.getHeight())
      image.getPixels(intArray, 0, image.getWidth(), 0, 0, image.getWidth(), image.getHeight())

      // Prepare the ZXing Binary Bitmap used to look for barcodes
      const source = new com.google.zxing.RGBLuminanceSource(image.getWidth(), image.getHeight(), intArray)
      const binarizer = new com.google.zxing.common.HybridBinarizer(source)
      const bitmap = new com.google.zxing.BinaryBitmap(binarizer)

      // Restrict the barcode formats to look for (by default it's all)
      const types = androidFormats.nativeBarcodeFormats(formats)
      const list = java.util.Arrays.asList(types)

      const hints = new java.util.HashMap<com.google.zxing.DecodeHintType, any>()
      hints.put(com.google.zxing.DecodeHintType.POSSIBLE_FORMATS, list)
      hints.put(com.google.zxing.DecodeHintType.TRY_HARDER, java.lang.Boolean.TRUE)

      // Create our MultiFormatReader and decode the image
      const reader = new com.google.zxing.MultiFormatReader()
      try {
        const result = reader.decode(bitmap, hints)

        const type = result.getBarcodeFormat()
        const text = result.getText()
        if (type && text) {
          const format = androidFormats.localBarcodeFormat(type)
          return resolve([ { format, text } ])
        } else {
          return resolve([])
        }
      } catch (error) {
        if (error.nativeException instanceof com.google.zxing.NotFoundException) {
          return resolve([])
        } else {
          return reject(error)
        }
      }
    })
  })
}
