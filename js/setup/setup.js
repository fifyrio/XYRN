/**
 * Created by wuw on 2017/7/3.
 */

import React, {Component} from 'react'
import {
  Navigator
} from 'react-native'

import XYHomePage from '../pages/XYHomePage'
import XYRecycle from '../pages/XYRecycle'
import XYSectionList from '../pages/XYTestPage'
import ListViewTest from '../pages/ListViewTest'
import XYSectionViewTest from '../pages/XYSectionViewTest'
import XYHttpTest from '../pages/XYHttpTest'



export function setup() {
  //进行一些初始化配置

  class Root extends Component {
    renderScene(route, navigator) {
      let Component = route.component;
      return <Component {...route.params} navigator={navigator}/>
    }

    render() {
      return <Navigator
          initialRoute={{component: XYRecycle}}
          renderScene={(route, navigator)=>this.renderScene(route, navigator)}
      />
    }
  }
  return <Root/>;
}
module.exports = setup;
