/**
 * Created by wuw on 2017/9/8.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import XYViewUtils from '../../utils/XYViewUtils'

export default class XYRecycleSectionRow extends Component {
  constructor(props){
    super(props);
    this.state={
    };
  }

  render() {
    return(
        <View style={[styles.container]}>
          <View style={[styles.line_h]}></View>
          <View style={[styles.line_v]}></View>
          <Image resizeMode={'cover'} style={[styles.content_image]} source={require('../../../res/images/Recycle/MouldPlaceHolder.png')}/>
          <Text style={[styles.content_mould]}>iPhone6s</Text>
          <Text style={[styles.content_price]}>回收均价 ￥100</Text>
        </View>
    )
  }
}

const win = XYViewUtils.getScreen();

const styles = StyleSheet.create({
  container: {
    width: win.width / 2,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  mark: {
    borderColor: 'blue',
    borderWidth: 1,
  },

  line_h: {
    height: 1,
    width: win.width / 2,
    backgroundColor: '#E8E8E8',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
  },

  line_v: {
    width: 1,
    height: 252,
    backgroundColor: '#E8E8E8',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1000,
  },

  content_image: {
    width: 130,
    height: 130,
    marginTop: 30,
  },

  content_mould: {
    height: 15,
    width: win.width / 2 - 20,
    textAlign: 'center',
    marginTop: 25,
    lineHeight: 15,
    fontSize: 15,
    color: '#333333',
    fontWeight: 'bold',
  },

  content_price: {
    height: 16,
    width: win.width / 2 - 20,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 16,
    fontSize: 13,
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: 26,
  },
});