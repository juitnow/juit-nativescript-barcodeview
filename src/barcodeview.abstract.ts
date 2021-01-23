import { Property, booleanConverter } from '@nativescript/core'
import {
  KnownBarcodeFormat,
  BarcodeScannerView,
  ScanResultEventData,
  UnknownBarcodeFormat,
} from './barcodeview.shared'

/* ========================================================================== *
 * DEBUGGING                                                                  *
 * ========================================================================== */
let debugEnabled = false // default, no debug

export function debug(...args: any[]) {
  if (debugEnabled) console.log('===[BARCODE SCANNER VIEW]===>', ...args)
}

/* ========================================================================== */

/**
 * The `BarcodeScannerViewBase` serves as the base class to be extended by the
 * _real_ iOS and Android `BarcodeScannerView` implementations.
 */
export abstract class BarcodeScannerViewBase extends BarcodeScannerView {

  /* ------------------------------------------------------------------------ *
   | DEBUGGING INSTRUMENTATION                                                |
   * ------------------------------------------------------------------------ */

  /* Enable/disable debugging */
  static set debugEnabled(enabled: boolean) {
    debugEnabled = !!enabled
  }

  /* Check status of debugging flag */
  static get debugEnabled() {
    return debugEnabled
  }

  /* ------------------------------------------------------------------------ *
   | EVENT NOTIFICATION                                                       |
   * ------------------------------------------------------------------------ */

  /* Dedupe and notify events */
  private _lastFormat: KnownBarcodeFormat | UnknownBarcodeFormat = <any> null
  private _lastText: string = <any> null

  protected _notifyScanResult(format: KnownBarcodeFormat | UnknownBarcodeFormat, text: string) {
    // Don't report if we're paused (regardless...)
    if (this.paused) return

    // In case we don't want to report duplicates, we don't notify...
    if (! this.reportDuplicates) {
      if ((format === this._lastFormat) && (text === this._lastText)) return
      this._lastFormat = format
      this._lastText = text
    }

    // Notify listeners of a `scanResult` event!
    this.notify({
      eventName: BarcodeScannerView.scanResultEvent,
      object: this,
      format,
      text,
    } as ScanResultEventData)
  }
}

/* ========================================================================== *
 * NATIVESCRIPT PROPERTIES DEFINITION                                         *
 * ========================================================================== */

export const formatsProperty = new Property<BarcodeScannerViewBase, KnownBarcodeFormat[]>({
  name: 'formats',
  defaultValue: [],
  equalityComparer: (oldValue, newValue) => {
    return Array.isArray(oldValue) && Array.isArray(newValue) &&
      oldValue.length === newValue.length &&
      oldValue.every((format, i) => newValue[i] === format)
  },
  valueConverter: (formats: string): KnownBarcodeFormat[] => {
    if (! formats) return []

    const set = new Set<KnownBarcodeFormat>() // keep 'em unique...
    for (const format of formats.toUpperCase().trim().split(/[\s|,]+/)) {
      switch (format) {
        case 'AZTEC': set.add('AZTEC'); break
        case 'CODABAR': set.add('CODABAR'); break
        case 'CODE_128': set.add('CODE_128'); break
        case 'CODE_39_MOD_43': set.add('CODE_39_MOD_43'); break
        case 'CODE_39': set.add('CODE_39'); break
        case 'CODE_93': set.add('CODE_93'); break
        case 'DATA_MATRIX': set.add('DATA_MATRIX'); break
        case 'EAN_13': set.add('EAN_13'); break
        case 'EAN_8': set.add('EAN_8'); break
        case 'INTERLEAVED_2_OF_5': set.add('INTERLEAVED_2_OF_5'); break
        case 'ITF': set.add('ITF'); break
        case 'MAXICODE': set.add('MAXICODE'); break
        case 'PDF_417': set.add('PDF_417'); break
        case 'QR_CODE': set.add('QR_CODE'); break
        case 'RSS_14': set.add('RSS_14'); break
        case 'UPC_A': set.add('UPC_A'); break
        case 'UPC_E': set.add('UPC_E'); break

        default: console.log(`Unknown or unsupported barcode format "${format}"`)
      }
    }
    return [ ...set ]
  },
})
formatsProperty.register(BarcodeScannerViewBase)

export const preferFrontCameraProperty = new Property<BarcodeScannerViewBase, boolean>({
  name: 'preferFrontCamera',
  defaultValue: false,
  valueConverter: booleanConverter,
})
preferFrontCameraProperty.register(BarcodeScannerViewBase)

export const torchOnProperty = new Property<BarcodeScannerViewBase, boolean>({
  name: 'torchOn',
  defaultValue: false,
  valueConverter: booleanConverter,
})
torchOnProperty.register(BarcodeScannerViewBase)

export const reportDuplicatesProperty = new Property<BarcodeScannerViewBase, boolean>({
  name: 'reportDuplicates',
  defaultValue: false,
  valueConverter: booleanConverter,
})
reportDuplicatesProperty.register(BarcodeScannerViewBase)

export const pausedProperty = new Property<BarcodeScannerViewBase, boolean>({
  name: 'paused',
  defaultValue: false,
  valueConverter: booleanConverter,
})
pausedProperty.register(BarcodeScannerViewBase)
