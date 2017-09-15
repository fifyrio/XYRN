/**
 * Created by wuw on 2017/6/28.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

import XYNavigationBar from '../common/XYNavigationBar'
import XYViewUtils from '../utils/XYViewUtils'
import XYMobileTestCell from '../view/XYMobileTestCell'

const testState ={
  default:0,
  testing:1,
  tested:2,
};

var data = {
  tests:[
    {
      'name':'震动传感器',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'麦克风',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'扬声器',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'GPS传感器',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'数字指南针',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'WIFI模块',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'加速感应器',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'陀螺仪',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'闪光灯',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'前置摄像头',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'听筒',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'后置摄像头',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'通话',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'充电',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'距离感应器',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'触摸灵敏度',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'屏幕显示',
      'testState':testState.default,
      'isWorked':false,
    },
    {
      'name':'指纹功能识别',
      'testState':testState.default,
      'isWorked':false,
    },
  ],
};

export default class XYMobileTest extends Component {

  constructor(props){
    const ds = new ListView.DataSource({rowHasChanged:(r1, r2)=>r1!==r2});

    super(props);
    this.state={
      dataSource:ds.cloneWithRows(data.tests),
    };
  }

  renderRow(item){
    return (
        <XYMobileTestCell item={item} />
    )
  }

  render() {
    return (
        <View style={styles.container}>
          <XYNavigationBar
              title="设备检测"
              style={{
                backgroundColor:'#5ca9fc',
              }}
              leftButton={XYViewUtils.getNavBackButton(this.props.navigator)}
          />
          <ListView
              dataSource = {this.state.dataSource}
              renderRow={(item)=>this.renderRow(item)}
          />

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tips:{
    fontSize:18,
  },

});