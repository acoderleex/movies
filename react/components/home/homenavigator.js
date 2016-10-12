'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Navigator
} from 'react-native';

import assign from 'object-assign';
import CommonStyle from '../../styles/tablecontent';

import BackNavigator from '../backnavigator';

import OnSite  from '../onsite';
import Mine from '../mine';
import Home from './index';

type Props = {};

class HomeNavigator extends Component {

  constructor(props: Props) {
      super(props);
      (this: any).renderScene=this.renderScene.bind(this);
  }
  render(){
    return(
      <Navigator
        ref="homenavigator"
        style={ styles.container }
        configureScene={(route)=>{
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        initialRoute={{}}
        renderScene={this.renderScene}
        />
    );
  }

  push(route: any){
    this.refs.homenavigator.push(route);
  }

  pop(){
    this.refs.homenavigator.pop();
  }

  renderScene(route: any,navigator: Navigator){
    if (route.onsite) {
      return(
          <BackNavigator  navigator={ navigator } route={{
              title: "上门",
              component: OnSite
            }}/>
          );
    }

    if (route.mine) {
      return(
        <BackNavigator navigator={ navigator} route={{
            title: "我的",
            component: Mine
          }}/>
      );
    }
    return(
      <Home navigator={this}/>
    );
  }
}

const styles = StyleSheet.create(assign(
  {},
  CommonStyle
));
module.exports = HomeNavigator;
