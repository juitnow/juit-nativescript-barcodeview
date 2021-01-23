#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>

@interface BarcodeMetadataObjectsDelegate : NSObject

- (nonnull id)init;

- (nonnull id)initWithCallback
    :(nullable void (^) (NSString * _Nullable resultAsString, NSString * _Nullable typeAsString))callback;

- (void)setup
    :(nonnull AVCaptureMetadataOutput *)output;

@end
