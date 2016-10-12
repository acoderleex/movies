'use strict';
import React, { Component } from 'react';
import {
   StyleSheet,
   NavigatorIOS
} from 'react-native';

import CommonStyle from '../styles/back';
import assign from 'object-assign';

type Props = {
    route: any;
    navigator: any;
}

type State = {
    backIcon: any;
}

class BackNavigator extends Component {
  propse: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state={
      backIcon: null
    };
  }
  componentWillMount(){
    this.setState({backIcon:require('image!back')});
  }
  render(){
    if (!this.state.backIcon) {
      return null;
    }
    return(
      <NavigatorIOS
        ref="navigator"
        itemWrapperStyle={styles.content}
        style={styles.container}
        initialRoute={{
            ...this.props.route,
            leftButtonTitle: '',
            leftButtonIcon: this.state.backIcon,
            onLeftButtonPress: this.props.navigator.pop,
            passProps:{
              navigator: this
            }
          }}
        />
    );
  }
  push(route: any) {
    this.refs.navigator.push(route);
  }

  close() {
    console.log("======close====closecloseclose===");
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create(assign(
  {},
  CommonStyle
));
module.exports = BackNavigator;
