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
  ScrollView,
  TouchableOpacity,
} from 'react-native';

'use strict';

import Toast,{DURATION} from 'react-native-easy-toast'

class XYScrollView extends Component{
  render(){
    return(
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.container}>
            <View>
              <Text style={{color: 'black', padding: 10, height: 40}}>xx</Text>
            </View>
            <View>
              <Text style={{color: 'black', padding: 10, height: 40}}>xx</Text>
            </View>
          </ScrollView>

        </View>
    )
  }
}

let person = 1;

let node = (
    <div className="container">
      {
        person ? <span>Welcome back, <b>Will</b>!</span>
            : <span>Please log in</span>
      }
    </div>
);



class XYText1 extends Component{
  render() {
    return(
        <Text>hello {person}</Text>
    )

  }
}

class XYText2 extends Component{
  render() {
    return(
        <Text>fuck {person}</Text>
    )

  }
}

export default class XYSectionList extends Component {

  render(){
    return (
        <View style={styles.container}>
          <TouchableOpacity
              onPress={()=>{
                // let fn = x => x * x;

                // let fn = x => {
                //   if (x > 0){
                //     return x * x;
                //   }else {
                //     return -x * x;
                //   }
                // };

                // let fn = (x ,y) => x + y;

                // let fn = () => 3.1415;

                // let fn = (x, y, ...others) => {
                //   console.log(others);
                // };
                //
                // fn('Lucy', 'Owen', 'Will', 'Cater', 'Javion');


                // let obj = {
                //   birth: 1988,
                //   getAge: function () {
                //     let b = this.birth;
                //     return 2017 - b;
                //   }
                // };
                //
                // console.log(obj.getAge());

                // let array = [1, 2, 3, 4];
                // let fn = (x, y, ...array) => {
                //   let i, sum = x + y;
                //   // console.log(...array);
                //   //
                //   // let arr1 = [1,2,3,4];
                //   // for(let i = 0; i < arr1.length; i++) {
                //   //   console.log(arr1[i]);
                //   // }
                //
                //   console.log(array);
                //
                //   // for (i = 0; i < array.length; i++){
                //   //   sum += array[i];
                //   // }
                //
                //   return sum;
                // };
                // console.log(fn(0,0,array));

                // let fn = (r1, r2) => r1 !== r2;
                // console.log(fn(1, 2));

                // let  Arr = {},
                //     sectionIDs =[],//所有区ID的数组
                //     rowIDs =[];//行ID数组
                // //通过两次for循环创建假数据
                // for (let i = 0; i< 10; i++){
                //   sectionIDs.push(i);
                //   Arr[i] = 'section' + i;
                //   rowIDs[i] = [];
                //   for (let j= 0; j<5; j++){
                //     rowIDs[i].push(j);
                //     Arr[i +':' +j] = 'section' + i + '--row' + j;
                //   }
                // }

                let fn = (full_name) => 'hello' + full_name;
                console.log(fn('Will'));

                this.toast.show('fuck', DURATION.LENGTH_LONG);
              }}
          >
            <Text style={{fontSize:16, marginTop:100,}}>touch me</Text>
          </TouchableOpacity>
          <Toast ref={toast=>{this.toast=toast}}/>
        </View>
    )
  }
}

// var child1 = React.createElement('li', null, 'First Text Content');



class XYFlatList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
          <FlatList
              data={[{name: 'a'}, {name: 'b'}, {name: 'c'}, {name: 'd'}]}
              renderItem={({item}) => <Text>{item.name}</Text>}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    marginTop: 20,
  },

  item_wrap: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'blue',
  },

  item_wrap_text: {
    color: '#000000',
    fontSize: 14,
  },

  header_wrap: {
    flex: 1,
    height: 20,
  },

  header_wrap_text: {
    color: '#f3f3f3',
    fontSize: 12,
  },

});