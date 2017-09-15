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

'use strict';

import XYNavigationBar from '../common/XYNavigationBar'
import XYViewUtils from '../utils/XYViewUtils'
import XYRecycleSectionHeader from '../view/recycleMain/XYRecycleSectionHeader'
import XYRecycleTopView from '../view/recycleMain/XYRecycleTopView'
import XYRecycleSectionRow from '../view/recycleMain/XYRecycleSectionRow'
import XYHttpService from '../core/XYHttpService'

let food = [
  {name: "Lettuce", category: "Vegetable"},
  {name: "Apple", category: "Fruit"},
  {name: "Orange", category: "Fruit"},
  {name: "Potato", category: "Vegetable"}
];

export default class XYRecycle extends Component{
  constructor(props){
    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.state={
      result:'',
      dataSource:ds.cloneWithRowsAndSections(this.convertFoodArrayToMap()),
    };
  }

  convertFoodArrayToMap(){
    let foodCategoryMap = {}; // Create the blank map
    food.forEach(function(foodItem) {
      if (!foodCategoryMap[foodItem.category]) {
        // Create an entry in the map for the category if it hasn't yet been created
        foodCategoryMap[foodItem.category] = [];
      }

      foodCategoryMap[foodItem.category].push(foodItem);

    });

    return foodCategoryMap;
  }

  //返回section的方法
  _renderSectionHeader(section){
    if (section.key === 0){
      return (<View></View>)
    }else {
      return(
          <XYRecycleSectionHeader/>
      )
    }
  };

  _renderSeparator(){
    return <View style={styles.line}>
    </View>
  };

  //返回cell的方法
  _renderRow(item){
    if (item.section === 0){
      return(
          <XYRecycleTopView/>
      )
    }else {
      return(
          <XYRecycleSectionRow/>
      )
    }
  };

  //加载数据
  loadData(){
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

  componentDidMount(){
    this.loadData();
  };

  render(){
    return(
        <View style={styles.container}>
          <SectionList
              contentContainerStyle={styles.listViewStyle}
              renderItem={
                ({item}) => <View><Text>row</Text></View>
              }
              renderSectionHeader={
                ({section}) => <View><Text>section</Text></View>
              }
              sections={
                [ // 不同section渲染相同类型的子组件
                  {data: [{key: 'Will', row: 0, section: 0}], title: 'title1', key:0},
                  {data: [{key: 'Will', row: 0, section: 1}, {key: 'Javion', row: 1, section: 1}, {key: 'Cater', row: 2, section: 1}], title: 'title2', key:1},
                ]
              }
              // dataSource={this.state.dataSource}
              stickySectionHeadersEnabled={false}
          />
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

  listViewStyle:{
    flexDirection:'row', //设置横向布局
    flexWrap:'wrap'    //设置换行显示
  },

  row: {
    height: 52,
    width: win.width / 2,
    borderColor: 'red',
    borderWidth: 1,
  },

  row_title: {
    fontSize:16,
  },

  row_desc: {
    fontSize:14,
  },

  line: {
    height:1,
    backgroundColor: '#666666'
  },

  section:{
    width: win.width,
    backgroundColor:'gray',
    height:25
  },
  cell:{
    height: win.width / 2,
    width: win.width / 2,
    // flexDirection:'row', //设置横向布局
    borderColor:'#CCCCCC',
    borderWidth:1,
    // alignItems:'center'//交叉轴的对齐方式

  },
});
