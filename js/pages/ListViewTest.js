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


'use strict';

import Toast,{DURATION} from 'react-native-easy-toast'

let data = {
  result:[
    {
      fullname:'will',
      email:'fifyrio@qq.com',
    },
    {
      fullname:'will',
      email:'fifyrio@qq.com',
    },
    {
      fullname:'will',
      email:'fifyrio@qq.com',
    },
    {
      fullname:'will',
      email:'fifyrio@qq.com',
    },
    {
      fullname:'will',
      email:'fifyrio@qq.com',
    },
    {
      fullname:'will',
      email:'fifyrio@qq.com',
    },
    {
      fullname:'will',
      email:'fifyrio@qq.com',
    },
    {
      fullname:'will',
      email:'fifyrio@qq.com',
    },
  ]
};

export default class ListViewTest extends Component {
  constructor(props){
    super(props);



    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data.result),
      isLoggedIn: 1,
    };
  }

  fn = (full_name) => {
    return 'hello ' + full_name;
  };

  _renderText = (text) =>{
    return <Text>{text}</Text>
  };

  _renderNum(num){
    if (num > 0){
      return (
          <View><Text>{num}</Text></View>
      )
    }else {
      return (
          <View><Text>{-num}</Text></View>
      )
    }
  };

  _renderUser(){
    if (this.state.isLoggedIn){
      return(
          <View><Text>You have logged in</Text></View>
      )
    }else {
      return(
          <View><Text>Please log in</Text></View>
      )
    }
  };

  _renderRow(item){
    return <View style={styles.row}>
      {/*<Text style={styles.row_title}>{item.fullname}</Text>*/}
      <Text style={styles.row_title}>{this.fn('Will')}</Text>
      {/*<Text style={styles.row_title}>{(item) => ({item:fullname})}</Text>*/}
      {/*<Text style={styles.row_title}>{'hello ' + item.fullname}</Text>*/}
      <Text style={styles.row_desc}>{item.email}</Text>
      {/*{this._renderText('Hahaha')}*/}
      {this._renderNum(2)}
      {/*{this._renderUser()}*/}
    </View>
  };

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted){
    return <View style={styles.line}>
    </View>
  };



  render() {
    return (
        <View style={styles.container}>
          {/*<ThirdView/>*/}
          <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => this._renderRow(rowData)}
              renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
              contentContainerStyle={styles.listViewStyle}
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

  listViewStyle:{
    flexDirection:'row', //设置横向布局
    flexWrap:'wrap'    //设置换行显示
  },

  row: {
    height: 52,
    width: 375 / 2,
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

  sectionStyle:{
    backgroundColor:'gray',
    height:25
  },
  cellStyle:{
    // flexDirection:'row', //设置横向布局
    borderBottomColor:'#CCCCCC',
    borderBottomWidth:1,
    // alignItems:'center'//交叉轴的对齐方式
    height: 80,
  },
  imageStyle:{
    width:70,
    height:70,
    backgroundColor:'red',
    margin:20
  },
});

class ThirdView extends React.Component{
  constructor(props){
    super(props);

    const getSectionData = (dataBlob,sectionID)=>{
      return dataBlob[sectionID];
    };

    const getRowData = (dataBlob,sectionID,rowID) =>{
      return dataBlob[sectionID + ':' + rowID];
    };

    this.state = {
      dataSource: new ListView.DataSource({
        getSectionData:getSectionData,
        getRowData:getRowData,
        rowHasChanged:(r1,r2)=> r1 !==r2,
        sectionHeaderHasChanged:(s1,s2)=> s1!== s2
      })
    };
  }

  getLocalData(){
    let  Arr = {},
        sectionIDs =[],//所有区ID的数组
        rowIDs =[];//行ID数组
    //通过两次for循环创建假数据
    for (let i = 0; i< 10; i++){
      sectionIDs.push(i);
      Arr[i] = 'section' + i;
      rowIDs[i] = [];
      for (let j= 0; j<5; j++){
        rowIDs[i].push(j);
        Arr[i +':' +j] = 'section' + i + '--row' + j;
      }
    }
    //重新设置ListView的数据源，刷新表
    this.setState({
      dataSource:this.state.dataSource.cloneWithRowsAndSections(Arr,sectionIDs,rowIDs)
    })
  };

  componentDidMount(){
    this.getLocalData();
  };

  render(){
    return(
        <ListView//创建表，并设置返回section和cell的方法
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            renderSectionHeader={this._renderSectionHeader}
            // contentContainerStyle={styles.listViewStyle}
            renderSeparator={() => this._renderSeparator()}
        />
    )
  };

  //返回cell的方法
  _renderRow(rowData,sectionID,rowID,highlighRow){
    return(
        <View style={styles.cellStyle}>
          <Text style={{flex:1}}>rowData:{rowData}</Text>
          <Text style={{flex:1}}>sectionID:{sectionID}</Text>
          <Text style={{flex:1}}>rowID:{rowID}</Text>
          {/*<Text style={{flex:1}}>highlighRow:{highlighRow}</Text>*/}
        </View>
    )
  };

  //返回section的方法
  _renderSectionHeader(sectionData,sectionID){
    return(
        <View style={styles.sectionStyle}>
          <Text>{sectionData}</Text>
        </View>
    )
  };

  _renderSeparator(){
    return <View style={styles.line}>
    </View>
  };
}