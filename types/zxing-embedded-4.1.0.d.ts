declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace client {
        export namespace android {
          export class AmbientLightManager {
            public static class: java.lang.Class<com.google.zxing.client.android.AmbientLightManager>;
            public start(): void;
            public onAccuracyChanged(param0: globalAndroid.hardware.Sensor, param1: number): void;
            public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
            public constructor(param0: globalAndroid.content.Context, param1: com.journeyapps.barcodescanner.camera.CameraManager, param2: com.journeyapps.barcodescanner.camera.CameraSettings);
            public stop(): void;
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
        export namespace android {
          export class BeepManager {
            public static class: java.lang.Class<com.google.zxing.client.android.BeepManager>;
            public constructor(param0: globalAndroid.app.Activity);
            public playBeepSoundAndVibrate(): void;
            public playBeepSound(): globalAndroid.media.MediaPlayer;
            public setVibrateEnabled(param0: boolean): void;
            public setBeepEnabled(param0: boolean): void;
            public isVibrateEnabled(): boolean;
            public isBeepEnabled(): boolean;
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
        export namespace android {
          export class BuildConfig {
            public static class: java.lang.Class<com.google.zxing.client.android.BuildConfig>;
            public static DEBUG: boolean;
            public static LIBRARY_PACKAGE_NAME: string;
            public static APPLICATION_ID: string;
            public static BUILD_TYPE: string;
            public static FLAVOR: string;
            public static VERSION_CODE: number;
            public static VERSION_NAME: string;
            public constructor();
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
        export namespace android {
          export class DecodeFormatManager {
            public static class: java.lang.Class<com.google.zxing.client.android.DecodeFormatManager>;
            public static parseDecodeFormats(param0: globalAndroid.content.Intent): java.util.Set<com.google.zxing.BarcodeFormat>;
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
        export namespace android {
          export class DecodeHintManager {
            public static class: java.lang.Class<com.google.zxing.client.android.DecodeHintManager>;
            public static parseDecodeHints(param0: globalAndroid.content.Intent): java.util.Map<com.google.zxing.DecodeHintType, any>;
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
        export namespace android {
          export class InactivityTimer {
            public static class: java.lang.Class<com.google.zxing.client.android.InactivityTimer>;
            public activity(): void;
            public start(): void;
            public cancel(): void;
            public constructor(param0: globalAndroid.content.Context, param1: java.lang.Runnable);
          }
          export namespace InactivityTimer {
            export class PowerStatusReceiver {
              public static class: java.lang.Class<com.google.zxing.client.android.InactivityTimer.PowerStatusReceiver>;
              public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
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
      export namespace client {
        export namespace android {
          export class Intents {
            public static class: java.lang.Class<com.google.zxing.client.android.Intents>;
          }
          export namespace Intents {
            export class Scan {
              public static class: java.lang.Class<com.google.zxing.client.android.Intents.Scan>;
              public static ACTION: string;
              public static MODE: string;
              public static PRODUCT_MODE: string;
              public static ONE_D_MODE: string;
              public static QR_CODE_MODE: string;
              public static DATA_MATRIX_MODE: string;
              public static AZTEC_MODE: string;
              public static PDF417_MODE: string;
              public static FORMATS: string;
              public static CAMERA_ID: string;
              public static TORCH_ENABLED: string;
              public static CHARACTER_SET: string;
              public static BEEP_ENABLED: string;
              public static BARCODE_IMAGE_ENABLED: string;
              public static TIMEOUT: string;
              public static MISSING_CAMERA_PERMISSION: string;
              public static SHOW_MISSING_CAMERA_PERMISSION_DIALOG: string;
              public static MISSING_CAMERA_PERMISSION_DIALOG_MESSAGE: string;
              public static ORIENTATION_LOCKED: string;
              public static PROMPT_MESSAGE: string;
              public static RESULT: string;
              public static RESULT_FORMAT: string;
              public static RESULT_UPC_EAN_EXTENSION: string;
              public static RESULT_BYTES: string;
              public static RESULT_ORIENTATION: string;
              public static RESULT_ERROR_CORRECTION_LEVEL: string;
              public static RESULT_BYTE_SEGMENTS_PREFIX: string;
              public static RESULT_BARCODE_IMAGE_PATH: string;
              public static SCAN_TYPE: string;
              public static NORMAL_SCAN: number;
              public static INVERTED_SCAN: number;
              public static MIXED_SCAN: number;
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
      export namespace client {
        export namespace android {
          export namespace camera {
            export class CameraConfigurationUtils {
              public static class: java.lang.Class<com.google.zxing.client.android.camera.CameraConfigurationUtils>;
              public static setBestPreviewFPS(param0: globalAndroid.hardware.Camera.Parameters): void;
              public static setBarcodeSceneMode(param0: globalAndroid.hardware.Camera.Parameters): void;
              public static collectStats(param0: globalAndroid.hardware.Camera.Parameters): string;
              public static setVideoStabilization(param0: globalAndroid.hardware.Camera.Parameters): void;
              public static setFocusArea(param0: globalAndroid.hardware.Camera.Parameters): void;
              public static setInvertColor(param0: globalAndroid.hardware.Camera.Parameters): void;
              public static collectStats(param0: string): string;
              public static setTorch(param0: globalAndroid.hardware.Camera.Parameters, param1: boolean): void;
              public static setZoom(param0: globalAndroid.hardware.Camera.Parameters, param1: number): void;
              public static setBestExposure(param0: globalAndroid.hardware.Camera.Parameters, param1: boolean): void;
              public static setBestPreviewFPS(param0: globalAndroid.hardware.Camera.Parameters, param1: number, param2: number): void;
              public static setFocus(param0: globalAndroid.hardware.Camera.Parameters, param1: com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode, param2: boolean): void;
              public static setMetering(param0: globalAndroid.hardware.Camera.Parameters): void;
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
      export namespace client {
        export namespace android {
          export namespace camera {
            export namespace open {
              export class OpenCameraInterface {
                public static class: java.lang.Class<com.google.zxing.client.android.camera.open.OpenCameraInterface>;
                public static NO_REQUESTED_CAMERA: number;
                public static open(param0: number): globalAndroid.hardware.Camera;
                public static getCameraId(param0: number): number;
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
      export namespace integration {
        export namespace android {
          export class IntentIntegrator {
            public static class: java.lang.Class<com.google.zxing.integration.android.IntentIntegrator>;
            public static REQUEST_CODE: number;
            public static UPC_A: string;
            public static UPC_E: string;
            public static EAN_8: string;
            public static EAN_13: string;
            public static RSS_14: string;
            public static CODE_39: string;
            public static CODE_93: string;
            public static CODE_128: string;
            public static ITF: string;
            public static RSS_EXPANDED: string;
            public static QR_CODE: string;
            public static DATA_MATRIX: string;
            public static PDF_417: string;
            public static PRODUCT_CODE_TYPES: java.util.Collection<string>;
            public static ONE_D_CODE_TYPES: java.util.Collection<string>;
            public static ALL_CODE_TYPES: java.util.Collection<string>;
            public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
            public setPrompt(param0: string): com.google.zxing.integration.android.IntentIntegrator;
            public setDesiredBarcodeFormats(param0: java.util.Collection<string>): com.google.zxing.integration.android.IntentIntegrator;
            public setBarcodeImageEnabled(param0: boolean): com.google.zxing.integration.android.IntentIntegrator;
            public getMoreExtras(): java.util.Map<string, any>;
            public static parseActivityResult(param0: number, param1: globalAndroid.content.Intent): com.google.zxing.integration.android.IntentResult;
            public static forFragment(param0: globalAndroid.app.Fragment): com.google.zxing.integration.android.IntentIntegrator;
            public initiateScan(): void;
            public setTimeout(param0: number): com.google.zxing.integration.android.IntentIntegrator;
            public constructor(param0: globalAndroid.app.Activity);
            public static forSupportFragment(param0: androidx.fragment.app.Fragment): com.google.zxing.integration.android.IntentIntegrator;
            public static parseActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): com.google.zxing.integration.android.IntentResult;
            public setCameraId(param0: number): com.google.zxing.integration.android.IntentIntegrator;
            public addExtra(param0: string, param1: any): com.google.zxing.integration.android.IntentIntegrator;
            public setCaptureActivity(param0: java.lang.Class<any>): com.google.zxing.integration.android.IntentIntegrator;
            public setRequestCode(param0: number): com.google.zxing.integration.android.IntentIntegrator;
            public setOrientationLocked(param0: boolean): com.google.zxing.integration.android.IntentIntegrator;
            public setBeepEnabled(param0: boolean): com.google.zxing.integration.android.IntentIntegrator;
            public setTorchEnabled(param0: boolean): com.google.zxing.integration.android.IntentIntegrator;
            public initiateScan(param0: java.util.Collection<string>): void;
            public startActivity(param0: globalAndroid.content.Intent): void;
            public createScanIntent(): globalAndroid.content.Intent;
            public getDefaultCaptureActivity(): java.lang.Class<any>;
            public getCaptureActivity(): java.lang.Class<any>;
            public setDesiredBarcodeFormats(param0: native.Array<string>): com.google.zxing.integration.android.IntentIntegrator;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace google {
    export namespace zxing {
      export namespace integration {
        export namespace android {
          export class IntentResult {
            public static class: java.lang.Class<com.google.zxing.integration.android.IntentResult>;
            public getRawBytes(): native.Array<number>;
            public getBarcodeImagePath(): string;
            public getErrorCorrectionLevel(): string;
            public getOrientation(): java.lang.Integer;
            public getOriginalIntent(): globalAndroid.content.Intent;
            public getFormatName(): string;
            public getContents(): string;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class BarcodeCallback {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.BarcodeCallback>;
        /**
				 * Constructs a new instance of the com.journeyapps.barcodescanner.BarcodeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
        public constructor(implementation: {
          barcodeResult(param0: com.journeyapps.barcodescanner.BarcodeResult): void;
          possibleResultPoints(param0: java.util.List<com.google.zxing.ResultPoint>): void;
        });
        public constructor();
        public barcodeResult(param0: com.journeyapps.barcodescanner.BarcodeResult): void;
        public possibleResultPoints(param0: java.util.List<com.google.zxing.ResultPoint>): void;
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class BarcodeEncoder {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.BarcodeEncoder>;
        public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): com.google.zxing.common.BitMatrix;
        public encodeBitmap(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): globalAndroid.graphics.Bitmap;
        public encode(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number): com.google.zxing.common.BitMatrix;
        public createBitmap(param0: com.google.zxing.common.BitMatrix): globalAndroid.graphics.Bitmap;
        public encodeBitmap(param0: string, param1: com.google.zxing.BarcodeFormat, param2: number, param3: number, param4: java.util.Map<com.google.zxing.EncodeHintType, any>): globalAndroid.graphics.Bitmap;
        public constructor();
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class BarcodeResult {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.BarcodeResult>;
        public mResult: com.google.zxing.Result;
        public sourceData: com.journeyapps.barcodescanner.SourceData;
        public getResult(): com.google.zxing.Result;
        public getBarcodeFormat(): com.google.zxing.BarcodeFormat;
        public constructor(param0: com.google.zxing.Result, param1: com.journeyapps.barcodescanner.SourceData);
        public getRawBytes(): native.Array<number>;
        public toString(): string;
        public static transformResultPoints(param0: java.util.List<com.google.zxing.ResultPoint>, param1: com.journeyapps.barcodescanner.SourceData): java.util.List<com.google.zxing.ResultPoint>;
        public getBitmap(): globalAndroid.graphics.Bitmap;
        public getBitmapWithResultPoints(param0: number): globalAndroid.graphics.Bitmap;
        public getText(): string;
        public getResultMetadata(): java.util.Map<com.google.zxing.ResultMetadataType, any>;
        public getTransformedResultPoints(): java.util.List<com.google.zxing.ResultPoint>;
        public getResultPoints(): native.Array<com.google.zxing.ResultPoint>;
        public getBitmapScaleFactor(): number;
        public getTimestamp(): number;
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class BarcodeView extends com.journeyapps.barcodescanner.CameraPreview {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.BarcodeView>;
        public getDecoderFactory(): com.journeyapps.barcodescanner.DecoderFactory;
        public decodeContinuous(param0: com.journeyapps.barcodescanner.BarcodeCallback): void;
        public previewStarted(): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public createDefaultDecoderFactory(): com.journeyapps.barcodescanner.DecoderFactory;
        public constructor(param0: globalAndroid.content.Context);
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        public pause(): void;
        public stopDecoding(): void;
        public setDecoderFactory(param0: com.journeyapps.barcodescanner.DecoderFactory): void;
        public decodeSingle(param0: com.journeyapps.barcodescanner.BarcodeCallback): void;
      }
      export namespace BarcodeView {
        export class DecodeMode {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.BarcodeView.DecodeMode>;
          public static NONE: com.journeyapps.barcodescanner.BarcodeView.DecodeMode;
          public static SINGLE: com.journeyapps.barcodescanner.BarcodeView.DecodeMode;
          public static CONTINUOUS: com.journeyapps.barcodescanner.BarcodeView.DecodeMode;
          public static values(): native.Array<com.journeyapps.barcodescanner.BarcodeView.DecodeMode>;
          public static valueOf(param0: string): com.journeyapps.barcodescanner.BarcodeView.DecodeMode;
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class CameraPreview {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.CameraPreview>;
        public previewStarted(): void;
        public getPreviewSize(): com.journeyapps.barcodescanner.Size;
        public createCameraInstance(): com.journeyapps.barcodescanner.camera.CameraInstance;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        public getPreviewScalingStrategy(): com.journeyapps.barcodescanner.camera.PreviewScalingStrategy;
        public calculateFramingRect(param0: globalAndroid.graphics.Rect, param1: globalAndroid.graphics.Rect): globalAndroid.graphics.Rect;
        public pauseAndWait(): void;
        public setCameraSettings(param0: com.journeyapps.barcodescanner.camera.CameraSettings): void;
        public changeCameraParameters(param0: com.journeyapps.barcodescanner.camera.CameraParametersCallback): void;
        public getFramingRect(): globalAndroid.graphics.Rect;
        public constructor(param0: globalAndroid.content.Context);
        public getCameraInstance(): com.journeyapps.barcodescanner.camera.CameraInstance;
        public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
        public getFramingRectSize(): com.journeyapps.barcodescanner.Size;
        public isUseTextureView(): boolean;
        public addStateListener(param0: com.journeyapps.barcodescanner.CameraPreview.StateListener): void;
        public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
        public isPreviewActive(): boolean;
        public setPreviewScalingStrategy(param0: com.journeyapps.barcodescanner.camera.PreviewScalingStrategy): void;
        public isCameraClosed(): boolean;
        public initializeAttributes(param0: globalAndroid.util.AttributeSet): void;
        public setUseTextureView(param0: boolean): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public onSaveInstanceState(): globalAndroid.os.Parcelable;
        public resume(): void;
        public pause(): void;
        public getMarginFraction(): number;
        public setMarginFraction(param0: number): void;
        public getPreviewFramingRect(): globalAndroid.graphics.Rect;
        public isActive(): boolean;
        public setTorch(param0: boolean): void;
        public getCameraSettings(): com.journeyapps.barcodescanner.camera.CameraSettings;
        public onAttachedToWindow(): void;
        public setFramingRectSize(param0: com.journeyapps.barcodescanner.Size): void;
        public calculateTextureTransform(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Matrix;
      }
      export namespace CameraPreview {
        export class StateListener {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.CameraPreview.StateListener>;
          /**
					 * Constructs a new instance of the com.journeyapps.barcodescanner.CameraPreview$StateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
          public constructor(implementation: {
            previewSized(): void;
            previewStarted(): void;
            previewStopped(): void;
            cameraError(param0: java.lang.Exception): void;
            cameraClosed(): void;
          });
          public constructor();
          public cameraError(param0: java.lang.Exception): void;
          public previewSized(): void;
          public previewStopped(): void;
          public previewStarted(): void;
          public cameraClosed(): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class CaptureActivity {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.CaptureActivity>;
        public initializeContent(): com.journeyapps.barcodescanner.DecoratedBarcodeView;
        public onCreate(param0: globalAndroid.os.Bundle): void;
        public onResume(): void;
        public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
        public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
        public onPause(): void;
        public onDestroy(): void;
        public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
        public constructor();
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class CaptureManager {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.CaptureManager>;
        public returnResultTimeout(): void;
        public setShowMissingCameraPermissionDialog(param0: boolean): void;
        public static getCameraPermissionReqCode(): number;
        public setShowMissingCameraPermissionDialog(param0: boolean, param1: string): void;
        public onResume(): void;
        public onPause(): void;
        public constructor(param0: globalAndroid.app.Activity, param1: com.journeyapps.barcodescanner.DecoratedBarcodeView);
        public static resultIntent(param0: com.journeyapps.barcodescanner.BarcodeResult, param1: string): globalAndroid.content.Intent;
        public returnResult(param0: com.journeyapps.barcodescanner.BarcodeResult): void;
        public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
        public decode(): void;
        public displayFrameworkBugMessageAndExit(param0: string): void;
        public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
        public closeAndFinish(): void;
        public initializeFromIntent(param0: globalAndroid.content.Intent, param1: globalAndroid.os.Bundle): void;
        public lockOrientation(): void;
        public onDestroy(): void;
        public static setCameraPermissionReqCode(param0: number): void;
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class CompoundBarcodeView extends com.journeyapps.barcodescanner.DecoratedBarcodeView {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.CompoundBarcodeView>;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public constructor(param0: globalAndroid.content.Context);
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class Decoder {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.Decoder>;
        public toBitmap(param0: com.google.zxing.LuminanceSource): com.google.zxing.BinaryBitmap;
        public getReader(): com.google.zxing.Reader;
        public decode(param0: com.google.zxing.BinaryBitmap): com.google.zxing.Result;
        public getPossibleResultPoints(): java.util.List<com.google.zxing.ResultPoint>;
        public decode(param0: com.google.zxing.LuminanceSource): com.google.zxing.Result;
        public foundPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
        public constructor(param0: com.google.zxing.Reader);
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class DecoderFactory {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.DecoderFactory>;
        /**
				 * Constructs a new instance of the com.journeyapps.barcodescanner.DecoderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
        public constructor(implementation: {
          createDecoder(param0: java.util.Map<com.google.zxing.DecodeHintType, any>): com.journeyapps.barcodescanner.Decoder;
        });
        public constructor();
        public createDecoder(param0: java.util.Map<com.google.zxing.DecodeHintType, any>): com.journeyapps.barcodescanner.Decoder;
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class DecoderResultPointCallback {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.DecoderResultPointCallback>;
        public setDecoder(param0: com.journeyapps.barcodescanner.Decoder): void;
        public constructor(param0: com.journeyapps.barcodescanner.Decoder);
        public getDecoder(): com.journeyapps.barcodescanner.Decoder;
        public foundPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
        public constructor();
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class DecoderThread {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.DecoderThread>;
        public setDecoder(param0: com.journeyapps.barcodescanner.Decoder): void;
        public constructor(param0: com.journeyapps.barcodescanner.camera.CameraInstance, param1: com.journeyapps.barcodescanner.Decoder, param2: globalAndroid.os.Handler);
        public stop(): void;
        public getCropRect(): globalAndroid.graphics.Rect;
        public setCropRect(param0: globalAndroid.graphics.Rect): void;
        public start(): void;
        public createSource(param0: com.journeyapps.barcodescanner.SourceData): com.google.zxing.LuminanceSource;
        public getDecoder(): com.journeyapps.barcodescanner.Decoder;
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class DecoratedBarcodeView {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.DecoratedBarcodeView>;
        public getDecoderFactory(): com.journeyapps.barcodescanner.DecoderFactory;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public setStatusText(param0: string): void;
        public resume(): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
        public initializeFromIntent(param0: globalAndroid.content.Intent): void;
        public pause(): void;
        public setTorchOff(): void;
        public setTorchListener(param0: com.journeyapps.barcodescanner.DecoratedBarcodeView.TorchListener): void;
        public pauseAndWait(): void;
        public getBarcodeView(): com.journeyapps.barcodescanner.BarcodeView;
        public decodeSingle(param0: com.journeyapps.barcodescanner.BarcodeCallback): void;
        public setTorchOn(): void;
        public setCameraSettings(param0: com.journeyapps.barcodescanner.camera.CameraSettings): void;
        public decodeContinuous(param0: com.journeyapps.barcodescanner.BarcodeCallback): void;
        public changeCameraParameters(param0: com.journeyapps.barcodescanner.camera.CameraParametersCallback): void;
        public getViewFinder(): com.journeyapps.barcodescanner.ViewfinderView;
        public getStatusView(): globalAndroid.widget.TextView;
        public constructor(param0: globalAndroid.content.Context);
        public getCameraSettings(): com.journeyapps.barcodescanner.camera.CameraSettings;
        public setDecoderFactory(param0: com.journeyapps.barcodescanner.DecoderFactory): void;
      }
      export namespace DecoratedBarcodeView {
        export class TorchListener {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.DecoratedBarcodeView.TorchListener>;
          /**
					 * Constructs a new instance of the com.journeyapps.barcodescanner.DecoratedBarcodeView$TorchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
          public constructor(implementation: {
            onTorchOn(): void;
            onTorchOff(): void;
          });
          public constructor();
          public onTorchOff(): void;
          public onTorchOn(): void;
        }
        export class WrappedCallback extends com.journeyapps.barcodescanner.BarcodeCallback {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.DecoratedBarcodeView.WrappedCallback>;
          public possibleResultPoints(param0: java.util.List<com.google.zxing.ResultPoint>): void;
          public barcodeResult(param0: com.journeyapps.barcodescanner.BarcodeResult): void;
          public constructor(param0: com.journeyapps.barcodescanner.DecoratedBarcodeView, param1: com.journeyapps.barcodescanner.BarcodeCallback);
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class DefaultDecoderFactory extends com.journeyapps.barcodescanner.DecoderFactory {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.DefaultDecoderFactory>;
        public constructor(param0: java.util.Collection<com.google.zxing.BarcodeFormat>);
        public createDecoder(param0: java.util.Map<com.google.zxing.DecodeHintType, any>): com.journeyapps.barcodescanner.Decoder;
        public constructor(param0: java.util.Collection<com.google.zxing.BarcodeFormat>, param1: java.util.Map<com.google.zxing.DecodeHintType, any>, param2: string, param3: number);
        public constructor();
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class InvertedDecoder extends com.journeyapps.barcodescanner.Decoder {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.InvertedDecoder>;
        public toBitmap(param0: com.google.zxing.LuminanceSource): com.google.zxing.BinaryBitmap;
        public constructor(param0: com.google.zxing.Reader);
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class MixedDecoder extends com.journeyapps.barcodescanner.Decoder {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.MixedDecoder>;
        public toBitmap(param0: com.google.zxing.LuminanceSource): com.google.zxing.BinaryBitmap;
        public constructor(param0: com.google.zxing.Reader);
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class RawImageData {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.RawImageData>;
        public getData(): native.Array<number>;
        public getWidth(): number;
        public getHeight(): number;
        public static rotate180(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
        public constructor(param0: native.Array<number>, param1: number, param2: number);
        public rotateCameraPreview(param0: number): com.journeyapps.barcodescanner.RawImageData;
        public static rotateCW(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
        public cropAndScale(param0: globalAndroid.graphics.Rect, param1: number): com.journeyapps.barcodescanner.RawImageData;
        public static rotateCCW(param0: native.Array<number>, param1: number, param2: number): native.Array<number>;
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class RotationCallback {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.RotationCallback>;
        /**
				 * Constructs a new instance of the com.journeyapps.barcodescanner.RotationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
        public constructor(implementation: {
          onRotationChanged(param0: number): void;
        });
        public constructor();
        public onRotationChanged(param0: number): void;
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class RotationListener {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.RotationListener>;
        public stop(): void;
        public listen(param0: globalAndroid.content.Context, param1: com.journeyapps.barcodescanner.RotationCallback): void;
        public constructor();
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class Size extends java.lang.Comparable<com.journeyapps.barcodescanner.Size> {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.Size>;
        public width: number;
        public height: number;
        public constructor(param0: number, param1: number);
        public scale(param0: number, param1: number): com.journeyapps.barcodescanner.Size;
        public hashCode(): number;
        public rotate(): com.journeyapps.barcodescanner.Size;
        public equals(param0: any): boolean;
        public scaleCrop(param0: com.journeyapps.barcodescanner.Size): com.journeyapps.barcodescanner.Size;
        public fitsIn(param0: com.journeyapps.barcodescanner.Size): boolean;
        public toString(): string;
        public scaleFit(param0: com.journeyapps.barcodescanner.Size): com.journeyapps.barcodescanner.Size;
        public compareTo(param0: com.journeyapps.barcodescanner.Size): number;
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class SourceData {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.SourceData>;
        public getDataWidth(): number;
        public isRotated(): boolean;
        public setCropRect(param0: globalAndroid.graphics.Rect): void;
        public getImageFormat(): number;
        public getScalingFactor(): number;
        public getBitmap(): globalAndroid.graphics.Bitmap;
        public setScalingFactor(param0: number): void;
        public getBitmap(param0: number): globalAndroid.graphics.Bitmap;
        public getData(): native.Array<number>;
        public getDataHeight(): number;
        public getCropRect(): globalAndroid.graphics.Rect;
        public createSource(): com.google.zxing.PlanarYUVLuminanceSource;
        public translateResultPoint(param0: com.google.zxing.ResultPoint): com.google.zxing.ResultPoint;
        public isPreviewMirrored(): boolean;
        public constructor(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number);
        public setPreviewMirrored(param0: boolean): void;
        public getBitmap(param0: globalAndroid.graphics.Rect, param1: number): globalAndroid.graphics.Bitmap;
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class Util {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.Util>;
        public static validateMainThread(): void;
        public constructor();
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export class ViewfinderView {
        public static class: java.lang.Class<com.journeyapps.barcodescanner.ViewfinderView>;
        public static TAG: string;
        public static SCANNER_ALPHA: native.Array<number>;
        public static ANIMATION_DELAY: number;
        public static CURRENT_POINT_OPACITY: number;
        public static MAX_RESULT_POINTS: number;
        public static POINT_SIZE: number;
        public paint: globalAndroid.graphics.Paint;
        public resultBitmap: globalAndroid.graphics.Bitmap;
        public maskColor: number;
        public resultColor: number;
        public laserColor: number;
        public resultPointColor: number;
        public laserVisibility: boolean;
        public scannerAlpha: number;
        public possibleResultPoints: java.util.List<com.google.zxing.ResultPoint>;
        public lastPossibleResultPoints: java.util.List<com.google.zxing.ResultPoint>;
        public cameraPreview: com.journeyapps.barcodescanner.CameraPreview;
        public framingRect: globalAndroid.graphics.Rect;
        public previewSize: com.journeyapps.barcodescanner.Size;
        public onDraw(param0: globalAndroid.graphics.Canvas): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public addPossibleResultPoint(param0: com.google.zxing.ResultPoint): void;
        public setMaskColor(param0: number): void;
        public drawViewfinder(): void;
        public drawResultBitmap(param0: globalAndroid.graphics.Bitmap): void;
        public setLaserVisibility(param0: boolean): void;
        public setCameraPreview(param0: com.journeyapps.barcodescanner.CameraPreview): void;
        public refreshSizes(): void;
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export class AutoFocusManager {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.AutoFocusManager>;
          public stop(): void;
          public start(): void;
          public constructor(param0: globalAndroid.hardware.Camera, param1: com.journeyapps.barcodescanner.camera.CameraSettings);
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export class CameraInstance {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraInstance>;
          public configureCamera(): void;
          public getCameraRotation(): number;
          public getDisplayConfiguration(): com.journeyapps.barcodescanner.camera.DisplayConfiguration;
          public setSurface(param0: com.journeyapps.barcodescanner.camera.CameraSurface): void;
          public constructor(param0: com.journeyapps.barcodescanner.camera.CameraManager);
          public setReadyHandler(param0: globalAndroid.os.Handler): void;
          public getCameraThread(): com.journeyapps.barcodescanner.camera.CameraThread;
          public setDisplayConfiguration(param0: com.journeyapps.barcodescanner.camera.DisplayConfiguration): void;
          public setSurfaceHolder(param0: globalAndroid.view.SurfaceHolder): void;
          public setCameraSettings(param0: com.journeyapps.barcodescanner.camera.CameraSettings): void;
          public startPreview(): void;
          public changeCameraParameters(param0: com.journeyapps.barcodescanner.camera.CameraParametersCallback): void;
          public constructor(param0: globalAndroid.content.Context);
          public getCameraSettings(): com.journeyapps.barcodescanner.camera.CameraSettings;
          public getSurface(): com.journeyapps.barcodescanner.camera.CameraSurface;
          public isOpen(): boolean;
          public getCameraManager(): com.journeyapps.barcodescanner.camera.CameraManager;
          public close(): void;
          public isCameraClosed(): boolean;
          public open(): void;
          public setTorch(param0: boolean): void;
          public requestPreview(param0: com.journeyapps.barcodescanner.camera.PreviewCallback): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export class CameraManager {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraManager>;
          public getCameraRotation(): number;
          public getDisplayConfiguration(): com.journeyapps.barcodescanner.camera.DisplayConfiguration;
          public configure(): void;
          public getPreviewSize(): com.journeyapps.barcodescanner.Size;
          public setCameraSettings(param0: com.journeyapps.barcodescanner.camera.CameraSettings): void;
          public setDisplayConfiguration(param0: com.journeyapps.barcodescanner.camera.DisplayConfiguration): void;
          public startPreview(): void;
          public changeCameraParameters(param0: com.journeyapps.barcodescanner.camera.CameraParametersCallback): void;
          public constructor(param0: globalAndroid.content.Context);
          public getCameraSettings(): com.journeyapps.barcodescanner.camera.CameraSettings;
          public isOpen(): boolean;
          public getNaturalPreviewSize(): com.journeyapps.barcodescanner.Size;
          public close(): void;
          public isCameraRotated(): boolean;
          public requestPreviewFrame(param0: com.journeyapps.barcodescanner.camera.PreviewCallback): void;
          public getCamera(): globalAndroid.hardware.Camera;
          public open(): void;
          public setPreviewDisplay(param0: globalAndroid.view.SurfaceHolder): void;
          public setTorch(param0: boolean): void;
          public isTorchOn(): boolean;
          public setPreviewDisplay(param0: com.journeyapps.barcodescanner.camera.CameraSurface): void;
          public stopPreview(): void;
        }
        export namespace CameraManager {
          export class CameraPreviewCallback {
            public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraManager.CameraPreviewCallback>;
            public constructor(param0: com.journeyapps.barcodescanner.camera.CameraManager);
            public onPreviewFrame(param0: native.Array<number>, param1: globalAndroid.hardware.Camera): void;
            public setResolution(param0: com.journeyapps.barcodescanner.Size): void;
            public setCallback(param0: com.journeyapps.barcodescanner.camera.PreviewCallback): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export class CameraParametersCallback {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraParametersCallback>;
          /**
					 * Constructs a new instance of the com.journeyapps.barcodescanner.camera.CameraParametersCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
          public constructor(implementation: {
            changeCameraParameters(param0: globalAndroid.hardware.Camera.Parameters): globalAndroid.hardware.Camera.Parameters;
          });
          public constructor();
          public changeCameraParameters(param0: globalAndroid.hardware.Camera.Parameters): globalAndroid.hardware.Camera.Parameters;
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export class CameraSettings {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraSettings>;
          public isScanInverted(): boolean;
          public isContinuousFocusEnabled(): boolean;
          public setScanInverted(param0: boolean): void;
          public isBarcodeSceneModeEnabled(): boolean;
          public getFocusMode(): com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode;
          public setExposureEnabled(param0: boolean): void;
          public setContinuousFocusEnabled(param0: boolean): void;
          public setFocusMode(param0: com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode): void;
          public isExposureEnabled(): boolean;
          public setAutoTorchEnabled(param0: boolean): void;
          public getRequestedCameraId(): number;
          public setMeteringEnabled(param0: boolean): void;
          public isAutoTorchEnabled(): boolean;
          public setRequestedCameraId(param0: number): void;
          public setAutoFocusEnabled(param0: boolean): void;
          public setBarcodeSceneModeEnabled(param0: boolean): void;
          public constructor();
          public isMeteringEnabled(): boolean;
          public isAutoFocusEnabled(): boolean;
        }
        export namespace CameraSettings {
          export class FocusMode {
            public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode>;
            public static AUTO: com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode;
            public static CONTINUOUS: com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode;
            public static INFINITY: com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode;
            public static MACRO: com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode;
            public static valueOf(param0: string): com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode;
            public static values(): native.Array<com.journeyapps.barcodescanner.camera.CameraSettings.FocusMode>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export class CameraSurface {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraSurface>;
          public constructor(param0: globalAndroid.view.SurfaceHolder);
          public constructor(param0: globalAndroid.graphics.SurfaceTexture);
          public getSurfaceHolder(): globalAndroid.view.SurfaceHolder;
          public setPreview(param0: globalAndroid.hardware.Camera): void;
          public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export class CameraThread {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CameraThread>;
          public decrementInstances(): void;
          public static getInstance(): com.journeyapps.barcodescanner.camera.CameraThread;
          public enqueue(param0: java.lang.Runnable): void;
          public incrementAndEnqueue(param0: java.lang.Runnable): void;
          public enqueueDelayed(param0: java.lang.Runnable, param1: number): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export class CenterCropStrategy extends com.journeyapps.barcodescanner.camera.PreviewScalingStrategy {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.CenterCropStrategy>;
          public getScore(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): number;
          public constructor();
          public scalePreview(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Rect;
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export class DisplayConfiguration {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.DisplayConfiguration>;
          public getPreviewScalingStrategy(): com.journeyapps.barcodescanner.camera.PreviewScalingStrategy;
          public getRotation(): number;
          public scalePreview(param0: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Rect;
          public setPreviewScalingStrategy(param0: com.journeyapps.barcodescanner.camera.PreviewScalingStrategy): void;
          public getDesiredPreviewSize(param0: boolean): com.journeyapps.barcodescanner.Size;
          public getBestPreviewSize(param0: java.util.List<com.journeyapps.barcodescanner.Size>, param1: boolean): com.journeyapps.barcodescanner.Size;
          public getViewfinderSize(): com.journeyapps.barcodescanner.Size;
          public constructor(param0: number, param1: com.journeyapps.barcodescanner.Size);
          public constructor(param0: number);
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export class FitCenterStrategy extends com.journeyapps.barcodescanner.camera.PreviewScalingStrategy {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.FitCenterStrategy>;
          public getScore(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): number;
          public constructor();
          public scalePreview(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Rect;
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export class FitXYStrategy extends com.journeyapps.barcodescanner.camera.PreviewScalingStrategy {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.FitXYStrategy>;
          public getScore(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): number;
          public constructor();
          public scalePreview(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Rect;
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export class LegacyPreviewScalingStrategy extends com.journeyapps.barcodescanner.camera.PreviewScalingStrategy {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.LegacyPreviewScalingStrategy>;
          public static scale(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): com.journeyapps.barcodescanner.Size;
          public constructor();
          public getBestPreviewSize(param0: java.util.List<com.journeyapps.barcodescanner.Size>, param1: com.journeyapps.barcodescanner.Size): com.journeyapps.barcodescanner.Size;
          public scalePreview(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Rect;
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export class PreviewCallback {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.PreviewCallback>;
          /**
					 * Constructs a new instance of the com.journeyapps.barcodescanner.camera.PreviewCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
          public constructor(implementation: {
            onPreview(param0: com.journeyapps.barcodescanner.SourceData): void;
            onPreviewError(param0: java.lang.Exception): void;
          });
          public constructor();
          public onPreview(param0: com.journeyapps.barcodescanner.SourceData): void;
          public onPreviewError(param0: java.lang.Exception): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace journeyapps {
    export namespace barcodescanner {
      export namespace camera {
        export abstract class PreviewScalingStrategy {
          public static class: java.lang.Class<com.journeyapps.barcodescanner.camera.PreviewScalingStrategy>;
          public getBestPreviewOrder(param0: java.util.List<com.journeyapps.barcodescanner.Size>, param1: com.journeyapps.barcodescanner.Size): java.util.List<com.journeyapps.barcodescanner.Size>;
          public getScore(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): number;
          public constructor();
          public getBestPreviewSize(param0: java.util.List<com.journeyapps.barcodescanner.Size>, param1: com.journeyapps.barcodescanner.Size): com.journeyapps.barcodescanner.Size;
          public scalePreview(param0: com.journeyapps.barcodescanner.Size, param1: com.journeyapps.barcodescanner.Size): globalAndroid.graphics.Rect;
        }
      }
    }
  }
}

// Generics information:
