//
//  RCTNativeHelperModule.m
//  KelasPintar
//
//  Created by Gilang Setyo Budi on 29/02/24.
//

#import "RCTNativeHelperModule.h"

@implementation RCTNativeHelperModule{
  
}

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"forceQuitApp"];
}

- (void)dealloc {
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (instancetype)init {
  self = [super init];
  if (self) {
  }
  return self;
}

RCT_EXPORT_METHOD(forceQuitApp) {
  exit(0);
}



+ (BOOL)requiresMainQueueSetup{
  return NO;
}

@end
