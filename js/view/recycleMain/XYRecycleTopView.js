/**
 * Created by wuw on 2017/9/1.
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

export default class XYRecycleTopView extends Component {
  constructor(props){
    super(props);
    this.state={
    };
  }

  render() {
    return(
        <View style={[styles.header_wrap]}>
          <View style={[styles.header_top_wrap, ]}>
            <Image resizeMode={'cover'} style={[styles.header_top_wrap_bg]} source={require('../../../res/images/Recycle/huishoutop_bg.png')}/>
            <View style={[styles.header_top_content]}>
              <Image style={styles.header_top_content_img} source={require('../../../res/images/Recycle/huishoutop@2x.png')}/>
              <View style={[styles.header_top_content_text]}>
                <Text style={styles.header_top_content_text_desc}>已回收</Text>
                <Text style={styles.header_top_content_text_num}>1024</Text>
                <Text style={styles.header_top_content_text_desc}>台设备</Text>
              </View>
              <TouchableOpacity style={styles.header_top_content_btn}><Text style={[styles.header_top_content_btn_text]}>查看本机估价</Text></TouchableOpacity>
            </View>
          </View>
          <View style={[styles.header_bottom_wrap]}>
            <TouchableOpacity style={[styles.header_bottom_item]}>
              <Image resizeMode={'cover'} style={styles.header_bottom_item_icon} source={require('../../../res/images/Recycle/huishou_shouji.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.header_bottom_item]}>
              <Image resizeMode={'cover'} style={styles.header_bottom_item_icon} source={require('../../../res/images/Recycle/huishou_pingban.png')}/>
            </TouchableOpacity>
          </View>
        </View>
    )
  }
}

const win = XYViewUtils.getScreen();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  flex: {
    flex: 1,
  },
  mark: {
    borderColor: 'blue',
    borderWidth: 1,
  },

  header_wrap: {
    width: win.width,
    flexDirection: 'column',
  },

  header_top_wrap: {
    height: 269,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_top_wrap_bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: win.width,
    height: 269,

  },
  header_top_content: {
    width: 285,
    zIndex: 1000,
  },
  header_top_content_img: {
    width: 285,
    height: 98,
  },
  header_top_content_text: {
    marginTop: -15,
    height: 28,
    marginBottom: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  header_top_content_text_desc: {
    color: 'white',
    fontSize: 12,
    lineHeight: 28,
  },
  header_top_content_text_num: {
    color: '#FFF000',
    fontSize: 20,
    lineHeight: 28,
  },
  header_top_content_btn: {
    height: 45,
    borderRadius: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  header_top_content_btn_text: {
    fontSize: 16,
    color: '#ff5000',
    width: 200,
    lineHeight: 45,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },

  header_bottom_wrap: {
    flexShrink: 0,
    flexDirection: 'row',
  },
  header_bottom_item: {
    height: 51,
  },
  header_bottom_item_icon: {
    width: 187.5,
    height: 51,
  },
});
