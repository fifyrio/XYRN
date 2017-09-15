/**
 * Created by wuw on 2017/6/28.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  SectionList,
  Text,
  FlatList,
  ListView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import XYHttpService from '../core/XYHttpService'

'use strict';

export default class XYHttpTest extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result : '',
    };
  }

  requestByGet(){
    let url = 'https://userapi.hiweixiu.com/shr/get-hot-device',
    params = new Map();
    params.set('version', '2.5.1');
    XYHttpService.request('GET',url,params,false)
        .then(result=>{
          this.setState({
            result: result,
          })
        })
        .catch(error=>{
          console.log(error);
        });
  }

  test(){
    // const map = new Map();
    // let object = {};
    //
    // map.set('name', 'will');
    // map.set('sex', 'male');
    //
    // let count = map.size;
    //
    // map.forEach((value, key) => {
    //   object[key] = value;
    // });
    // let jsonStr = JSON.stringify(object);

    // const s = new Set();
    // [1,2,3,4,5,1].map(x=> s.add(x));
    // [2,3,5,4,5,2,2].map(x => s.add(x));
    // for (i of s){
    //   console.log(i);
    // }

    console.log();
  };

  render(){
    return(
        <View style={styles.container}>
          <Text onPress={this.requestByGet()} style={styles.button}>GET请求</Text>
          <Text style={styles.result}>{this.state.result}</Text>
        </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    marginTop: 20,
  },

  button: {
    color: 'green',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

  result: {
    marginTop: 20,
    color: '#333333',
    fontSize: 16,
    lineHeight: 16,
  },

});