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

import XYViewUtils from '../utils/XYViewUtils'
import XYRecycleTopView from '../view/recycleMain/XYRecycleTopView'
import XYRecycleSectionHeader from '../view/recycleMain/XYRecycleSectionHeader'
import XYHttpService from '../core/XYHttpService'


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

export default class XYSectionViewTest extends React.Component{
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
      }),
      result : '',
    };
  }

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

  getLocalData(){
    let  Arr = {},
        sectionIDs =[],//所有区ID的数组
        rowIDs =[];//行ID数组
    //通过两次for循环创建假数据
    for (let i = 0; i< 2; i++){
      sectionIDs.push(i);
      Arr[i] = 'section' + i;
      rowIDs[i] = [];
      for (let j= 0; j<5; j++){
        if (i == 0){
          rowIDs[i].push(j);
          Arr[i +':' +j] = 'section' + i + '--row' + j;
          break;
        }else {
          rowIDs[i].push(j);
          Arr[i +':' +j] = 'section' + i + '--row' + j;
        }

      }
    }
    //重新设置ListView的数据源，刷新表
    this.setState({
      dataSource:this.state.dataSource.cloneWithRowsAndSections(Arr,sectionIDs,rowIDs)
    })
  };

  componentDidMount(){
    this.getLocalData();
    this.loadData();
  };

  render(){
    return(
        <View style={styles.container}>
          {/*<Text>{this.state.result}</Text>*/}
          <ListView//创建表，并设置返回section和cell的方法
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
              renderSectionHeader={this._renderSectionHeader}
              contentContainerStyle={styles.listViewStyle}
              renderSeparator={() => this._renderSeparator()}
              stickySectionHeadersEnabled={false}
          />
        </View>
    )
  };



  //返回cell的方法
  _renderRow(rowData,sectionID,rowID,highlighRow){
    if (sectionID == 0){
      return(
          <XYRecycleTopView/>
      )
    }else {
      return(

          <View style={styles.cell}>
            <Text style={{flex:1}}>rowData:{rowData}</Text>
            <Text style={{flex:1}}>sectionID:{sectionID}</Text>
            <Text style={{flex:1}}>rowID:{rowID}</Text>
            {/*<Text style={{flex:1}}>highlighRow:{highlighRow}</Text>*/}
          </View>
      )
    }
  };

  //返回section的方法
  _renderSectionHeader(sectionData,sectionID){
    if (sectionID == 0){
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
}

const win = XYViewUtils.getScreen();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
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