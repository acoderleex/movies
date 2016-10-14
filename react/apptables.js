'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS,
  NavigatorIOS,
  View
} from 'react-native';

import assign from 'object-assign';
import CommonStyle from './styles/tablecontent';

import Home from './components/home/homenavigator';
import Onsite from './components/onsite';
import Merchant from './components/merchant';
import Mine from './components/mine';
import More from './components/more';

type State = {
  selectedTab: string;
  notifyCount: number;
  isShowHeader: bool;
};

class AppTables extends Component{

  changeTab(name:string){
    this.setState({
      selectedTab: name,
      isShowHeader: false
    });
  }

  onChildClick(){
    console.log(this);
    this.setState({
      notifyCount:11
    });
  }

  state: State;

  constructor(){
    super();
    this.state={
      selectedTab:'home',
      notifyCount: 1,
      isShowHeader:true
    }
  }

  render(){
    return(
      <TabBarIOS  tintColor='#36b9af'>
           <TabBarIOS.Item
              title="首页"
              renderAsOriginal={ true }
              icon = {require('image!icon_tabbar_homepage')}
              selectedIcon={require('image!icon_tabbar_homepage_selected')}
              selected={this.state.selectedTab==='home'}
              onPress={()=>this.changeTab('home')}>
              <NavigatorIOS
                  navigationBarHidden={ !this.state.isShowHeader }
                  shadowHidden={ true }
                  style={styles.container}
                  initialRoute={{
                      tintColor:'#36b9af',
                      component: Home,
                      title: '首页',
                      rightButtonIcon: require('image!icon_tabbar_onsite'),
                  }}
                />

           </TabBarIOS.Item>

           <TabBarIOS.Item
              title="上门"
              badge={ this.state.notifyCount>0?this.state.notifyCount:undefined }
              renderAsOriginal={ true }
              icon = {require('image!icon_tabbar_onsite')}
              selectedIcon={require('image!icon_tabbar_onsite_selected')}
              selected={this.state.selectedTab==='onsite'}
              onPress= {()=>this.changeTab('onsite')}>
              <NavigatorIOS
                  navigationBarHidden={ true}
                  style={styles.container}
                  initialRoute={{
                      component: Onsite,
                      title: '上门',
                      passProps: { callBackParent: this.onChildClick.bind(this) }
                  }}
                />
           </TabBarIOS.Item>

           <TabBarIOS.Item
              title="商家"
              renderAsOriginal={ true }
              icon = {require('image!icon_tabbar_merchant_normal')}
              selectedIcon={require('image!icon_tabbar_merchant_selected')}
              selected={this.state.selectedTab==='merchant'}
              onPress = {()=>this.changeTab('merchant')}>
              <NavigatorIOS
                  style={styles.container}
                  initialRoute={{
                      component: Merchant,
                      title: '商家',
                  }}
                />
           </TabBarIOS.Item>

           <TabBarIOS.Item
              title="我的"
              renderAsOriginal={ true }
              icon = {require('image!icon_tabbar_mine')}
              selectedIcon={require('image!icon_tabbar_mine_selected')}
              selected={this.state.selectedTab==='mine'}
              onPress= {()=>this.changeTab('mine')}>
              <NavigatorIOS
                  style={styles.container}
                  initialRoute={{
                      component: Mine,
                      title: '我的',
                  }}
                />

           </TabBarIOS.Item>

           <TabBarIOS.Item
              title="更多"
              renderAsOriginal={ true }
              icon = {require('image!icon_tabbar_misc')}
              selectedIcon={require('image!icon_tabbar_misc_selected')}
              selected={this.state.selectedTab==='more'}
              onPress= {()=>this.changeTab('more')}>
              <NavigatorIOS
                  style={styles.container}
                  initialRoute={{
                      component: More,
                      title: '更多',
                  }}
                />

           </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create(assign(
    {},
    CommonStyle
));
module.exports = AppTables;
