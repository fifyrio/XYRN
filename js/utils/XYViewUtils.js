/**
 * Created by wuw on 2017/7/5.
 */

'use strict'

import React  from 'react';
import {
  TouchableHighlight,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

export default class XYViewUtils {

  /**
   * 获取设置页的Item
   * @param navigator 导航对象
   * @return {XML}
   */
  static getNavBackButton(navigator){
    return <TouchableOpacity
        style={{padding: 8}}
        onPress={()=>{
          navigator.pop();
        }}>
      <Image
          style={{width: 26, height: 26,}}
          source={require('../../res/images/ic_arrow_back_white_36pt.png')}/>
    </TouchableOpacity>
  }

  static getLeftButton(callBack) {
    return <TouchableOpacity
        style={{padding: 8}}
        onPress={callBack}>
      <Image
          style={{width: 26, height: 26,}}
          source={require('../../res/images/ic_arrow_back_white_36pt.png')}/>
    </TouchableOpacity>
  }

  static getScreen(){
    return Dimensions.get('window')
  }

  static getScreenW(){
    return Dimensions.get('window').width
  }

  static getScreenH(){
    return Dimensions.get('window').height
  }
}
