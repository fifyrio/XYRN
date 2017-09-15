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
  RefreshControl,
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

let testData = {
  '0':[1],
  '1':[1,2,4,5,6],
};

export default class XYRecycle extends Component{
  constructor(props){
    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.state= {
      result: '',
      dataSource: ds,
      dataObj: {
        '0':[],
        '1':[],
      },
      isLoading: true,
    };

    this.onLoad();
  };


  loadHotModels(){
    let url = 'https://userapi.hiweixiu.com/shr/get-hot-device',
        params = new Map();
    params.set('version', '2.5.1');
    XYHttpService.request('GET',url,params,false)
        .then(result=>{
          let data = this.formatDataSource('1',result);
          this.setState({
            dataSource:this.state.dataSource.cloneWithRowsAndSections(data),
            isLoading:false,
          })
        })
        .catch(error=>{
          console.log(error);
        });
  }

  loadRecycleSum(){
    let url = 'https://userapi.hiweixiu.com/shr/get-shr-order-counts',
        params = new Map();
    params.set('version', '2.5.1');
    XYHttpService.request('GET',url,params,false)
        .then(result=>{
          let data = this.formatDataSource('0',result);
          this.setState({
            dataSource:this.state.dataSource.cloneWithRowsAndSections(data),
          })
        })
        .catch(error=>{
          console.log(error);
        });
  }

  //加载数据
  onLoad(){
    this.loadRecycleSum();
    this.loadHotModels();
  }

  formatDataSource(sectionID,result){
    if (sectionID === '0'){
      this.state.dataObj['0'] = [result.data];
    }else {
      this.state.dataObj['1'] = result.data;
    }
    return this.state.dataObj;
  }

  componentDidMount(){
    this.onLoad();
  };

  //返回section的方法
  _renderSectionHeader(sectionData, sectionID){
    if (sectionID === '0'){
      return (<View></View>)
    }else {
      return(
          <XYRecycleSectionHeader/>
      )
    }
  };

  //返回cell的方法
  _renderRow(rowData, sectionID, rowID){
    if (sectionID === '0'){
      return(
          <XYRecycleTopView rowData={rowData}/>
      )
    }else {
      return(
          <XYRecycleSectionRow rowData={rowData}/>
      )
    }
  };

  render(){
    return(
        <View style={styles.container}>
          <ListView
              renderRow={(rowData, sectionID, rowID) => this._renderRow(rowData, sectionID, rowID)}
              renderSectionHeader={(sectionData, sectionID) => this._renderSectionHeader(sectionData, sectionID)}
              dataSource={this.state.dataSource}
              stickySectionHeadersEnabled={false}
              contentContainerStyle={styles.listViewStyle}
              refreshControl={
                <RefreshControl
                    refreshing={this.state.isLoading}
                    onRefresh={()=> this.onLoad()}
                />
              }
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
    marginBottom: 50,
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
