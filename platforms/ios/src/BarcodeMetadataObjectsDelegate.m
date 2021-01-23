#import "BarcodeMetadataObjectsDelegate.h"

@interface BarcodeMetadataObjectsDelegate () <AVCaptureMetadataOutputObjectsDelegate>
@property (copy, nonatomic) void (^callback) (NSString *, NSString *);
@end

@implementation BarcodeMetadataObjectsDelegate

- (id)init
{
    self = [super init];
    return self;
}

- (id)initWithCallback
    :(void (^) (NSString *resultAsString, NSString *typeAsString))callback
{
    self = [super init];
    self.callback = callback;
    return self;
}

- (void)setup
    :(nonnull AVCaptureMetadataOutput *)output
{
    [output setMetadataObjectsDelegate:self queue:dispatch_get_main_queue()];
}

- (void)captureOutput
    :(AVCaptureOutput *)captureOutput didOutputMetadataObjects
    :(NSArray *)metadataObjects fromConnection
    :(AVCaptureConnection *)connection
{
    for (AVMetadataObject *current in metadataObjects) {
        if ([current isKindOfClass:[AVMetadataMachineReadableCodeObject class]]) {
            NSString *text = [(AVMetadataMachineReadableCodeObject *) current stringValue];
            NSString *type = [(AVMetadataMachineReadableCodeObject *) current type];

            if (_callback) _callback(type, text);
        }
    }
}

@end
