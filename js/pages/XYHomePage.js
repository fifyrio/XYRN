/**
 * Created by wuw on 2017/6/28.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';

import XYNavigationBar from '../common/XYNavigationBar'
import XYMobileTest from './XYMobileTest'

//  导入NativeModules
import XYExaminationBridge from '../tool/XYExaminationBridge'

export default class XYHomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      result:''
    };
  }

  render() {
    return (
        <View style={styles.container}>
          <XYNavigationBar
              title="Home"
              style={{
                backgroundColor:'#00BCD4',
              }}
          />
          <Button title={'一键检测'} onPress={()=>{
            console.log(this.props.navigator);
            this.props.navigator.push({
              component:XYMobileTest
            })
          }}/>

          <Text style={styles.instructions}>
            {this.state.result}
          </Text>
          <Text onPress={()=>{
            XYExaminationBridge.transferText('hello will')
                .then(result=>{
                  this.setState({
                    result:result
                  })
                });
          }}
          >传递</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});