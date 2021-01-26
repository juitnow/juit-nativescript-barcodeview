import { ContentView, EventData, GestureTypes, ImageAsset } from '@nativescript/core'

/** An _enum_ of all barcode formats, including the _unknown_ one. */
export enum BarcodeFormat {
  'AZTEC' = 'AZTEC',
  'CODABAR' = 'CODABAR', // not available on iOS
  'CODE_128' = 'CODE_128',
  'CODE_39_MOD_43' = 'CODE_39_MOD_43', // not available on Android
  'CODE_39' = 'CODE_39',
  'CODE_93' = 'CODE_93',
  'DATA_MATRIX' = 'DATA_MATRIX',
  'EAN_13' = 'EAN_13',
  'EAN_8' = 'EAN_8',
  'INTERLEAVED_2_OF_5' = 'INTERLEAVED_2_OF_5', // not available on Android
  'ITF_14' = 'ITF_14',
  'MAXICODE' = 'MAXICODE', // not available on iOS
  'PDF_417' = 'PDF_417',
  'QR_CODE' = 'QR_CODE',
  'RSS_14' = 'RSS_14', // not available on iOS
  'RSS_EXPANDED' = 'RSS_EXPANDED', // not available on iOS
  'UPC_A' = 'UPC_A', // not available on iOS
  'UPC_E' = 'UPC_E',
  'UPC_EAN_EXTENSION' = 'UPC_EAN_EXTENSION', // not availabe on iOS
  'UNKNOWN' = 'UNKNOWN', // the unknown barcode format
}

/** A type defining an _unknown barcode format_ scanned by the device. */
export type UnknownBarcodeFormat = 'UNKNOWN'

/** A constant defining an _unknown barcode format_ scanned by the device. */
export const UnknownBarcodeFormat: UnknownBarcodeFormat = 'UNKNOWN'

/** A type defining all _known barcode formats_. */
export type KnownBarcodeFormat = Exclude<keyof typeof BarcodeFormat, UnknownBarcodeFormat>

/* ========================================================================== */

/** The result of a barcode scan */
export interface ScanResult {
  /** The text contained by the scanned barcode */
  text: string;
  /** The format (a `BarcodeFormat` string) of the scanned barcode */
  format: BarcodeFormat;
}

/** The name of the event associated with a barcode scan */
export type ScanResultEvent = 'scanResult'

/** An `EventData` object including the result of a barcode scan operation */
export interface ScanResultEventData extends EventData, ScanResult {
  /** The event name, always `scanResult` */
  eventName: ScanResultEvent,
  /** The `BarcodeScannerView` source of the event */
  object: BarcodeScannerView,
}

/* ========================================================================== */

/**
 * Our basic `BarcodeScannerView` to be augumented by the respective _Android_
 * and _iOS_ implementations.
 */
export interface BarcodeScannerView extends ContentView {
  /**
   * The `formats` property is a comma and/or whitespace separated list of
   * case-insensitive strings as specified in the `KnownBarcodeFormat` enum,
   * and then converted to an array of `KnownBarcodeFormat` strings.
   *
   * (default: _empty array, all supported formats_)
   */
  formats: KnownBarcodeFormat[]

  /**
   * Setting the `paused` property to `true` temporarily deactivates the barcode
   * scanner
   *
   * (default: `false`)
   */
  isPaused: boolean

  /**
   * The `preferFrontCamera` property defines whether the barcode scanner
   * should preferably use the front camera.
   *
   * (default: `false`)
   */
  preferFrontCamera: boolean

  /* ------------------------------------------------------------------------ */

  /**
   * Basic method signature to hook an event listener.
   */
  on(eventNames: string | GestureTypes, callback: (args: EventData) => void, thisArg?: any): void

  /**
   * Raised when a barcode gets scanned.
   */
  on(event: ScanResultEvent, callback: (args: ScanResultEventData) => void, thisArg?: any): void
}

/**
 * Our basic `BarcodeScannerView` to be augumented by the respective _Android_
 * and _iOS_ implementations.
 */
export class BarcodeScannerView extends ContentView implements BarcodeScannerView {
  /** The name of event generated once a barcode is scanned successfully */
  static readonly scanResultEvent: ScanResultEvent = 'scanResult'

  /** A flag to enable/disable debug */
  static debugEnabled: boolean
}

/* ========================================================================== */

/**
 * Parse all barcodes found in an `ImageAsset`.
 *
 * @param asset - The `ImageAsset` to use when looking for barcodes.
 * @param formats - The array of `BarcodeFormat`s to parse, defaults to _all_.
 */
export declare function parseBarcodes(asset?: ImageAsset, formats?: BarcodeFormat[]): Promise<ScanResult[]>
