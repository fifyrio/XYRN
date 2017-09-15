//
//  MainViewController.m
//  XYMobileTest
//
//  Created by wuw on 2017/8/25.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MainViewController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface MainViewController ()

@end

@implementation MainViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}
- (IBAction)onclickRun:(id)sender {
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://192.168.1.241:8081/index.ios.bundle?platform=ios&dev=true"];
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"XYMobileTest"
                                                 initialProperties:nil
                                                     launchOptions:nil];
  UIViewController *vc = [[UIViewController alloc] init];
  vc.view = rootView;
  [self presentViewController:vc animated:YES completion:nil];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
