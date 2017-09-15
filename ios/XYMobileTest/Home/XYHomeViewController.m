//
//  XYHomeViewController.m
//  XYMobileTest
//
//  Created by wuw on 2017/8/25.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "XYHomeViewController.h"
#import "HomeDetailViewController.h"

@interface XYHomeViewController ()

@end

@implementation XYHomeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}
- (IBAction)onclickRun:(id)sender {
    self.hidesBottomBarWhenPushed=YES;
    HomeDetailViewController *vc = [[HomeDetailViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
    self.hidesBottomBarWhenPushed=NO;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
