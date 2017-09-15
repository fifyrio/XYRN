//
//  XYExaminationBridge.m
//  XYMobileTest
//
//  Created by wuw on 2017/7/5.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "XYExaminationBridge.h"
#import "XYExaminationTool.h"

@implementation XYExaminationBridge

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue{
  return dispatch_get_main_queue();
}

//  对外提供调用方法（testNormalEvent为方法名，后面为参数，按顺序和对应数据类型在js进行传递）
RCT_EXPORT_METHOD(transferText:(NSString *)text resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
  resolve([text stringByAppendingString:@"__success"]);
  [XYExaminationTool checkVibrationSensor];
  NSLog(@"");
}

@end
