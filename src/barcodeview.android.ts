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

import { Application } from '@nativescript/core'

export { BarcodeFormat, UnknownBarcodeFormat }

/* ========================================================================== *
 * UTILITIES                                                                  *
 * ========================================================================== */

/* Prefix debug output with '(ios)' */
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
 * IOS BARCODEVIEW IMPLEMENTATION                                             *
 * ========================================================================== */

export interface BarcodeScannerView {
  android: com.journeyapps.barcodescanner.BarcodeView | undefined
}

export class BarcodeScannerView extends BarcodeScannerViewBase {
  private _activityPaused: () => void
  private _activityResumed: () => void
  private _barcodeCallback: com.journeyapps.barcodescanner.BarcodeCallback

  constructor() {
    super()

    // Keep all of the callback's references, we don't want them to be garbage collected

    this._activityPaused = (function(this: BarcodeScannerView) {
      this._setIsPaused(true)
    }).bind(this)

    this._activityResumed = (function(this: BarcodeScannerView) {
      this._setIsPaused(this.isPaused)
    }).bind(this)

    const notifyScanResult = this._notifyScanResult.bind(this)
    this._barcodeCallback = new com.journeyapps.barcodescanner.BarcodeCallback({
      barcodeResult(result: com.journeyapps.barcodescanner.BarcodeResult) {
        const format = androidFormats.localBarcodeFormat(result.getBarcodeFormat())
        const text = result.getText()
        notifyScanResult(format, text)
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
