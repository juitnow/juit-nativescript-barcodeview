declare class BarcodeMetadataObjectsDelegate extends NSObject {

	static alloc(): BarcodeMetadataObjectsDelegate; // inherited from NSObject

	static new(): BarcodeMetadataObjectsDelegate; // inherited from NSObject

	constructor(o: { callback: (p1: string, p2: string) => void; });

	initWithCallback(callback: (p1: string, p2: string) => void): this;

	setup(output: AVCaptureMetadataOutput): void;
}
