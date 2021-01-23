import { ContentView, EventData, GestureTypes } from '@nativescript/core'

/** A type defining all known barcode formats */
export type KnownBarcodeFormat =
    | 'AZTEC'
    | 'CODABAR' // not available on iOS
    | 'CODE_128'
    | 'CODE_39_MOD_43' // not available on Android
    | 'CODE_39'
    | 'CODE_93'
    | 'DATA_MATRIX'
    | 'EAN_13'
    | 'EAN_8'
    | 'INTERLEAVED_2_OF_5' // not available on Android
    | 'ITF'
    | 'MAXICODE' // not available on iOS
    | 'PDF_417'
    | 'QR_CODE'
    | 'RSS_14' // not available on iOS
    | 'UPC_A' // not available on iOS
    | 'UPC_E'

/** All _supported_ `BarcodeFormat`s (varies between iOS and Android) */
export declare const SUPPORTED_BARCODE_FORMATS: KnownBarcodeFormat[]

/** A type defining a scanned barcode with an unknown type */
export type UnknownBarcodeFormat = '[UNKNOWN]'

/** The constant for the `UnknownBarcodeFormat` type */
export const UNKNOWN_BARCODE_FORMAT: UnknownBarcodeFormat = '[UNKNOWN]'

/* ========================================================================== */

/** An `EventData` object including the result of a barcode scan operation */
export interface ScanResultEventData extends EventData {
  /** The event name, always `scanResult` */
  eventName: 'scanResult',
  /** The text contained by the scanned barcode */
  text: string;
  /** The format (a `BarcodeFormat` string) of the scanned barcode */
  format: KnownBarcodeFormat | UnknownBarcodeFormat;
}

/* ========================================================================== */

/**
 * Our basic `BarcodeScannerView` to be augumented by the respective _Android_
 * and _iOS_ implementations.
 */
export interface BarcodeScannerView {
  /**
   * The `formats` property of our `BarcodeView` is specified as comma and/or
   * whitespace separated list of case-insensitive strings as specified in the
   * `BarcodeFormat` type, and then converted to a `BarcodeFormat[]`
   * (default: _all supported formats_)
   */
  formats: KnownBarcodeFormat[]

  /**
   * The `preferFrontCamera` property of our `BarcodeView` defines whether the
   * barcode scanner should preferably use the front camera (default: `false`)
   */
  preferFrontCamera: boolean

  /**
   * The `reportDuplicates` property of our `BarcodeView` defines whether the
   * barcode scanner should report scans of the same barcode (default: `false`)
   */
  reportDuplicates: boolean

  /**
   * The `paused` property of our `BarcodeView` temporarily deactivates the
   * barcode scanner (default: `false`)
   */
  paused: boolean

  /**
   * The `torchOn` property of our `BarcodeView` defines whether the torch
   * (if present) should be on or off (default: `false`)
   */
  torchOn: boolean

  /**
   * Basic method signature to hook an event listener.
   */
  on(eventNames: string | GestureTypes, callback: (args: EventData) => void, thisArg?: any): void

  /**
   * Raised when a barcode gets scanned.
   */
  on(event: 'scanResult', callback: (args: ScanResultEventData) => void, thisArg?: any): void
}

/**
 * Our basic `BarcodeScannerView` to be augumented by the respective _Android_
 * and _iOS_ implementations.
 */
export class BarcodeScannerView extends ContentView implements BarcodeScannerView {
  /** The name of event generated once a barcode is scanned successfully */
  static readonly scanResultEvent = 'scanResult'

  /** A flag to enable/disable debug */
  static debugEnabled: boolean
}
