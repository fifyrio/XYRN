//
//  XYExaminationTool.m
//  XYMobileTest
//
//  Created by wuw on 2017/7/5.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "XYExaminationTool.h"
#import <AVFoundation/AVFoundation.h>
#import <CoreMotion/CoreMotion.h>
#import <CoreLocation/CoreLocation.h>
#import <AudioToolbox/AudioToolbox.h>
#import <UIKit/UIKit.h>

@implementation XYExaminationTool

+ (void)checkVibrationSensor{
  if ([[[UIDevice currentDevice] systemVersion] floatValue] >= 9.0) {
    AudioServicesPlayAlertSoundWithCompletion(kSystemSoundID_Vibrate, ^{
      //            NSLog(@"振动传感器可用");
    });
  }else{
    SystemSoundID system_sound_id = kSystemSoundID_Vibrate;
    AudioServicesCreateSystemSoundID(NULL,&system_sound_id);
    AudioServicesAddSystemSoundCompletion(
                                          system_sound_id,
                                          NULL, // uses the main run loop
                                          NULL, // uses kCFRunLoopDefaultMode
                                          completionCallback, // the name of our custom callback function
                                          NULL
                                          );
    AudioServicesPlaySystemSound(system_sound_id);
  }
}
static void completionCallback (SystemSoundID  mySSID, void* data) {
//  NSLog(@"振动传感器可用");
  AudioServicesRemoveSystemSoundCompletion (mySSID);
}

@end
