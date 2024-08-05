//
//  RCTScreenLockModule.m
//  KelasPintar
//
//  Created by Gilang Setyo Budi on 21/11/23.
//

// ScreenLockModule.m

#import "RCTScreenLockModule.h"

@implementation RCTScreenLockModule{
  
}

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"ScreenUnlock", @"ScreenLock", @"ScreenLockState"];
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

- (void)screenDidUnlock {
  NSMutableDictionary *dict = [NSMutableDictionary dictionary];
  dict[@"type"] = @"unlock";
  [self sendEventWithName:@"ScreenLockState" body:dict];
}

- (void)screenDidLock {
  NSMutableDictionary *dict = [NSMutableDictionary dictionary];
  dict[@"type"] = @"lock";
  [self sendEventWithName:@"ScreenLockState" body:dict];
}

RCT_EXPORT_METHOD(subscribeScreenLock: (RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(screenDidUnlock) name:UIApplicationDidBecomeActiveNotification object:nil];
  
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(screenDidLock) name:UIApplicationWillResignActiveNotification object:nil];
  resolve(@"ScreenLockStatus : Success Subscribe Screen");
}

RCT_EXPORT_METHOD(unSubscribeScreenLock: (RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
  [[NSNotificationCenter defaultCenter] removeObserver:self name:UIApplicationDidBecomeActiveNotification object:nil];
  [[NSNotificationCenter defaultCenter] removeObserver:self name:UIApplicationWillResignActiveNotification object:nil];
  resolve(@"ScreenLockStatus : Success UnSubscribe Screen");
}




+ (BOOL)requiresMainQueueSetup{
  return NO;
}

@end

