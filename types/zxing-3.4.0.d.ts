declare namespace com {
  export namespace google {
    export namespace zxing {
      export class BarcodeFormat {
        public static class: java.lang.Class<com.google.zxing.BarcodeFormat>;
        public static AZTEC: com.google.zxing.BarcodeFormat;
        public static CODABAR: com.google.zxing.BarcodeFormat;
        public static CODE_39: com.google.zxing.BarcodeFormat;
        public static CODE_93: com.google.zxing.BarcodeFormat;
        public static CODE_128: com.google.zxing.BarcodeFormat;
        public static DATA_MATRIX: com.google.zxing.BarcodeFormat;
        public static EAN_8: com.google.zxing.BarcodeFormat;
        public static EAN_13: com.google.zxing.BarcodeFormat;
        public static ITF: com.google.zxing.BarcodeFormat;
        public static MAXICODE: com.google.zxing.BarcodeFormat;
        public static PDF_417: com.google.zxing.BarcodeFormat;
        public static QR_CODE: com.google.zxing.BarcodeFormat;
        public static RSS_14: com.google.zxing.BarcodeFormat;
        public static RSS_EXPANDED: com.google.zxing.BarcodeFormat;
        public static UPC_A: com.google.zxing.BarcodeFormat;
        public static UPC_E: com.google.zxing.BarcodeFormat;
        public static UPC_EAN_EXTENSION: com.google.zxing.BarcodeFormat;
        public static valueOf(param0: string): com.google.zxing.BarcodeFormat;
        public static values(): native.Array<com.google.zxing.BarcodeFormat>;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export abstract class Binarizer {
        public static class: java.lang.Class<com.google.zxing.Binarizer>;
        public getBlackMatrix(): com.google.zxing.common.BitMatrix;
        public getBlackRow(param0: number, param1: com.google.zxing.common.BitArray): com.google.zxing.common.BitArray;
        public getWidth(): number;
        public getHeight(): number;
        public getLuminanceSource(): com.google.zxing.LuminanceSource;
        public createBinarizer(param0: com.google.zxing.LuminanceSource): com.google.zxing.Binarizer;
        public constructor(param0: com.google.zxing.LuminanceSource);
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class BinaryBitmap {
        public static class: java.lang.Class<com.google.zxing.BinaryBitmap>;
        public rotateCounterClockwise45(): com.google.zxing.BinaryBitmap;
        public getBlackMatrix(): com.google.zxing.common.BitMatrix;
        public constructor(param0: com.google.zxing.Binarizer);
        public getWidth(): number;
        public getHeight(): number;
        public getBlackRow(param0: number, param1: com.google.zxing.common.BitArray): com.google.zxing.common.BitArray;
        public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.BinaryBitmap;
        public isRotateSupported(): boolean;
        public isCropSupported(): boolean;
        public toString(): string;
        public rotateCounterClockwise(): com.google.zxing.BinaryBitmap;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class ChecksumException extends com.google.zxing.ReaderException {
        public static class: java.lang.Class<com.google.zxing.ChecksumException>;
        public static getChecksumInstance(param0: java.lang.Throwable): com.google.zxing.ChecksumException;
        public static getChecksumInstance(): com.google.zxing.ChecksumException;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class DecodeHintType {
        public static class: java.lang.Class<com.google.zxing.DecodeHintType>;
        public static OTHER: com.google.zxing.DecodeHintType;
        public static PURE_BARCODE: com.google.zxing.DecodeHintType;
        public static POSSIBLE_FORMATS: com.google.zxing.DecodeHintType;
        public static TRY_HARDER: com.google.zxing.DecodeHintType;
        public static CHARACTER_SET: com.google.zxing.DecodeHintType;
        public static ALLOWED_LENGTHS: com.google.zxing.DecodeHintType;
        public static ASSUME_CODE_39_CHECK_DIGIT: com.google.zxing.DecodeHintType;
        public static ASSUME_GS1: com.google.zxing.DecodeHintType;
        public static RETURN_CODABAR_START_END: com.google.zxing.DecodeHintType;
        public static NEED_RESULT_POINT_CALLBACK: com.google.zxing.DecodeHintType;
        public static ALLOWED_EAN_EXTENSIONS: com.google.zxing.DecodeHintType;
        public static valueOf(param0: string): com.google.zxing.DecodeHintType;
        public getValueType(): java.lang.Class<any>;
        public static values(): native.Array<com.google.zxing.DecodeHintType>;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class Dimension {
        public static class: java.lang.Class<com.google.zxing.Dimension>;
        public constructor(param0: number, param1: number);
        public getWidth(): number;
        public getHeight(): number;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class EncodeHintType {
        public static class: java.lang.Class<com.google.zxing.EncodeHintType>;
        public static ERROR_CORRECTION: com.google.zxing.EncodeHintType;
        public static CHARACTER_SET: com.google.zxing.EncodeHintType;
        public static DATA_MATRIX_SHAPE: com.google.zxing.EncodeHintType;
        public static MIN_SIZE: com.google.zxing.EncodeHintType;
        public static MAX_SIZE: com.google.zxing.EncodeHintType;
        public static MARGIN: com.google.zxing.EncodeHintType;
        public static PDF417_COMPACT: com.google.zxing.EncodeHintType;
        public static PDF417_COMPACTION: com.google.zxing.EncodeHintType;
        public static PDF417_DIMENSIONS: com.google.zxing.EncodeHintType;
        public static AZTEC_LAYERS: com.google.zxing.EncodeHintType;
        public static QR_VERSION: com.google.zxing.EncodeHintType;
        public static GS1_FORMAT: com.google.zxing.EncodeHintType;
        public static valueOf(param0: string): com.google.zxing.EncodeHintType;
        public static values(): native.Array<com.google.zxing.EncodeHintType>;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class FormatException extends com.google.zxing.ReaderException {
        public static class: java.lang.Class<com.google.zxing.FormatException>;
        public static getFormatInstance(): com.google.zxing.FormatException;
        public static getFormatInstance(param0: java.lang.Throwable): com.google.zxing.FormatException;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class InvertedLuminanceSource extends com.google.zxing.LuminanceSource {
        public static class: java.lang.Class<com.google.zxing.InvertedLuminanceSource>;
        public constructor(param0: number, param1: number);
        public isRotateSupported(): boolean;
        public invert(): com.google.zxing.LuminanceSource;
        public getMatrix(): native.Array<number>;
        public rotateCounterClockwise(): com.google.zxing.LuminanceSource;
        public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
        public isCropSupported(): boolean;
        public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.LuminanceSource;
        public rotateCounterClockwise45(): com.google.zxing.LuminanceSource;
        public constructor(param0: com.google.zxing.LuminanceSource);
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export abstract class LuminanceSource {
        public static class: java.lang.Class<com.google.zxing.LuminanceSource>;
        public constructor(param0: number, param1: number);
        public getWidth(): number;
        public getHeight(): number;
        public isRotateSupported(): boolean;
        public invert(): com.google.zxing.LuminanceSource;
        public getMatrix(): native.Array<number>;
        public rotateCounterClockwise(): com.google.zxing.LuminanceSource;
        public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
        public isCropSupported(): boolean;
        public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.LuminanceSource;
        public rotateCounterClockwise45(): com.google.zxing.LuminanceSource;
        public toString(): string;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class MultiFormatReader extends com.google.zxing.Reader {
        public static class: java.lang.Class<com.google.zxing.MultiFormatReader>;
        public reset(): void;
        public decodeWithState(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
        public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
        public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
        public setHints(param0: java.util.Map<com.google.zxing.DecodeHintType, any>): void;
        public constructor();
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class MultiFormatWriter extends com.google.zxing.Writer {
        public static class: java.lang.Class<com.google.zxing.MultiFormatWriter>;
        public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
        public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
        public constructor();
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class NotFoundException extends com.google.zxing.ReaderException {
        public static class: java.lang.Class<com.google.zxing.NotFoundException>;
        public static getNotFoundInstance(): com.google.zxing.NotFoundException;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class PlanarYUVLuminanceSource extends com.google.zxing.LuminanceSource {
        public static class: java.lang.Class<com.google.zxing.PlanarYUVLuminanceSource>;
        public constructor(param0: number, param1: number);
        public renderThumbnail(): native.Array<number>;
        public getThumbnailHeight(): number;
        public getMatrix(): native.Array<number>;
        public getThumbnailWidth(): number;
        public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
        public isCropSupported(): boolean;
        public constructor(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean);
        public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.LuminanceSource;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class RGBLuminanceSource extends com.google.zxing.LuminanceSource {
        public static class: java.lang.Class<com.google.zxing.RGBLuminanceSource>;
        public constructor(param0: number, param1: number);
        public constructor(param0: number, param1: number, param2: native.Array<number>);
        public getMatrix(): native.Array<number>;
        public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
        public isCropSupported(): boolean;
        public crop(param0: number, param1: number, param2: number, param3: number): com.google.zxing.LuminanceSource;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class Reader {
        public static class: java.lang.Class<com.google.zxing.Reader>;
        /**
				 * Constructs a new instance of the com.google.zxing.Reader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
        public constructor(implementation: {
          decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          reset(): void;
        });
        public constructor();
        public reset(): void;
        public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
        public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export abstract class ReaderException {
        public static class: java.lang.Class<com.google.zxing.ReaderException>;
        public static isStackTrace: boolean;
        public static NO_TRACE: native.Array<java.lang.StackTraceElement>;
        public fillInStackTrace(): java.lang.Throwable;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class Result {
        public static class: java.lang.Class<com.google.zxing.Result>;
        public constructor(param0: string, param1: native.Array<number>, param2: number, param3: native.Array<com.google.zxing.ResultPoint>, param4: com.google.zxing.BarcodeFormat, param5: number);
        public getBarcodeFormat(): com.google.zxing.BarcodeFormat;
        public addResultPoints(param0: native.Array<com.google.zxing.ResultPoint>): void;
        public getRawBytes(): native.Array<number>;
        public putMetadata(param0: com.google.zxing.ResultMetadataType, param1: any): void;
        public toString(): string;
        public getText(): string;
        public constructor(param0: string, param1: native.Array<number>, param2: native.Array<com.google.zxing.ResultPoint>, param3: com.google.zxing.BarcodeFormat, param4: number);
        public putAllMetadata(param0: java.util.Map<com.google.zxing.ResultMetadataType, any>): void;
        public constructor(param0: string, param1: native.Array<number>, param2: native.Array<com.google.zxing.ResultPoint>, param3: com.google.zxing.BarcodeFormat);
        public getResultMetadata(): java.util.Map<com.google.zxing.ResultMetadataType, any>;
        public getNumBits(): number;
        public getResultPoints(): native.Array<com.google.zxing.ResultPoint>;
        public getTimestamp(): number;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class ResultMetadataType {
        public static class: java.lang.Class<com.google.zxing.ResultMetadataType>;
        public static OTHER: com.google.zxing.ResultMetadataType;
        public static ORIENTATION: com.google.zxing.ResultMetadataType;
        public static BYTE_SEGMENTS: com.google.zxing.ResultMetadataType;
        public static ERROR_CORRECTION_LEVEL: com.google.zxing.ResultMetadataType;
        public static ISSUE_NUMBER: com.google.zxing.ResultMetadataType;
        public static SUGGESTED_PRICE: com.google.zxing.ResultMetadataType;
        public static POSSIBLE_COUNTRY: com.google.zxing.ResultMetadataType;
        public static UPC_EAN_EXTENSION: com.google.zxing.ResultMetadataType;
        public static PDF417_EXTRA_METADATA: com.google.zxing.ResultMetadataType;
        public static STRUCTURED_APPEND_SEQUENCE: com.google.zxing.ResultMetadataType;
        public static STRUCTURED_APPEND_PARITY: com.google.zxing.ResultMetadataType;
        public static valueOf(param0: string): com.google.zxing.ResultMetadataType;
        public static values(): native.Array<com.google.zxing.ResultMetadataType>;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class ResultPoint {
        public static class: java.lang.Class<com.google.zxing.ResultPoint>;
        public constructor(param0: number, param1: number);
        public getX(): number;
        public hashCode(): number;
        public getY(): number;
        public equals(param0: any): boolean;
        public static distance(param0: com.google.zxing.ResultPoint, param1: com.google.zxing.ResultPoint): number;
        public toString(): string;
        public static orderBestPatterns(param0: native.Array<com.google.zxing.ResultPoint>): void;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class ResultPointCallback {
        public static class: java.lang.Class<com.google.zxing.ResultPointCallback>;
        /**
				 * Constructs a new instance of the com.google.zxing.ResultPointCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
        public constructor(implementation: {
          foundPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
        });
        public constructor();
        public foundPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class Writer {
        public static class: java.lang.Class<com.google.zxing.Writer>;
        /**
				 * Constructs a new instance of the com.google.zxing.Writer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
        public constructor(implementation: {
          encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
        });
        public constructor();
        public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
        public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export class WriterException {
        public static class: java.lang.Class<com.google.zxing.WriterException>;
        public constructor(param0: java.lang.Throwable);
        public constructor(param0: string);
        public constructor();
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace aztec {
        export class AztecDetectorResult extends com.google.zxing.common.DetectorResult {
          public static class: java.lang.Class<com.google.zxing.aztec.AztecDetectorResult>;
          public getNbLayers(): number;
          public constructor(param0: com.google.zxing.common.BitMatrix, param1: native.Array<com.google.zxing.ResultPoint>);
          public constructor(param0: com.google.zxing.common.BitMatrix, param1: native.Array<com.google.zxing.ResultPoint>, param2: boolean, param3: number, param4: number);
          public isCompact(): boolean;
          public getNbDatablocks(): number;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace aztec {
        export class AztecReader extends com.google.zxing.Reader {
          public static class: java.lang.Class<com.google.zxing.aztec.AztecReader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace aztec {
        export class AztecWriter extends com.google.zxing.Writer {
          public static class: java.lang.Class<com.google.zxing.aztec.AztecWriter>;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace aztec {
        export namespace decoder {
          export class Decoder {
            public static class: java.lang.Class<com.google.zxing.aztec.decoder.Decoder>;
            public constructor();
            public decode(param0: com.google.zxing.aztec.AztecDetectorResult): com.google.zxing.common.DecoderResult;
            public static highLevelDecode(param0: native.Array<boolean>): string;
          }
          export namespace Decoder {
            export class Table {
              public static class: java.lang.Class<com.google.zxing.aztec.decoder.Decoder.Table>;
              public static UPPER: com.google.zxing.aztec.decoder.Decoder.Table;
              public static LOWER: com.google.zxing.aztec.decoder.Decoder.Table;
              public static MIXED: com.google.zxing.aztec.decoder.Decoder.Table;
              public static DIGIT: com.google.zxing.aztec.decoder.Decoder.Table;
              public static PUNCT: com.google.zxing.aztec.decoder.Decoder.Table;
              public static BINARY: com.google.zxing.aztec.decoder.Decoder.Table;
              public static valueOf(param0: string): com.google.zxing.aztec.decoder.Decoder.Table;
              public static values(): native.Array<com.google.zxing.aztec.decoder.Decoder.Table>;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace aztec {
        export namespace detector {
          export class Detector {
            public static class: java.lang.Class<com.google.zxing.aztec.detector.Detector>;
            public detect(param0: boolean): com.google.zxing.aztec.AztecDetectorResult;
            public detect(): com.google.zxing.aztec.AztecDetectorResult;
            public constructor(param0: com.google.zxing.common.BitMatrix);
          }
          export namespace Detector {
            export class Point {
              public static class: java.lang.Class<com.google.zxing.aztec.detector.Detector.Point>;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace aztec {
        export namespace encoder {
          export class AztecCode {
            public static class: java.lang.Class<com.google.zxing.aztec.encoder.AztecCode>;
            public setSize(param0: number): void;
            public getMatrix(): com.google.zxing.common.BitMatrix;
            public setCompact(param0: boolean): void;
            public constructor();
            public getSize(): number;
            public setCodeWords(param0: number): void;
            public isCompact(): boolean;
            public setLayers(param0: number): void;
            public getCodeWords(): number;
            public setMatrix(param0: com.google.zxing.common.BitMatrix): void;
            public getLayers(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace aztec {
        export namespace encoder {
          export class BinaryShiftToken extends com.google.zxing.aztec.encoder.Token {
            public static class: java.lang.Class<com.google.zxing.aztec.encoder.BinaryShiftToken>;
            public toString(): string;
            public appendTo(param0: com.google.zxing.common.BitArray, param1: native.Array<number>): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace aztec {
        export namespace encoder {
          export class Encoder {
            public static class: java.lang.Class<com.google.zxing.aztec.encoder.Encoder>;
            public static DEFAULT_EC_PERCENT: number;
            public static DEFAULT_AZTEC_LAYERS: number;
            public static encode(param0: native.Array<number>, param1: number, param2: number): com.google.zxing.aztec.encoder.AztecCode;
            public static encode(param0: native.Array<number>): com.google.zxing.aztec.encoder.AztecCode;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace aztec {
        export namespace encoder {
          export class HighLevelEncoder {
            public static class: java.lang.Class<com.google.zxing.aztec.encoder.HighLevelEncoder>;
            public encode(): com.google.zxing.common.BitArray;
            public constructor(param0: native.Array<number>);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace aztec {
        export namespace encoder {
          export class SimpleToken extends com.google.zxing.aztec.encoder.Token {
            public static class: java.lang.Class<com.google.zxing.aztec.encoder.SimpleToken>;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace aztec {
        export namespace encoder {
          export class State {
            public static class: java.lang.Class<com.google.zxing.aztec.encoder.State>;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace aztec {
        export namespace encoder {
          export abstract class Token {
            public static class: java.lang.Class<com.google.zxing.aztec.encoder.Token>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export abstract class AbstractDoCoMoResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.AbstractDoCoMoResultParser>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class AddressBookAUResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.AddressBookAUResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.AddressBookParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class AddressBookDoCoMoResultParser extends com.google.zxing.client.result.AbstractDoCoMoResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.AddressBookDoCoMoResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.AddressBookParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class AddressBookParsedResult extends com.google.zxing.client.result.ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.AddressBookParsedResult>;
            public constructor(param0: native.Array<string>, param1: native.Array<string>, param2: native.Array<string>, param3: native.Array<string>, param4: native.Array<string>, param5: native.Array<string>, param6: native.Array<string>);
            public getNicknames(): native.Array<string>;
            public getGeo(): native.Array<string>;
            public getEmails(): native.Array<string>;
            public getAddressTypes(): native.Array<string>;
            public getURLs(): native.Array<string>;
            public getDisplayResult(): string;
            public getTitle(): string;
            public getOrg(): string;
            public getNames(): native.Array<string>;
            public constructor(param0: com.google.zxing.client.result.ParsedResultType);
            public getBirthday(): string;
            public getPhoneNumbers(): native.Array<string>;
            public getPhoneTypes(): native.Array<string>;
            public getEmailTypes(): native.Array<string>;
            public getNote(): string;
            public getAddresses(): native.Array<string>;
            public getPronunciation(): string;
            public getInstantMessenger(): string;
            public constructor(param0: native.Array<string>, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: native.Array<string>, param5: native.Array<string>, param6: native.Array<string>, param7: string, param8: string, param9: native.Array<string>, param10: native.Array<string>, param11: string, param12: string, param13: string, param14: native.Array<string>, param15: native.Array<string>);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class BizcardResultParser extends com.google.zxing.client.result.AbstractDoCoMoResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.BizcardResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.AddressBookParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class BookmarkDoCoMoResultParser extends com.google.zxing.client.result.AbstractDoCoMoResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.BookmarkDoCoMoResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.URIParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class CalendarParsedResult extends com.google.zxing.client.result.ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.CalendarParsedResult>;
            public getLongitude(): number;
            public isStartAllDay(): boolean;
            public getStartTimestamp(): number;
            public getSummary(): string;
            public getEndTimestamp(): number;
            public getLocation(): string;
            public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: native.Array<string>, param7: string, param8: number, param9: number);
            public getAttendees(): native.Array<string>;
            public getDisplayResult(): string;
            /** @deprecated */
            public getStart(): java.util.Date;
            public getOrganizer(): string;
            public getLatitude(): number;
            public constructor(param0: com.google.zxing.client.result.ParsedResultType);
            public isEndAllDay(): boolean;
            /** @deprecated */
            public getEnd(): java.util.Date;
            public getDescription(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class EmailAddressParsedResult extends com.google.zxing.client.result.ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.EmailAddressParsedResult>;
            public getBody(): string;
            public getTos(): native.Array<string>;
            public getCCs(): native.Array<string>;
            public getSubject(): string;
            public getBCCs(): native.Array<string>;
            /** @deprecated */
            public getEmailAddress(): string;
            /** @deprecated */
            public getMailtoURI(): string;
            public getDisplayResult(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class EmailAddressResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.EmailAddressResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.EmailAddressParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class EmailDoCoMoResultParser extends com.google.zxing.client.result.AbstractDoCoMoResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.EmailDoCoMoResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.EmailAddressParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class ExpandedProductParsedResult extends com.google.zxing.client.result.ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.ExpandedProductParsedResult>;
            public static KILOGRAM: string;
            public static POUND: string;
            public getProductionDate(): string;
            public getLotNumber(): string;
            public getPackagingDate(): string;
            public getWeightIncrement(): string;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: java.util.Map<string, string>);
            public getPrice(): string;
            public getPriceIncrement(): string;
            public getPriceCurrency(): string;
            public getDisplayResult(): string;
            public getProductID(): string;
            public getSscc(): string;
            public getBestBeforeDate(): string;
            public getWeightType(): string;
            public getExpirationDate(): string;
            public constructor(param0: com.google.zxing.client.result.ParsedResultType);
            public getUncommonAIs(): java.util.Map<string, string>;
            public getRawText(): string;
            public getWeight(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class ExpandedProductResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.ExpandedProductResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ExpandedProductParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class GeoParsedResult extends com.google.zxing.client.result.ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.GeoParsedResult>;
            public getLatitude(): number;
            public getLongitude(): number;
            public getGeoURI(): string;
            public getQuery(): string;
            public getAltitude(): number;
            public getDisplayResult(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class GeoResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.GeoResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.GeoParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class ISBNParsedResult extends com.google.zxing.client.result.ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.ISBNParsedResult>;
            public getISBN(): string;
            public getDisplayResult(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class ISBNResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.ISBNResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ISBNParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export abstract class ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.ParsedResult>;
            public getType(): com.google.zxing.client.result.ParsedResultType;
            public static maybeAppend(param0: native.Array<string>, param1: java.lang.StringBuilder): void;
            public static maybeAppend(param0: string, param1: java.lang.StringBuilder): void;
            public constructor(param0: com.google.zxing.client.result.ParsedResultType);
            public getDisplayResult(): string;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class ParsedResultType {
            public static class: java.lang.Class<com.google.zxing.client.result.ParsedResultType>;
            public static ADDRESSBOOK: com.google.zxing.client.result.ParsedResultType;
            public static EMAIL_ADDRESS: com.google.zxing.client.result.ParsedResultType;
            public static PRODUCT: com.google.zxing.client.result.ParsedResultType;
            public static URI: com.google.zxing.client.result.ParsedResultType;
            public static TEXT: com.google.zxing.client.result.ParsedResultType;
            public static GEO: com.google.zxing.client.result.ParsedResultType;
            public static TEL: com.google.zxing.client.result.ParsedResultType;
            public static SMS: com.google.zxing.client.result.ParsedResultType;
            public static CALENDAR: com.google.zxing.client.result.ParsedResultType;
            public static WIFI: com.google.zxing.client.result.ParsedResultType;
            public static ISBN: com.google.zxing.client.result.ParsedResultType;
            public static VIN: com.google.zxing.client.result.ParsedResultType;
            public static values(): native.Array<com.google.zxing.client.result.ParsedResultType>;
            public static valueOf(param0: string): com.google.zxing.client.result.ParsedResultType;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class ProductParsedResult extends com.google.zxing.client.result.ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.ProductParsedResult>;
            public getDisplayResult(): string;
            public getProductID(): string;
            public getNormalizedProductID(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class ProductResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.ProductResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ProductParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export abstract class ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.ResultParser>;
            public constructor();
            public static getMassagedText(param0: com.google.zxing.Result): string;
            public static parseResult(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public static isStringOfDigits(param0: string, param1: number): boolean;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public static maybeAppend(param0: native.Array<string>, param1: java.lang.StringBuilder): void;
            public static maybeAppend(param0: string, param1: java.lang.StringBuilder): void;
            public static unescapeBackslash(param0: string): string;
            public static parseHexDigit(param0: string): number;
            public static maybeWrap(param0: string): native.Array<string>;
            public static isSubstringOfDigits(param0: string, param1: number, param2: number): boolean;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class SMSMMSResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.SMSMMSResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.SMSParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class SMSParsedResult extends com.google.zxing.client.result.ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.SMSParsedResult>;
            public constructor(param0: string, param1: string, param2: string, param3: string);
            public getBody(): string;
            public getNumbers(): native.Array<string>;
            public constructor(param0: com.google.zxing.client.result.ParsedResultType);
            public getSMSURI(): string;
            public getSubject(): string;
            public constructor(param0: native.Array<string>, param1: native.Array<string>, param2: string, param3: string);
            public getVias(): native.Array<string>;
            public getDisplayResult(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class SMSTOMMSTOResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.SMSTOMMSTOResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.SMSParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class SMTPResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.SMTPResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.EmailAddressParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class TelParsedResult extends com.google.zxing.client.result.ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.TelParsedResult>;
            public getNumber(): string;
            public constructor(param0: string, param1: string, param2: string);
            public constructor(param0: com.google.zxing.client.result.ParsedResultType);
            public getTelURI(): string;
            public getDisplayResult(): string;
            public getTitle(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class TelResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.TelResultParser>;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.TelParsedResult;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class TextParsedResult extends com.google.zxing.client.result.ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.TextParsedResult>;
            public constructor(param0: com.google.zxing.client.result.ParsedResultType);
            public constructor(param0: string, param1: string);
            public getLanguage(): string;
            public getText(): string;
            public getDisplayResult(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class URIParsedResult extends com.google.zxing.client.result.ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.URIParsedResult>;
            public constructor(param0: com.google.zxing.client.result.ParsedResultType);
            public getURI(): string;
            public constructor(param0: string, param1: string);
            public getDisplayResult(): string;
            public getTitle(): string;
            /** @deprecated */
            public isPossiblyMaliciousURI(): boolean;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class URIResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.URIResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.URIParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class URLTOResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.URLTOResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.URIParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class VCardResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.VCardResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.AddressBookParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class VEventResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.VEventResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.CalendarParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class VINParsedResult extends com.google.zxing.client.result.ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.VINParsedResult>;
            public getVehicleIdentifierSection(): string;
            public getModelYear(): number;
            public getVehicleAttributes(): string;
            public getSequentialNumber(): string;
            public constructor(param0: com.google.zxing.client.result.ParsedResultType);
            public getVehicleDescriptorSection(): string;
            public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: number, param7: string, param8: string);
            public getCountryCode(): string;
            public getVIN(): string;
            public getDisplayResult(): string;
            public getWorldManufacturerID(): string;
            public getPlantCode(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class VINResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.VINResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.VINParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class WifiParsedResult extends com.google.zxing.client.result.ParsedResult {
            public static class: java.lang.Class<com.google.zxing.client.result.WifiParsedResult>;
            public getPhase2Method(): string;
            public getPassword(): string;
            public constructor(param0: string, param1: string, param2: string, param3: boolean, param4: string, param5: string, param6: string, param7: string);
            public getNetworkEncryption(): string;
            public getIdentity(): string;
            public getDisplayResult(): string;
            public constructor(param0: string, param1: string, param2: string);
            public isHidden(): boolean;
            public getEapMethod(): string;
            public constructor(param0: com.google.zxing.client.result.ParsedResultType);
            public constructor(param0: string, param1: string, param2: string, param3: boolean);
            public getSsid(): string;
            public getAnonymousIdentity(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace result {
          export class WifiResultParser extends com.google.zxing.client.result.ResultParser {
            public static class: java.lang.Class<com.google.zxing.client.result.WifiResultParser>;
            public constructor();
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.ParsedResult;
            public parse(param0: com.google.zxing.Result): com.google.zxing.client.result.WifiParsedResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export class BitArray {
          public static class: java.lang.Class<com.google.zxing.common.BitArray>;
          public appendBits(param0: number, param1: number): void;
          public get(param0: number): boolean;
          public setRange(param0: number, param1: number): void;
          public appendBit(param0: boolean): void;
          public setBulk(param0: number, param1: number): void;
          public toBytes(param0: number, param1: native.Array<number>, param2: number, param3: number): void;
          public xor(param0: com.google.zxing.common.BitArray): void;
          public getNextUnset(param0: number): number;
          public getSize(): number;
          public getSizeInBytes(): number;
          public reverse(): void;
          public appendBitArray(param0: com.google.zxing.common.BitArray): void;
          public clone(): com.google.zxing.common.BitArray;
          public equals(param0: any): boolean;
          public toString(): string;
          public getNextSet(param0: number): number;
          public constructor();
          public set(param0: number): void;
          public clear(): void;
          public isRange(param0: number, param1: number, param2: boolean): boolean;
          public flip(param0: number): void;
          public getBitArray(): native.Array<number>;
          public hashCode(): number;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export class BitMatrix {
          public static class: java.lang.Class<com.google.zxing.common.BitMatrix>;
          public toString(param0: string, param1: string): string;
          public rotate180(): void;
          public clone(): com.google.zxing.common.BitMatrix;
          public flip(param0: number, param1: number): void;
          public unset(param0: number, param1: number): void;
          public setRow(param0: number, param1: com.google.zxing.common.BitArray): void;
          public toString(): string;
          public clear(): void;
          public getEnclosingRectangle(): native.Array<number>;
          public setRegion(param0: number, param1: number, param2: number, param3: number): void;
          public hashCode(): number;
          public get(param0: number, param1: number): boolean;
          public constructor(param0: number);
          public constructor(param0: number, param1: number);
          public static parse(param0: native.Array<native.Array<boolean>>): com.google.zxing.common.BitMatrix;
          public getRow(param0: number, param1: com.google.zxing.common.BitArray): com.google.zxing.common.BitArray;
          public getHeight(): number;
          public getWidth(): number;
          /** @deprecated */
          public toString(param0: string, param1: string, param2: string): string;
          public equals(param0: any): boolean;
          public static parse(param0: string, param1: string, param2: string): com.google.zxing.common.BitMatrix;
          public set(param0: number, param1: number): void;
          public xor(param0: com.google.zxing.common.BitMatrix): void;
          public getTopLeftOnBit(): native.Array<number>;
          public getBottomRightOnBit(): native.Array<number>;
          public getRowSize(): number;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export class BitSource {
          public static class: java.lang.Class<com.google.zxing.common.BitSource>;
          public available(): number;
          public constructor(param0: native.Array<number>);
          public getBitOffset(): number;
          public readBits(param0: number): number;
          public getByteOffset(): number;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export class CharacterSetECI {
          public static class: java.lang.Class<com.google.zxing.common.CharacterSetECI>;
          public static Cp437: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_1: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_2: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_3: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_4: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_5: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_6: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_7: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_8: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_9: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_10: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_11: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_13: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_14: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_15: com.google.zxing.common.CharacterSetECI;
          public static ISO8859_16: com.google.zxing.common.CharacterSetECI;
          public static SJIS: com.google.zxing.common.CharacterSetECI;
          public static Cp1250: com.google.zxing.common.CharacterSetECI;
          public static Cp1251: com.google.zxing.common.CharacterSetECI;
          public static Cp1252: com.google.zxing.common.CharacterSetECI;
          public static Cp1256: com.google.zxing.common.CharacterSetECI;
          public static UnicodeBigUnmarked: com.google.zxing.common.CharacterSetECI;
          public static UTF8: com.google.zxing.common.CharacterSetECI;
          public static ASCII: com.google.zxing.common.CharacterSetECI;
          public static Big5: com.google.zxing.common.CharacterSetECI;
          public static GB18030: com.google.zxing.common.CharacterSetECI;
          public static EUC_KR: com.google.zxing.common.CharacterSetECI;
          public static getCharacterSetECIByName(param0: string): com.google.zxing.common.CharacterSetECI;
          public static values(): native.Array<com.google.zxing.common.CharacterSetECI>;
          public getValue(): number;
          public static valueOf(param0: string): com.google.zxing.common.CharacterSetECI;
          public static getCharacterSetECIByValue(param0: number): com.google.zxing.common.CharacterSetECI;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export class DecoderResult {
          public static class: java.lang.Class<com.google.zxing.common.DecoderResult>;
          public constructor(param0: native.Array<number>, param1: string, param2: java.util.List<native.Array<number>>, param3: string);
          public getByteSegments(): java.util.List<native.Array<number>>;
          public getErrorsCorrected(): java.lang.Integer;
          public setErrorsCorrected(param0: java.lang.Integer): void;
          public getText(): string;
          public getErasures(): java.lang.Integer;
          public getECLevel(): string;
          public setNumBits(param0: number): void;
          public setErasures(param0: java.lang.Integer): void;
          public setOther(param0: any): void;
          public getStructuredAppendParity(): number;
          public hasStructuredAppend(): boolean;
          public constructor(param0: native.Array<number>, param1: string, param2: java.util.List<native.Array<number>>, param3: string, param4: number, param5: number);
          public getRawBytes(): native.Array<number>;
          public getOther(): any;
          public getStructuredAppendSequenceNumber(): number;
          public getNumBits(): number;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export class DefaultGridSampler extends com.google.zxing.common.GridSampler {
          public static class: java.lang.Class<com.google.zxing.common.DefaultGridSampler>;
          public constructor();
          public sampleGrid(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number, param16: number, param17: number, param18: number): com.google.zxing.common.BitMatrix;
          public sampleGrid(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: com.google.zxing.common.PerspectiveTransform): com.google.zxing.common.BitMatrix;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export class DetectorResult {
          public static class: java.lang.Class<com.google.zxing.common.DetectorResult>;
          public constructor(param0: com.google.zxing.common.BitMatrix, param1: native.Array<com.google.zxing.ResultPoint>);
          public getBits(): com.google.zxing.common.BitMatrix;
          public getPoints(): native.Array<com.google.zxing.ResultPoint>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export class GlobalHistogramBinarizer extends com.google.zxing.Binarizer {
          public static class: java.lang.Class<com.google.zxing.common.GlobalHistogramBinarizer>;
          public constructor(param0: com.google.zxing.LuminanceSource);
          public createBinarizer(param0: com.google.zxing.LuminanceSource): com.google.zxing.Binarizer;
          public getBlackMatrix(): com.google.zxing.common.BitMatrix;
          public getBlackRow(param0: number, param1: com.google.zxing.common.BitArray): com.google.zxing.common.BitArray;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export abstract class GridSampler {
          public static class: java.lang.Class<com.google.zxing.common.GridSampler>;
          public constructor();
          public sampleGrid(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number, param16: number, param17: number, param18: number): com.google.zxing.common.BitMatrix;
          public static checkAndNudgePoints(param0: com.google.zxing.common.BitMatrix, param1: native.Array<number>): void;
          public sampleGrid(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: com.google.zxing.common.PerspectiveTransform): com.google.zxing.common.BitMatrix;
          public static getInstance(): com.google.zxing.common.GridSampler;
          public static setGridSampler(param0: com.google.zxing.common.GridSampler): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export class HybridBinarizer extends com.google.zxing.common.GlobalHistogramBinarizer {
          public static class: java.lang.Class<com.google.zxing.common.HybridBinarizer>;
          public constructor(param0: com.google.zxing.LuminanceSource);
          public createBinarizer(param0: com.google.zxing.LuminanceSource): com.google.zxing.Binarizer;
          public getBlackMatrix(): com.google.zxing.common.BitMatrix;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export class PerspectiveTransform {
          public static class: java.lang.Class<com.google.zxing.common.PerspectiveTransform>;
          public transformPoints(param0: native.Array<number>, param1: native.Array<number>): void;
          public transformPoints(param0: native.Array<number>): void;
          public static quadrilateralToQuadrilateral(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number, param15: number): com.google.zxing.common.PerspectiveTransform;
          public static quadrilateralToSquare(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): com.google.zxing.common.PerspectiveTransform;
          public static squareToQuadrilateral(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): com.google.zxing.common.PerspectiveTransform;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export class StringUtils {
          public static class: java.lang.Class<com.google.zxing.common.StringUtils>;
          public static SHIFT_JIS: string;
          public static GB2312: string;
          public static guessEncoding(param0: native.Array<number>, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): string;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export namespace detector {
          export class MathUtils {
            public static class: java.lang.Class<com.google.zxing.common.detector.MathUtils>;
            public static distance(param0: number, param1: number, param2: number, param3: number): number;
            public static round(param0: number): number;
            public static sum(param0: native.Array<number>): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export namespace detector {
          export class MonochromeRectangleDetector {
            public static class: java.lang.Class<com.google.zxing.common.detector.MonochromeRectangleDetector>;
            public detect(): native.Array<com.google.zxing.ResultPoint>;
            public constructor(param0: com.google.zxing.common.BitMatrix);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export namespace detector {
          export class WhiteRectangleDetector {
            public static class: java.lang.Class<com.google.zxing.common.detector.WhiteRectangleDetector>;
            public constructor(param0: com.google.zxing.common.BitMatrix, param1: number, param2: number, param3: number);
            public detect(): native.Array<com.google.zxing.ResultPoint>;
            public constructor(param0: com.google.zxing.common.BitMatrix);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export namespace reedsolomon {
          export class GenericGF {
            public static class: java.lang.Class<com.google.zxing.common.reedsolomon.GenericGF>;
            public static AZTEC_DATA_12: com.google.zxing.common.reedsolomon.GenericGF;
            public static AZTEC_DATA_10: com.google.zxing.common.reedsolomon.GenericGF;
            public static AZTEC_DATA_6: com.google.zxing.common.reedsolomon.GenericGF;
            public static AZTEC_PARAM: com.google.zxing.common.reedsolomon.GenericGF;
            public static QR_CODE_FIELD_256: com.google.zxing.common.reedsolomon.GenericGF;
            public static DATA_MATRIX_FIELD_256: com.google.zxing.common.reedsolomon.GenericGF;
            public static AZTEC_DATA_8: com.google.zxing.common.reedsolomon.GenericGF;
            public static MAXICODE_FIELD_64: com.google.zxing.common.reedsolomon.GenericGF;
            public getSize(): number;
            public constructor(param0: number, param1: number, param2: number);
            public getGeneratorBase(): number;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export namespace reedsolomon {
          export class GenericGFPoly {
            public static class: java.lang.Class<com.google.zxing.common.reedsolomon.GenericGFPoly>;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export namespace reedsolomon {
          export class ReedSolomonDecoder {
            public static class: java.lang.Class<com.google.zxing.common.reedsolomon.ReedSolomonDecoder>;
            public constructor(param0: com.google.zxing.common.reedsolomon.GenericGF);
            public decode(param0: native.Array<number>, param1: number): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export namespace reedsolomon {
          export class ReedSolomonEncoder {
            public static class: java.lang.Class<com.google.zxing.common.reedsolomon.ReedSolomonEncoder>;
            public constructor(param0: com.google.zxing.common.reedsolomon.GenericGF);
            public encode(param0: native.Array<number>, param1: number): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace common {
        export namespace reedsolomon {
          export class ReedSolomonException {
            public static class: java.lang.Class<com.google.zxing.common.reedsolomon.ReedSolomonException>;
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export class DataMatrixReader extends com.google.zxing.Reader {
          public static class: java.lang.Class<com.google.zxing.datamatrix.DataMatrixReader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export class DataMatrixWriter extends com.google.zxing.Writer {
          public static class: java.lang.Class<com.google.zxing.datamatrix.DataMatrixWriter>;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace decoder {
          export class BitMatrixParser {
            public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.BitMatrixParser>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace decoder {
          export class DataBlock {
            public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.DataBlock>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace decoder {
          export class DecodedBitStreamParser {
            public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.DecodedBitStreamParser>;
          }
          export namespace DecodedBitStreamParser {
            export class Mode {
              public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode>;
              public static PAD_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
              public static ASCII_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
              public static C40_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
              public static TEXT_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
              public static ANSIX12_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
              public static EDIFACT_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
              public static BASE256_ENCODE: com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
              public static valueOf(param0: string): com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode;
              public static values(): native.Array<com.google.zxing.datamatrix.decoder.DecodedBitStreamParser.Mode>;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace decoder {
          export class Decoder {
            public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.Decoder>;
            public constructor();
            public decode(param0: native.Array<native.Array<boolean>>): com.google.zxing.common.DecoderResult;
            public decode(param0: com.google.zxing.common.BitMatrix): com.google.zxing.common.DecoderResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace decoder {
          export class Version {
            public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.Version>;
            public getDataRegionSizeRows(): number;
            public getSymbolSizeColumns(): number;
            public getDataRegionSizeColumns(): number;
            public getVersionNumber(): number;
            public getTotalCodewords(): number;
            public getSymbolSizeRows(): number;
            public static getVersionForDimensions(param0: number, param1: number): com.google.zxing.datamatrix.decoder.Version;
            public toString(): string;
          }
          export namespace Version {
            export class ECB {
              public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.Version.ECB>;
            }
            export class ECBlocks {
              public static class: java.lang.Class<com.google.zxing.datamatrix.decoder.Version.ECBlocks>;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace detector {
          export class Detector {
            public static class: java.lang.Class<com.google.zxing.datamatrix.detector.Detector>;
            public constructor(param0: com.google.zxing.common.BitMatrix);
            public detect(): com.google.zxing.common.DetectorResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class ASCIIEncoder extends com.google.zxing.datamatrix.encoder.Encoder {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.ASCIIEncoder>;
            public getEncodingMode(): number;
            public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class Base256Encoder extends com.google.zxing.datamatrix.encoder.Encoder {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.Base256Encoder>;
            public getEncodingMode(): number;
            public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class C40Encoder extends com.google.zxing.datamatrix.encoder.Encoder {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.C40Encoder>;
            public getEncodingMode(): number;
            public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class DataMatrixSymbolInfo144 extends com.google.zxing.datamatrix.encoder.SymbolInfo {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.DataMatrixSymbolInfo144>;
            public getDataLengthForInterleavedBlock(param0: number): number;
            public getInterleavedBlockCount(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class DefaultPlacement {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.DefaultPlacement>;
            public getBit(param0: number, param1: number): boolean;
            public constructor(param0: string, param1: number, param2: number);
            public place(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class EdifactEncoder extends com.google.zxing.datamatrix.encoder.Encoder {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.EdifactEncoder>;
            public getEncodingMode(): number;
            public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class Encoder {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.Encoder>;
            /**
						 * Constructs a new instance of the com.google.zxing.datamatrix.encoder.Encoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
            public constructor(implementation: {
              getEncodingMode(): number;
              encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
            });
            public constructor();
            public getEncodingMode(): number;
            public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class EncoderContext {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.EncoderContext>;
            public setSymbolShape(param0: com.google.zxing.datamatrix.encoder.SymbolShapeHint): void;
            public getMessage(): string;
            public writeCodewords(param0: string): void;
            public resetEncoderSignal(): void;
            public getRemainingCharacters(): number;
            public hasMoreCharacters(): boolean;
            public getCurrent(): string;
            public writeCodeword(param0: string): void;
            public signalEncoderChange(param0: number): void;
            public setSizeConstraints(param0: com.google.zxing.Dimension, param1: com.google.zxing.Dimension): void;
            public getNewEncoding(): number;
            public getCodewords(): java.lang.StringBuilder;
            public updateSymbolInfo(): void;
            public updateSymbolInfo(param0: number): void;
            public resetSymbolInfo(): void;
            public getSymbolInfo(): com.google.zxing.datamatrix.encoder.SymbolInfo;
            public setSkipAtEnd(param0: number): void;
            public getCurrentChar(): string;
            public getCodewordCount(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class ErrorCorrection {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.ErrorCorrection>;
            public static encodeECC200(param0: string, param1: com.google.zxing.datamatrix.encoder.SymbolInfo): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class HighLevelEncoder {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.HighLevelEncoder>;
            public static encodeHighLevel(param0: string): string;
            public static encodeHighLevel(param0: string, param1: com.google.zxing.datamatrix.encoder.SymbolShapeHint, param2: com.google.zxing.Dimension, param3: com.google.zxing.Dimension): string;
            public static determineConsecutiveDigitCount(param0: string, param1: number): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class SymbolInfo {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.SymbolInfo>;
            public matrixWidth: number;
            public matrixHeight: number;
            public getDataLengthForInterleavedBlock(param0: number): number;
            public static lookup(param0: number, param1: com.google.zxing.datamatrix.encoder.SymbolShapeHint, param2: com.google.zxing.Dimension, param3: com.google.zxing.Dimension, param4: boolean): com.google.zxing.datamatrix.encoder.SymbolInfo;
            public getErrorLengthForInterleavedBlock(param0: number): number;
            public getInterleavedBlockCount(): number;
            public toString(): string;
            public static lookup(param0: number, param1: boolean, param2: boolean): com.google.zxing.datamatrix.encoder.SymbolInfo;
            public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number);
            public getSymbolDataWidth(): number;
            public getSymbolDataHeight(): number;
            public getSymbolHeight(): number;
            public getDataCapacity(): number;
            public getErrorCodewords(): number;
            public getSymbolWidth(): number;
            public static lookup(param0: number): com.google.zxing.datamatrix.encoder.SymbolInfo;
            public static lookup(param0: number, param1: com.google.zxing.datamatrix.encoder.SymbolShapeHint): com.google.zxing.datamatrix.encoder.SymbolInfo;
            public static overrideSymbolSet(param0: native.Array<com.google.zxing.datamatrix.encoder.SymbolInfo>): void;
            public getCodewordCount(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class SymbolShapeHint {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.SymbolShapeHint>;
            public static FORCE_NONE: com.google.zxing.datamatrix.encoder.SymbolShapeHint;
            public static FORCE_SQUARE: com.google.zxing.datamatrix.encoder.SymbolShapeHint;
            public static FORCE_RECTANGLE: com.google.zxing.datamatrix.encoder.SymbolShapeHint;
            public static values(): native.Array<com.google.zxing.datamatrix.encoder.SymbolShapeHint>;
            public static valueOf(param0: string): com.google.zxing.datamatrix.encoder.SymbolShapeHint;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class TextEncoder extends com.google.zxing.datamatrix.encoder.C40Encoder {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.TextEncoder>;
            public getEncodingMode(): number;
            public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace datamatrix {
        export namespace encoder {
          export class X12Encoder extends com.google.zxing.datamatrix.encoder.C40Encoder {
            public static class: java.lang.Class<com.google.zxing.datamatrix.encoder.X12Encoder>;
            public getEncodingMode(): number;
            public encode(param0: com.google.zxing.datamatrix.encoder.EncoderContext): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace maxicode {
        export class MaxiCodeReader extends com.google.zxing.Reader {
          public static class: java.lang.Class<com.google.zxing.maxicode.MaxiCodeReader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace maxicode {
        export namespace decoder {
          export class BitMatrixParser {
            public static class: java.lang.Class<com.google.zxing.maxicode.decoder.BitMatrixParser>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace maxicode {
        export namespace decoder {
          export class DecodedBitStreamParser {
            public static class: java.lang.Class<com.google.zxing.maxicode.decoder.DecodedBitStreamParser>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace maxicode {
        export namespace decoder {
          export class Decoder {
            public static class: java.lang.Class<com.google.zxing.maxicode.decoder.Decoder>;
            public constructor();
            public decode(param0: com.google.zxing.common.BitMatrix, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.common.DecoderResult;
            public decode(param0: com.google.zxing.common.BitMatrix): com.google.zxing.common.DecoderResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace multi {
        export class ByQuadrantReader extends com.google.zxing.Reader {
          public static class: java.lang.Class<com.google.zxing.multi.ByQuadrantReader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor(param0: com.google.zxing.Reader);
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace multi {
        export class GenericMultipleBarcodeReader extends com.google.zxing.multi.MultipleBarcodeReader {
          public static class: java.lang.Class<com.google.zxing.multi.GenericMultipleBarcodeReader>;
          public decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): native.Array<com.google.zxing.Result>;
          public decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
          public constructor(param0: com.google.zxing.Reader);
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace multi {
        export class MultipleBarcodeReader {
          public static class: java.lang.Class<com.google.zxing.multi.MultipleBarcodeReader>;
          /**
					 * Constructs a new instance of the com.google.zxing.multi.MultipleBarcodeReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
          public constructor(implementation: {
            decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
            decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): native.Array<com.google.zxing.Result>;
          });
          public constructor();
          public decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): native.Array<com.google.zxing.Result>;
          public decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace multi {
        export namespace qrcode {
          export class QRCodeMultiReader extends com.google.zxing.qrcode.QRCodeReader implements com.google.zxing.multi.MultipleBarcodeReader {
            public static class: java.lang.Class<com.google.zxing.multi.qrcode.QRCodeMultiReader>;
            public constructor();
            public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
            public decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): native.Array<com.google.zxing.Result>;
            public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
            public decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
            public reset(): void;
          }
          export namespace QRCodeMultiReader {
            export class SAComparator extends java.lang.Object {
              public static class: java.lang.Class<com.google.zxing.multi.qrcode.QRCodeMultiReader.SAComparator>;
              public compare(param0: com.google.zxing.Result, param1: com.google.zxing.Result): number;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace multi {
        export namespace qrcode {
          export namespace detector {
            export class MultiDetector extends com.google.zxing.qrcode.detector.Detector {
              public static class: java.lang.Class<com.google.zxing.multi.qrcode.detector.MultiDetector>;
              public constructor(param0: com.google.zxing.common.BitMatrix);
              public detectMulti(param0: java.util.Map<com.google.zxing.DecodeHintType, any>): native.Array<com.google.zxing.common.DetectorResult>;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace multi {
        export namespace qrcode {
          export namespace detector {
            export class MultiFinderPatternFinder extends com.google.zxing.qrcode.detector.FinderPatternFinder {
              public static class: java.lang.Class<com.google.zxing.multi.qrcode.detector.MultiFinderPatternFinder>;
              public findMulti(param0: java.util.Map<com.google.zxing.DecodeHintType, any>): native.Array<com.google.zxing.qrcode.detector.FinderPatternInfo>;
            }
            export namespace MultiFinderPatternFinder {
              export class ModuleSizeComparator extends java.lang.Object {
                public static class: java.lang.Class<com.google.zxing.multi.qrcode.detector.MultiFinderPatternFinder.ModuleSizeComparator>;
                public compare(param0: com.google.zxing.qrcode.detector.FinderPattern, param1: com.google.zxing.qrcode.detector.FinderPattern): number;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class CodaBarReader extends com.google.zxing.oned.OneDReader {
          public static class: java.lang.Class<com.google.zxing.oned.CodaBarReader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class CodaBarWriter extends com.google.zxing.oned.OneDimensionalCodeWriter {
          public static class: java.lang.Class<com.google.zxing.oned.CodaBarWriter>;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
          public encode(param0: string): native.Array<boolean>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class Code128Reader extends com.google.zxing.oned.OneDReader {
          public static class: java.lang.Class<com.google.zxing.oned.Code128Reader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class Code128Writer extends com.google.zxing.oned.OneDimensionalCodeWriter {
          public static class: java.lang.Class<com.google.zxing.oned.Code128Writer>;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
          public encode(param0: string): native.Array<boolean>;
        }
        export namespace Code128Writer {
          export class CType {
            public static class: java.lang.Class<com.google.zxing.oned.Code128Writer.CType>;
            public static UNCODABLE: com.google.zxing.oned.Code128Writer.CType;
            public static ONE_DIGIT: com.google.zxing.oned.Code128Writer.CType;
            public static TWO_DIGITS: com.google.zxing.oned.Code128Writer.CType;
            public static FNC_1: com.google.zxing.oned.Code128Writer.CType;
            public static values(): native.Array<com.google.zxing.oned.Code128Writer.CType>;
            public static valueOf(param0: string): com.google.zxing.oned.Code128Writer.CType;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class Code39Reader extends com.google.zxing.oned.OneDReader {
          public static class: java.lang.Class<com.google.zxing.oned.Code39Reader>;
          public constructor(param0: boolean, param1: boolean);
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor(param0: boolean);
          public constructor();
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class Code39Writer extends com.google.zxing.oned.OneDimensionalCodeWriter {
          public static class: java.lang.Class<com.google.zxing.oned.Code39Writer>;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
          public encode(param0: string): native.Array<boolean>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class Code93Reader extends com.google.zxing.oned.OneDReader {
          public static class: java.lang.Class<com.google.zxing.oned.Code93Reader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class Code93Writer extends com.google.zxing.oned.OneDimensionalCodeWriter {
          public static class: java.lang.Class<com.google.zxing.oned.Code93Writer>;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
          /** @deprecated */
          public static appendPattern(param0: native.Array<boolean>, param1: number, param2: native.Array<number>, param3: boolean): number;
          public encode(param0: string): native.Array<boolean>;
          public static appendPattern(param0: native.Array<boolean>, param1: number, param2: native.Array<number>, param3: boolean): number;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class EAN13Reader extends com.google.zxing.oned.UPCEANReader {
          public static class: java.lang.Class<com.google.zxing.oned.EAN13Reader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
          public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: java.lang.StringBuilder): number;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class EAN13Writer extends com.google.zxing.oned.UPCEANWriter {
          public static class: java.lang.Class<com.google.zxing.oned.EAN13Writer>;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
          public encode(param0: string): native.Array<boolean>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class EAN8Reader extends com.google.zxing.oned.UPCEANReader {
          public static class: java.lang.Class<com.google.zxing.oned.EAN8Reader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
          public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: java.lang.StringBuilder): number;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class EAN8Writer extends com.google.zxing.oned.UPCEANWriter {
          public static class: java.lang.Class<com.google.zxing.oned.EAN8Writer>;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
          public encode(param0: string): native.Array<boolean>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class EANManufacturerOrgSupport {
          public static class: java.lang.Class<com.google.zxing.oned.EANManufacturerOrgSupport>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class ITFReader extends com.google.zxing.oned.OneDReader {
          public static class: java.lang.Class<com.google.zxing.oned.ITFReader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class ITFWriter extends com.google.zxing.oned.OneDimensionalCodeWriter {
          public static class: java.lang.Class<com.google.zxing.oned.ITFWriter>;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
          public encode(param0: string): native.Array<boolean>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class MultiFormatOneDReader extends com.google.zxing.oned.OneDReader {
          public static class: java.lang.Class<com.google.zxing.oned.MultiFormatOneDReader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public reset(): void;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public constructor(param0: java.util.Map<com.google.zxing.DecodeHintType, any>);
          public constructor();
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class MultiFormatUPCEANReader extends com.google.zxing.oned.OneDReader {
          public static class: java.lang.Class<com.google.zxing.oned.MultiFormatUPCEANReader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public reset(): void;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public constructor(param0: java.util.Map<com.google.zxing.DecodeHintType, any>);
          public constructor();
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export abstract class OneDReader extends com.google.zxing.Reader {
          public static class: java.lang.Class<com.google.zxing.oned.OneDReader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public constructor();
          public static recordPattern(param0: com.google.zxing.common.BitArray, param1: number, param2: native.Array<number>): void;
          public static patternMatchVariance(param0: native.Array<number>, param1: native.Array<number>, param2: number): number;
          public static recordPatternInReverse(param0: com.google.zxing.common.BitArray, param1: number, param2: native.Array<number>): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export abstract class OneDimensionalCodeWriter extends com.google.zxing.Writer {
          public static class: java.lang.Class<com.google.zxing.oned.OneDimensionalCodeWriter>;
          public getDefaultMargin(): number;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public static checkNumeric(param0: string): void;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
          public encode(param0: string): native.Array<boolean>;
          public static appendPattern(param0: native.Array<boolean>, param1: number, param2: native.Array<number>, param3: boolean): number;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class UPCAReader extends com.google.zxing.oned.UPCEANReader {
          public static class: java.lang.Class<com.google.zxing.oned.UPCAReader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: native.Array<number>, param3: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
          public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: java.lang.StringBuilder): number;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class UPCAWriter extends com.google.zxing.Writer {
          public static class: java.lang.Class<com.google.zxing.oned.UPCAWriter>;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class UPCEANExtension2Support {
          public static class: java.lang.Class<com.google.zxing.oned.UPCEANExtension2Support>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class UPCEANExtension5Support {
          public static class: java.lang.Class<com.google.zxing.oned.UPCEANExtension5Support>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class UPCEANExtensionSupport {
          public static class: java.lang.Class<com.google.zxing.oned.UPCEANExtensionSupport>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export abstract class UPCEANReader extends com.google.zxing.oned.OneDReader {
          public static class: java.lang.Class<com.google.zxing.oned.UPCEANReader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: native.Array<number>, param3: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
          public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: java.lang.StringBuilder): number;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export abstract class UPCEANWriter extends com.google.zxing.oned.OneDimensionalCodeWriter {
          public static class: java.lang.Class<com.google.zxing.oned.UPCEANWriter>;
          public getDefaultMargin(): number;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
          public encode(param0: string): native.Array<boolean>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class UPCEReader extends com.google.zxing.oned.UPCEANReader {
          public static class: java.lang.Class<com.google.zxing.oned.UPCEReader>;
          public checkChecksum(param0: string): boolean;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
          public decodeMiddle(param0: com.google.zxing.common.BitArray, param1: native.Array<number>, param2: java.lang.StringBuilder): number;
          public static convertUPCEtoUPCA(param0: string): string;
          public decodeEnd(param0: com.google.zxing.common.BitArray, param1: number): native.Array<number>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export class UPCEWriter extends com.google.zxing.oned.UPCEANWriter {
          public static class: java.lang.Class<com.google.zxing.oned.UPCEWriter>;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
          public encode(param0: string): native.Array<boolean>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export abstract class AbstractRSSReader extends com.google.zxing.oned.OneDReader {
            public static class: java.lang.Class<com.google.zxing.oned.rss.AbstractRSSReader>;
            public constructor();
            public getDataCharacterCounters(): native.Array<number>;
            public getOddCounts(): native.Array<number>;
            public static increment(param0: native.Array<number>, param1: native.Array<number>): void;
            public getDecodeFinderCounters(): native.Array<number>;
            public getOddRoundingErrors(): native.Array<number>;
            public getEvenRoundingErrors(): native.Array<number>;
            public static parseFinderValue(param0: native.Array<number>, param1: native.Array<native.Array<number>>): number;
            public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
            /** @deprecated */
            public static count(param0: native.Array<number>): number;
            public getEvenCounts(): native.Array<number>;
            public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
            public static isFinderPattern(param0: native.Array<number>): boolean;
            public reset(): void;
            public static decrement(param0: native.Array<number>, param1: native.Array<number>): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export class DataCharacter {
            public static class: java.lang.Class<com.google.zxing.oned.rss.DataCharacter>;
            public getChecksumPortion(): number;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public constructor(param0: number, param1: number);
            public toString(): string;
            public getValue(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export class FinderPattern {
            public static class: java.lang.Class<com.google.zxing.oned.rss.FinderPattern>;
            public getResultPoints(): native.Array<com.google.zxing.ResultPoint>;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getStartEnd(): native.Array<number>;
            public constructor(param0: number, param1: native.Array<number>, param2: number, param3: number, param4: number);
            public getValue(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export class Pair extends com.google.zxing.oned.rss.DataCharacter {
            public static class: java.lang.Class<com.google.zxing.oned.rss.Pair>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export class RSS14Reader extends com.google.zxing.oned.rss.AbstractRSSReader {
            public static class: java.lang.Class<com.google.zxing.oned.rss.RSS14Reader>;
            public constructor();
            public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
            public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
            public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
            public reset(): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export class RSSUtils {
            public static class: java.lang.Class<com.google.zxing.oned.rss.RSSUtils>;
            public static getRSSvalue(param0: native.Array<number>, param1: number, param2: boolean): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export class BitArrayBuilder {
              public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.BitArrayBuilder>;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export class ExpandedPair {
              public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.ExpandedPair>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export class ExpandedRow {
              public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.ExpandedRow>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export class RSSExpandedReader extends com.google.zxing.oned.rss.AbstractRSSReader {
              public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.RSSExpandedReader>;
              public constructor();
              public decodeRow(param0: number, param1: com.google.zxing.common.BitArray, param2: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
              public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
              public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
              public reset(): void;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class AI013103decoder extends com.google.zxing.oned.rss.expanded.decoders.AI013x0xDecoder {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI013103decoder>;
                public checkWeight(param0: number): number;
                public addWeightCode(param0: java.lang.StringBuilder, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class AI01320xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI013x0xDecoder {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI01320xDecoder>;
                public checkWeight(param0: number): number;
                public addWeightCode(param0: java.lang.StringBuilder, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class AI01392xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01decoder {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI01392xDecoder>;
                public parseInformation(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class AI01393xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01decoder {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI01393xDecoder>;
                public parseInformation(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class AI013x0x1xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01weightDecoder {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI013x0x1xDecoder>;
                public parseInformation(): string;
                public checkWeight(param0: number): number;
                public addWeightCode(param0: java.lang.StringBuilder, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export abstract class AI013x0xDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01weightDecoder {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI013x0xDecoder>;
                public parseInformation(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class AI01AndOtherAIs extends com.google.zxing.oned.rss.expanded.decoders.AI01decoder {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI01AndOtherAIs>;
                public parseInformation(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export abstract class AI01decoder extends com.google.zxing.oned.rss.expanded.decoders.AbstractExpandedDecoder {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI01decoder>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export abstract class AI01weightDecoder extends com.google.zxing.oned.rss.expanded.decoders.AI01decoder {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AI01weightDecoder>;
                public checkWeight(param0: number): number;
                public addWeightCode(param0: java.lang.StringBuilder, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export abstract class AbstractExpandedDecoder {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AbstractExpandedDecoder>;
                public parseInformation(): string;
                public static createDecoder(param0: com.google.zxing.common.BitArray): com.google.zxing.oned.rss.expanded.decoders.AbstractExpandedDecoder;
                public getInformation(): com.google.zxing.common.BitArray;
                public getGeneralDecoder(): com.google.zxing.oned.rss.expanded.decoders.GeneralAppIdDecoder;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class AnyAIDecoder extends com.google.zxing.oned.rss.expanded.decoders.AbstractExpandedDecoder {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.AnyAIDecoder>;
                public parseInformation(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class BlockParsedResult {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.BlockParsedResult>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class CurrentParsingState {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState>;
              }
              export namespace CurrentParsingState {
                export class State {
                  public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State>;
                  public static NUMERIC: com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State;
                  public static ALPHA: com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State;
                  public static ISO_IEC_646: com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State;
                  public static valueOf(param0: string): com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State;
                  public static values(): native.Array<com.google.zxing.oned.rss.expanded.decoders.CurrentParsingState.State>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class DecodedChar extends com.google.zxing.oned.rss.expanded.decoders.DecodedObject {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.DecodedChar>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class DecodedInformation extends com.google.zxing.oned.rss.expanded.decoders.DecodedObject {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.DecodedInformation>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class DecodedNumeric extends com.google.zxing.oned.rss.expanded.decoders.DecodedObject {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.DecodedNumeric>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export abstract class DecodedObject {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.DecodedObject>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class FieldParser {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.FieldParser>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace oned {
        export namespace rss {
          export namespace expanded {
            export namespace decoders {
              export class GeneralAppIdDecoder {
                public static class: java.lang.Class<com.google.zxing.oned.rss.expanded.decoders.GeneralAppIdDecoder>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export class PDF417Common {
          public static class: java.lang.Class<com.google.zxing.pdf417.PDF417Common>;
          public static NUMBER_OF_CODEWORDS: number;
          public static MAX_CODEWORDS_IN_BARCODE: number;
          public static MIN_ROWS_IN_BARCODE: number;
          public static MAX_ROWS_IN_BARCODE: number;
          public static MODULES_IN_CODEWORD: number;
          public static MODULES_IN_STOP_PATTERN: number;
          public static BARS_IN_MODULE: number;
          public static SYMBOL_TABLE: native.Array<number>;
          public static toIntArray(param0: java.util.Collection<java.lang.Integer>): native.Array<number>;
          /** @deprecated */
          public static getBitCountSum(param0: native.Array<number>): number;
          public static getCodeword(param0: number): number;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export class PDF417Reader implements com.google.zxing.Reader, com.google.zxing.multi.MultipleBarcodeReader {
          public static class: java.lang.Class<com.google.zxing.pdf417.PDF417Reader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
          public decodeMultiple(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): native.Array<com.google.zxing.Result>;
          public decodeMultiple(param0: com.google.zxing.BinaryBitmap): native.Array<com.google.zxing.Result>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export class PDF417ResultMetadata {
          public static class: java.lang.Class<com.google.zxing.pdf417.PDF417ResultMetadata>;
          public getSegmentIndex(): number;
          public getChecksum(): number;
          public getFileName(): string;
          /** @deprecated */
          public getOptionalData(): native.Array<number>;
          public getSegmentCount(): number;
          public getFileSize(): number;
          public isLastSegment(): boolean;
          public setFileName(param0: string): void;
          public setSegmentCount(param0: number): void;
          public setSender(param0: string): void;
          public constructor();
          public setSegmentIndex(param0: number): void;
          public setFileSize(param0: number): void;
          public getTimestamp(): number;
          public setChecksum(param0: number): void;
          public setTimestamp(param0: number): void;
          /** @deprecated */
          public setOptionalData(param0: native.Array<number>): void;
          public setLastSegment(param0: boolean): void;
          public getAddressee(): string;
          public getFileId(): string;
          public getSender(): string;
          public setFileId(param0: string): void;
          public setAddressee(param0: string): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export class PDF417Writer extends com.google.zxing.Writer {
          public static class: java.lang.Class<com.google.zxing.pdf417.PDF417Writer>;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace decoder {
          export class BarcodeMetadata {
            public static class: java.lang.Class<com.google.zxing.pdf417.decoder.BarcodeMetadata>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace decoder {
          export class BarcodeValue {
            public static class: java.lang.Class<com.google.zxing.pdf417.decoder.BarcodeValue>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace decoder {
          export class BoundingBox {
            public static class: java.lang.Class<com.google.zxing.pdf417.decoder.BoundingBox>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace decoder {
          export class Codeword {
            public static class: java.lang.Class<com.google.zxing.pdf417.decoder.Codeword>;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace decoder {
          export class DecodedBitStreamParser {
            public static class: java.lang.Class<com.google.zxing.pdf417.decoder.DecodedBitStreamParser>;
          }
          export namespace DecodedBitStreamParser {
            export class Mode {
              public static class: java.lang.Class<com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode>;
              public static ALPHA: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
              public static LOWER: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
              public static MIXED: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
              public static PUNCT: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
              public static ALPHA_SHIFT: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
              public static PUNCT_SHIFT: com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
              public static valueOf(param0: string): com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode;
              public static values(): native.Array<com.google.zxing.pdf417.decoder.DecodedBitStreamParser.Mode>;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace decoder {
          export class DetectionResult {
            public static class: java.lang.Class<com.google.zxing.pdf417.decoder.DetectionResult>;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace decoder {
          export class DetectionResultColumn {
            public static class: java.lang.Class<com.google.zxing.pdf417.decoder.DetectionResultColumn>;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace decoder {
          export class DetectionResultRowIndicatorColumn extends com.google.zxing.pdf417.decoder.DetectionResultColumn {
            public static class: java.lang.Class<com.google.zxing.pdf417.decoder.DetectionResultRowIndicatorColumn>;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace decoder {
          export class PDF417CodewordDecoder {
            public static class: java.lang.Class<com.google.zxing.pdf417.decoder.PDF417CodewordDecoder>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace decoder {
          export class PDF417ScanningDecoder {
            public static class: java.lang.Class<com.google.zxing.pdf417.decoder.PDF417ScanningDecoder>;
            public static decode(param0: com.google.zxing.common.BitMatrix, param1: com.google.zxing.ResultPoint, param2: com.google.zxing.ResultPoint, param3: com.google.zxing.ResultPoint, param4: com.google.zxing.ResultPoint, param5: number, param6: number): com.google.zxing.common.DecoderResult;
            public static toString(param0: native.Array<native.Array<com.google.zxing.pdf417.decoder.BarcodeValue>>): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace decoder {
          export namespace ec {
            export class ErrorCorrection {
              public static class: java.lang.Class<com.google.zxing.pdf417.decoder.ec.ErrorCorrection>;
              public constructor();
              public decode(param0: native.Array<number>, param1: number, param2: native.Array<number>): number;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace decoder {
          export namespace ec {
            export class ModulusGF {
              public static class: java.lang.Class<com.google.zxing.pdf417.decoder.ec.ModulusGF>;
              public static PDF417_GF: com.google.zxing.pdf417.decoder.ec.ModulusGF;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace decoder {
          export namespace ec {
            export class ModulusPoly {
              public static class: java.lang.Class<com.google.zxing.pdf417.decoder.ec.ModulusPoly>;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace detector {
          export class Detector {
            public static class: java.lang.Class<com.google.zxing.pdf417.detector.Detector>;
            public static detect(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>, param2: boolean): com.google.zxing.pdf417.detector.PDF417DetectorResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace detector {
          export class PDF417DetectorResult {
            public static class: java.lang.Class<com.google.zxing.pdf417.detector.PDF417DetectorResult>;
            public getBits(): com.google.zxing.common.BitMatrix;
            public getPoints(): java.util.List<native.Array<com.google.zxing.ResultPoint>>;
            public constructor(param0: com.google.zxing.common.BitMatrix, param1: java.util.List<native.Array<com.google.zxing.ResultPoint>>);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace encoder {
          export class BarcodeMatrix {
            public static class: java.lang.Class<com.google.zxing.pdf417.encoder.BarcodeMatrix>;
            public getMatrix(): native.Array<native.Array<number>>;
            public getScaledMatrix(param0: number, param1: number): native.Array<native.Array<number>>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace encoder {
          export class BarcodeRow {
            public static class: java.lang.Class<com.google.zxing.pdf417.encoder.BarcodeRow>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace encoder {
          export class Compaction {
            public static class: java.lang.Class<com.google.zxing.pdf417.encoder.Compaction>;
            public static AUTO: com.google.zxing.pdf417.encoder.Compaction;
            public static TEXT: com.google.zxing.pdf417.encoder.Compaction;
            public static BYTE: com.google.zxing.pdf417.encoder.Compaction;
            public static NUMERIC: com.google.zxing.pdf417.encoder.Compaction;
            public static valueOf(param0: string): com.google.zxing.pdf417.encoder.Compaction;
            public static values(): native.Array<com.google.zxing.pdf417.encoder.Compaction>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace encoder {
          export class Dimensions {
            public static class: java.lang.Class<com.google.zxing.pdf417.encoder.Dimensions>;
            public getMinCols(): number;
            public getMaxRows(): number;
            public getMaxCols(): number;
            public getMinRows(): number;
            public constructor(param0: number, param1: number, param2: number, param3: number);
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace encoder {
          export class PDF417 {
            public static class: java.lang.Class<com.google.zxing.pdf417.encoder.PDF417>;
            public setEncoding(param0: java.nio.charset.Charset): void;
            public setCompact(param0: boolean): void;
            public constructor();
            public setDimensions(param0: number, param1: number, param2: number, param3: number): void;
            public constructor(param0: boolean);
            public setCompaction(param0: com.google.zxing.pdf417.encoder.Compaction): void;
            public getBarcodeMatrix(): com.google.zxing.pdf417.encoder.BarcodeMatrix;
            public generateBarcodeLogic(param0: string, param1: number): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace encoder {
          export class PDF417ErrorCorrection {
            public static class: java.lang.Class<com.google.zxing.pdf417.encoder.PDF417ErrorCorrection>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace pdf417 {
        export namespace encoder {
          export class PDF417HighLevelEncoder {
            public static class: java.lang.Class<com.google.zxing.pdf417.encoder.PDF417HighLevelEncoder>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export class QRCodeReader extends com.google.zxing.Reader {
          public static class: java.lang.Class<com.google.zxing.qrcode.QRCodeReader>;
          public decode(param0: com.google.zxing.BinaryBitmap, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.Result;
          public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
          public reset(): void;
          public constructor();
          public getDecoder(): com.google.zxing.qrcode.decoder.Decoder;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export class QRCodeWriter extends com.google.zxing.Writer {
          public static class: java.lang.Class<com.google.zxing.qrcode.QRCodeWriter>;
          public constructor();
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
          public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace decoder {
          export class BitMatrixParser {
            public static class: java.lang.Class<com.google.zxing.qrcode.decoder.BitMatrixParser>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace decoder {
          export class DataBlock {
            public static class: java.lang.Class<com.google.zxing.qrcode.decoder.DataBlock>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace decoder {
          export abstract class DataMask {
            public static class: java.lang.Class<com.google.zxing.qrcode.decoder.DataMask>;
            public static DATA_MASK_000: com.google.zxing.qrcode.decoder.DataMask;
            public static DATA_MASK_001: com.google.zxing.qrcode.decoder.DataMask;
            public static DATA_MASK_010: com.google.zxing.qrcode.decoder.DataMask;
            public static DATA_MASK_011: com.google.zxing.qrcode.decoder.DataMask;
            public static DATA_MASK_100: com.google.zxing.qrcode.decoder.DataMask;
            public static DATA_MASK_101: com.google.zxing.qrcode.decoder.DataMask;
            public static DATA_MASK_110: com.google.zxing.qrcode.decoder.DataMask;
            public static DATA_MASK_111: com.google.zxing.qrcode.decoder.DataMask;
            public static valueOf(param0: string): com.google.zxing.qrcode.decoder.DataMask;
            public static values(): native.Array<com.google.zxing.qrcode.decoder.DataMask>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace decoder {
          export class DecodedBitStreamParser {
            public static class: java.lang.Class<com.google.zxing.qrcode.decoder.DecodedBitStreamParser>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace decoder {
          export class Decoder {
            public static class: java.lang.Class<com.google.zxing.qrcode.decoder.Decoder>;
            public constructor();
            public decode(param0: native.Array<native.Array<boolean>>): com.google.zxing.common.DecoderResult;
            public decode(param0: native.Array<native.Array<boolean>>, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.common.DecoderResult;
            public decode(param0: com.google.zxing.common.BitMatrix, param1: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.common.DecoderResult;
            public decode(param0: com.google.zxing.common.BitMatrix): com.google.zxing.common.DecoderResult;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace decoder {
          export class ErrorCorrectionLevel {
            public static class: java.lang.Class<com.google.zxing.qrcode.decoder.ErrorCorrectionLevel>;
            public static L: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
            public static M: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
            public static Q: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
            public static H: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
            public static forBits(param0: number): com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
            public static values(): native.Array<com.google.zxing.qrcode.decoder.ErrorCorrectionLevel>;
            public static valueOf(param0: string): com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
            public getBits(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace decoder {
          export class FormatInformation {
            public static class: java.lang.Class<com.google.zxing.qrcode.decoder.FormatInformation>;
            public hashCode(): number;
            public equals(param0: any): boolean;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace decoder {
          export class Mode {
            public static class: java.lang.Class<com.google.zxing.qrcode.decoder.Mode>;
            public static TERMINATOR: com.google.zxing.qrcode.decoder.Mode;
            public static NUMERIC: com.google.zxing.qrcode.decoder.Mode;
            public static ALPHANUMERIC: com.google.zxing.qrcode.decoder.Mode;
            public static STRUCTURED_APPEND: com.google.zxing.qrcode.decoder.Mode;
            public static BYTE: com.google.zxing.qrcode.decoder.Mode;
            public static ECI: com.google.zxing.qrcode.decoder.Mode;
            public static KANJI: com.google.zxing.qrcode.decoder.Mode;
            public static FNC1_FIRST_POSITION: com.google.zxing.qrcode.decoder.Mode;
            public static FNC1_SECOND_POSITION: com.google.zxing.qrcode.decoder.Mode;
            public static HANZI: com.google.zxing.qrcode.decoder.Mode;
            public static forBits(param0: number): com.google.zxing.qrcode.decoder.Mode;
            public static values(): native.Array<com.google.zxing.qrcode.decoder.Mode>;
            public getBits(): number;
            public static valueOf(param0: string): com.google.zxing.qrcode.decoder.Mode;
            public getCharacterCountBits(param0: com.google.zxing.qrcode.decoder.Version): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace decoder {
          export class QRCodeDecoderMetaData {
            public static class: java.lang.Class<com.google.zxing.qrcode.decoder.QRCodeDecoderMetaData>;
            public isMirrored(): boolean;
            public applyMirroredCorrection(param0: native.Array<com.google.zxing.ResultPoint>): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace decoder {
          export class Version {
            public static class: java.lang.Class<com.google.zxing.qrcode.decoder.Version>;
            public getDimensionForVersion(): number;
            public getAlignmentPatternCenters(): native.Array<number>;
            public static getProvisionalVersionForDimension(param0: number): com.google.zxing.qrcode.decoder.Version;
            public getVersionNumber(): number;
            public getECBlocksForLevel(param0: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel): com.google.zxing.qrcode.decoder.Version.ECBlocks;
            public getTotalCodewords(): number;
            public static getVersionForNumber(param0: number): com.google.zxing.qrcode.decoder.Version;
            public toString(): string;
          }
          export namespace Version {
            export class ECB {
              public static class: java.lang.Class<com.google.zxing.qrcode.decoder.Version.ECB>;
              public getDataCodewords(): number;
              public getCount(): number;
            }
            export class ECBlocks {
              public static class: java.lang.Class<com.google.zxing.qrcode.decoder.Version.ECBlocks>;
              public getNumBlocks(): number;
              public getECBlocks(): native.Array<com.google.zxing.qrcode.decoder.Version.ECB>;
              public getECCodewordsPerBlock(): number;
              public getTotalECCodewords(): number;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace detector {
          export class AlignmentPattern extends com.google.zxing.ResultPoint {
            public static class: java.lang.Class<com.google.zxing.qrcode.detector.AlignmentPattern>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace detector {
          export class AlignmentPatternFinder {
            public static class: java.lang.Class<com.google.zxing.qrcode.detector.AlignmentPatternFinder>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace detector {
          export class Detector {
            public static class: java.lang.Class<com.google.zxing.qrcode.detector.Detector>;
            public processFinderPatternInfo(param0: com.google.zxing.qrcode.detector.FinderPatternInfo): com.google.zxing.common.DetectorResult;
            public getImage(): com.google.zxing.common.BitMatrix;
            public findAlignmentInRegion(param0: number, param1: number, param2: number, param3: number): com.google.zxing.qrcode.detector.AlignmentPattern;
            public detect(param0: java.util.Map<com.google.zxing.DecodeHintType, any>): com.google.zxing.common.DetectorResult;
            public getResultPointCallback(): com.google.zxing.ResultPointCallback;
            public constructor(param0: com.google.zxing.common.BitMatrix);
            public detect(): com.google.zxing.common.DetectorResult;
            public calculateModuleSize(param0: com.google.zxing.ResultPoint, param1: com.google.zxing.ResultPoint, param2: com.google.zxing.ResultPoint): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace detector {
          export class FinderPattern extends com.google.zxing.ResultPoint {
            public static class: java.lang.Class<com.google.zxing.qrcode.detector.FinderPattern>;
            public getEstimatedModuleSize(): number;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace detector {
          export class FinderPatternFinder {
            public static class: java.lang.Class<com.google.zxing.qrcode.detector.FinderPatternFinder>;
            public static MIN_SKIP: number;
            public static MAX_MODULES: number;
            public static foundPatternCross(param0: native.Array<number>): boolean;
            public getImage(): com.google.zxing.common.BitMatrix;
            public clearCounts(param0: native.Array<number>): void;
            public static foundPatternDiagonal(param0: native.Array<number>): boolean;
            public shiftCounts2(param0: native.Array<number>): void;
            public constructor(param0: com.google.zxing.common.BitMatrix, param1: com.google.zxing.ResultPointCallback);
            public getPossibleCenters(): java.util.List<com.google.zxing.qrcode.detector.FinderPattern>;
            public handlePossibleCenter(param0: native.Array<number>, param1: number, param2: number): boolean;
            /** @deprecated */
            public handlePossibleCenter(param0: native.Array<number>, param1: number, param2: number, param3: boolean): boolean;
            public constructor(param0: com.google.zxing.common.BitMatrix);
          }
          export namespace FinderPatternFinder {
            export class EstimatedModuleComparator extends java.lang.Object {
              public static class: java.lang.Class<com.google.zxing.qrcode.detector.FinderPatternFinder.EstimatedModuleComparator>;
              public compare(param0: com.google.zxing.qrcode.detector.FinderPattern, param1: com.google.zxing.qrcode.detector.FinderPattern): number;
            }
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace detector {
          export class FinderPatternInfo {
            public static class: java.lang.Class<com.google.zxing.qrcode.detector.FinderPatternInfo>;
            public getBottomLeft(): com.google.zxing.qrcode.detector.FinderPattern;
            public constructor(param0: native.Array<com.google.zxing.qrcode.detector.FinderPattern>);
            public getTopRight(): com.google.zxing.qrcode.detector.FinderPattern;
            public getTopLeft(): com.google.zxing.qrcode.detector.FinderPattern;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace encoder {
          export class BlockPair {
            public static class: java.lang.Class<com.google.zxing.qrcode.encoder.BlockPair>;
            public getDataBytes(): native.Array<number>;
            public getErrorCorrectionBytes(): native.Array<number>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace encoder {
          export class ByteMatrix {
            public static class: java.lang.Class<com.google.zxing.qrcode.encoder.ByteMatrix>;
            public set(param0: number, param1: number, param2: number): void;
            public get(param0: number, param1: number): number;
            public getWidth(): number;
            public set(param0: number, param1: number, param2: boolean): void;
            public clear(param0: number): void;
            public getHeight(): number;
            public constructor(param0: number, param1: number);
            public getArray(): native.Array<native.Array<number>>;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace encoder {
          export class Encoder {
            public static class: java.lang.Class<com.google.zxing.qrcode.encoder.Encoder>;
            public static chooseMode(param0: string): com.google.zxing.qrcode.decoder.Mode;
            public static encode(param0: string, param1: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel, param2: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.qrcode.encoder.QRCode;
            public static encode(param0: string, param1: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel): com.google.zxing.qrcode.encoder.QRCode;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace encoder {
          export class MaskUtil {
            public static class: java.lang.Class<com.google.zxing.qrcode.encoder.MaskUtil>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace encoder {
          export class MatrixUtil {
            public static class: java.lang.Class<com.google.zxing.qrcode.encoder.MatrixUtil>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace qrcode {
        export namespace encoder {
          export class QRCode {
            public static class: java.lang.Class<com.google.zxing.qrcode.encoder.QRCode>;
            public static NUM_MASK_PATTERNS: number;
            public constructor();
            public setMode(param0: com.google.zxing.qrcode.decoder.Mode): void;
            public setVersion(param0: com.google.zxing.qrcode.decoder.Version): void;
            public static isValidMaskPattern(param0: number): boolean;
            public setMaskPattern(param0: number): void;
            public setMatrix(param0: com.google.zxing.qrcode.encoder.ByteMatrix): void;
            public toString(): string;
            public getMatrix(): com.google.zxing.qrcode.encoder.ByteMatrix;
            public getMaskPattern(): number;
            public getVersion(): com.google.zxing.qrcode.decoder.Version;
            public setECLevel(param0: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel): void;
            public getMode(): com.google.zxing.qrcode.decoder.Mode;
            public getECLevel(): com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
          }
        }
      }
    }
  }
}

// Generics information:
