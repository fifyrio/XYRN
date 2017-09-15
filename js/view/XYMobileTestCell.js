/**
 * Created by wuw on 2017/7/5.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class XYMobileTestCell extends Component {
  render() {
    return (
        <View style={styles.row}>
          <View style={styles.leftWrap}>
            <Image style={styles.leftWrapIcon} source={require('../../res/images/MobileTestList/lbzt.png')} />
            <Text style={styles.leftWrapText}>{this.props.item.name}</Text>
          </View>
          <View style={styles.rightWrap}>
            <Text style={[styles.rightWrapText, this.props.item.isWorked?styles.rightWrapTextNormal:styles.rightWrapTextWrong]}>{this.props.item.isWorked?'正常':'异常'}</Text>
          </View>
        </View>
    );
  }
}



const styles = StyleSheet.create({
  row:{
    height:45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftWrap:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  leftWrapIcon:{
    height:16,
    width:16,
    marginLeft:11,
  },
  leftWrapText:{
    fontSize:16,
    color:'#000',
    marginLeft:22,
  },
  leftWrapTextDefault:{
    color:'#bababa'
  },
  leftWrapTextTesting:{
    color:'#000'
  },
  leftWrapTextTested:{
    color:'#000'
  },
  rightWrap:{
    alignItems: 'center',
  },
  rightWrapText:{
    fontSize:16,
    marginRight:11,
  },
  rightWrapTextDefault:{
    color:'#bababa',
  },
  rightWrapTextNormal:{
    color:'#3dc169',
  },
  rightWrapTextWrong:{
    color:'#fe8f4a',
  }
});
