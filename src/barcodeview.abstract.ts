import { Property, booleanConverter } from '@nativescript/core'
import {
  BarcodeFormat,
  BarcodeScannerView,
  KnownBarcodeFormat,
  ScanResultEventData,
  UnknownBarcodeFormat,
} from './barcodeview.shared'

/* ========================================================================== *
 * DEBUGGING                                                                  *
 * ========================================================================== */
let debugEnabled = false // default, no debug

export function debug(...args: any[]) {
  if (debugEnabled) {
    const ts = new Date().toISOString().substr(11, 12)
    console.log('[BarcodeScannerView]', ts, ...args)
  }
}

/* ========================================================================== *
 * BARCODE FORMAT NATIVE <-> JS CONVERSIONS                                   *
 * ========================================================================== */

/**
 * The `BarcodeFormats` class manages a mapping between our `KnownBarcodeFormat`
 * enum and the iOS/Android native counterparts.
 */
export class BarcodeFormats<T> {
  private _local: Map<KnownBarcodeFormat, T>
  private _native: Map<T, KnownBarcodeFormat>
  private _all: T[]

  constructor(formats: Partial<Record<KnownBarcodeFormat, T>>) {
    this._local = new Map<KnownBarcodeFormat, T>()
    this._native = new Map<T, KnownBarcodeFormat>()
    for (const [ format, native ] of Object.entries(formats) as [KnownBarcodeFormat, T][]) {
      this._local.set(format, native)
      this._native.set(native, format)
    }
    this._all = [ ...this._native.keys() ]
  }

  /** Convert a `KnownBarcodeFormat` into a native type or return `undefined` */
  nativeBarcodeFormat(format: KnownBarcodeFormat): T | undefined {
    return this._local.get(format)
  }

  /**
   * Convert all specified `KnownBarcodeFormat`s into an array of native types,
   * ignoring formats unknown by the current platform, and returning _all_ types
   * if the specified formats array was empty.
   */
  nativeBarcodeFormats(formats?: KnownBarcodeFormat[]): T[] {
    return formats && formats.length ?
      formats
        .map((format) => this.nativeBarcodeFormat(format))
        .filter((type) => !! type) as T[] :
      this._all
  }

  /**
   * Convert the specified native type into a `KnownBarcodeFormat` or into
   * the constant `[UNKNOWN]` identifying an `UnkownBarcodeFormat`.
   */
  localBarcodeFormat(type: T): BarcodeFormat {
    return BarcodeFormat[this._native.get(type) || UnknownBarcodeFormat]
  }
}

/* ========================================================================== *
 * NATIVESCRIPT PROPERTIES DEFINITION                                         *
 * ========================================================================== */

const formatsProperty = new Property<BarcodeScannerView, KnownBarcodeFormat[]>({
  name: 'formats',
  defaultValue: [],
  equalityComparer: (oldValue, newValue) => {
    const equal = Array.isArray(oldValue) && Array.isArray(newValue) &&
      oldValue.length === newValue.length &&
      oldValue.every((format, i) => newValue[i] === format)
    return equal
  },
  valueConverter: (formats: string): KnownBarcodeFormat[] => {
    if (! formats) return []

    const set = new Set<KnownBarcodeFormat>() // keep 'em unique...
    for (const format of formats.toUpperCase().trim().split(/[\s|,]+/)) {
      if ((format in BarcodeFormat) && (format != UnknownBarcodeFormat)) {
        set.add(<KnownBarcodeFormat> format)
      } else {
        console.warn(`Unknown or unsupported barcode format "${format}"`)
      }
    }
    return [ ...set ].sort()
  },
})

/* -------------------------------------------------------------------------- */

const isPausedProperty = new Property<BarcodeScannerView, boolean>({
  name: 'isPaused',
  defaultValue: false,
  valueConverter: booleanConverter,
})

/* -------------------------------------------------------------------------- */

const preferFrontCameraProperty = new Property<BarcodeScannerView, boolean>({
  name: 'preferFrontCamera',
  defaultValue: false,
  valueConverter: booleanConverter,
})


/* ========================================================================== *
 * MAIN BARCODE SCANNER VIEW ABSTRACTION                                      *
 * ========================================================================== */

/**
 * The `BarcodeScannerViewBase` serves as the base class to be extended by the
 * _real_ iOS and Android `BarcodeScannerView` implementations.
 */
export abstract class BarcodeScannerViewBase extends BarcodeScannerView {
  /* ------------------------------------------------------------------------ *
   | DEBUGGING INSTRUMENTATION                                                |
   * ------------------------------------------------------------------------ */

  /** Enable/disable debugging */
  static set debugEnabled(enabled: boolean) {
    debugEnabled = !!enabled
  }

  /** Check status of debugging flag */
  static get debugEnabled() {
    return debugEnabled
  }

  /* ------------------------------------------------------------------------ *
   * INIT AND DISPOSE VIEW                                                    *
   * ------------------------------------------------------------------------ */

  initNativeView() {
    debug('initNativeView()')
    super.initNativeView()

    // Reset state
    delete this._lastFormat
    delete this._lastText

    // Setup camera (first), formats and paused (initial) statuses
    this._setPreferFrontCamera(this.preferFrontCamera)
    this._setFormats(this.formats)
    this._setIsPaused(this.isPaused)
  }

  disposeNativeView() {
    debug('disposeNativeView()')

    // Reset state
    delete this._lastFormat
    delete this._lastText

    // Always pause the camera when disposing
    this._setIsPaused(true)
    super.disposeNativeView()
  }

  /* ------------------------------------------------------------------------ *
   * PROPERTIES                                                               *
   * ------------------------------------------------------------------------ */

  [formatsProperty.setNative](formats: KnownBarcodeFormat[]) {
    debug(`setNative(formats=[${formats.join(',')}])`)

    delete this._lastFormat
    delete this._lastText

    this._setFormats(formats)
  }

  [preferFrontCameraProperty.setNative](preferFrontCamera: boolean) {
    debug(`setNative(preferFrontCamera=${preferFrontCamera})`)

    delete this._lastFormat
    delete this._lastText

    this._setPreferFrontCamera(preferFrontCamera)
  }

  [isPausedProperty.setNative](isPaused: boolean) {
    debug(`setNative(isPaused=${isPaused})`)

    delete this._lastFormat
    delete this._lastText

    this._setIsPaused(isPaused)
  }

  /* ------------------------------------------------------------------------ *
   | ABSTRACT METHODS                                                         |
  /* ------------------------------------------------------------------------ *

  /** Set the camera to use */
  protected abstract _setPreferFrontCamera(preferFrontCamera: boolean): void

  /** Set the barcode formats to use */
  protected abstract _setFormats(formats: KnownBarcodeFormat[]): void

  /** Set whether scanning is enabled or paused */
  protected abstract _setIsPaused(paused: boolean): void

  /* ------------------------------------------------------------------------ *
   | EVENT NOTIFICATION                                                       |
   * ------------------------------------------------------------------------ */

  /* Dedupe and notify events */
  private _lastFormat?: BarcodeFormat
  private _lastText?: string

  protected _notifyScanResult(format: BarcodeFormat, text: string) {
    debug(`notifyScanResult(format="${format}", text="${text}")`)

    // Don't report if we're paused (regardless...)
    if (this.isPaused) return

    // In case we don't want to report duplicates, we don't notify...
    if ((format === this._lastFormat) && (text === this._lastText)) return
    this._lastFormat = format
    this._lastText = text

    // Notify listeners of a `scanResult` event!
    this.notify({
      eventName: BarcodeScannerView.scanResultEvent,
      object: this,
      format,
      text,
    } as ScanResultEventData)
  }

  clearScanResult(): void {
    delete this._lastFormat
    delete this._lastText
  }
}


/* ========================================================================== *
 * NATIVESCRIPT PROPERTIES REGISTRATION                                       *
 * ========================================================================== */

formatsProperty.register(BarcodeScannerViewBase)
isPausedProperty.register(BarcodeScannerViewBase)
preferFrontCameraProperty.register(BarcodeScannerViewBase)
