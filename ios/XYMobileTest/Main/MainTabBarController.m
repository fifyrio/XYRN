//
//  MainTabBarController.m
//  XYMobileTest
//
//  Created by wuw on 2017/8/25.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MainTabBarController.h"
#import "XYHomeViewController.h"
#import "XYRecycleViewController.h"
#import "XYMineViewController.h"
#import "XYDiscoverViewController.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface MainTabBarController ()<UITabBarControllerDelegate>

@end

@implementation MainTabBarController

- (instancetype)init
{
  if (self = [super init]) {
    
    [self setUp];
    
  }
  return self;
}

- (void)loadRNViewInViewController:(UIViewController *)viewController{
  NSURL *jsCodeLocation = [NSURL URLWithString:@"http://192.168.1.241:8081/index.ios.bundle?platform=ios&dev=true"];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"XYMobileTest"
                                               initialProperties:nil
                                                   launchOptions:nil];
  viewController.view = rootView;
}

- (void)setUp
{
  XYHomeViewController *reservationVC = [[XYHomeViewController alloc] init];
  [self tabBarControllerAddVc:reservationVC title:@"Hi维修" image:[UIImage imageNamed:@"tab_weixiu"] selectImage:[UIImage imageNamed:@"tab_weixiucur"] needNav:YES];
  
  XYRecycleViewController *recycleVC = [[XYRecycleViewController alloc] init];
  [self loadRNViewInViewController:recycleVC];
  
  [self tabBarControllerAddVc:recycleVC title:@"Hi回收" image:[UIImage imageNamed:@"tab_huishou"] selectImage:[UIImage imageNamed:@"tab_huishoucur"] needNav:NO];
  
  XYDiscoverViewController *mobileInfoVC = [[XYDiscoverViewController alloc] init];
  
  [self tabBarControllerAddVc:mobileInfoVC title:@"发现" image:[UIImage imageNamed:@"tab_faixian"] selectImage:[UIImage imageNamed:@"tab_faixiancur"] needNav:YES];
  
  XYMineViewController *personVC = [[XYMineViewController alloc] init];
  
  [self tabBarControllerAddVc:personVC title:@"个人中心" image:[UIImage imageNamed:@"tab_geren"] selectImage:[UIImage imageNamed:@"tab_gerencur"] needNav:YES];
  
  self.delegate = self;
  
  
  [[UITabBar appearance] setTintColor:[UIColor colorWithRed:255/255.0 green:80/255.0 blue:0 alpha:1]];
  
  [self.tabBar setClipsToBounds:YES];
  
}

- (void)tabBarControllerAddVc:(UIViewController *)vc title:(NSString *)title image:(UIImage *)image selectImage:(UIImage *)selectImage needNav:(BOOL)needNav{
  vc.title = title;
  vc.tabBarItem.image = [image imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
  vc.tabBarItem.selectedImage = [selectImage imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
  
  [vc.tabBarItem setTitlePositionAdjustment:UIOffsetMake(0.0f, -2)];
  
  if (needNav) {
    UINavigationController *vcNav = [[UINavigationController alloc]initWithRootViewController:vc];
    [self addChildViewController:vcNav];
  }else{
    [self addChildViewController:vc];
  }
  
}

#pragma mark - UITabBarControllerDelegate
- (void)tabBarController:(UITabBarController *)tabBarController didSelectViewController:(UIViewController *)viewController{
  
}

@end
