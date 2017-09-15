/**
 * Created by wuw on 2017/9/8.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
  ListView,
  SectionList,
} from 'react-native';

import XYViewUtils from '../../utils/XYViewUtils'

export default class XYRecycleSectionHeader extends Component {
  constructor(props){
    super(props);
    this.state={
    };
  }

  render() {
    return(
        <View style={[styles.container]}>
          <View style={[styles.separator]}></View>
          <View style={[styles.content]}>
            <Image resizeMode={'cover'} style={[styles.content_icon]} source={require('../../../res/images/Recycle/huishou_remen.png')}/>
            <Text style={styles.content_text_desc}>热门回收机型</Text>
          </View>
        </View>
    )
  }
}

const win = XYViewUtils.getScreen();

const styles = StyleSheet.create({
  container: {
    width: win.width,

  },

  separator: {
    width: win.width,
    height: 10,
    backgroundColor: '#F5F5F5',
  },

  content: {
    width: win.width,
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },

  content_icon: {
    height:14,
    width:12,
    marginLeft: 15,
    marginRight: 8,
  },

  content_text_desc: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 14,
  },
});