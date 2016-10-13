'use strict';
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View,
   TouchableHighlight
} from 'react-native';

import assign from 'object-assign';
import CommonStyle from '../../styles/common';

class Onsite extends Component {

  render() {
    return (
      <TouchableHighlight onPress={()=>this.props.callBackParent()} style={styles.touch}>
        <View style={ styles.container}>
            <Text style={ styles.welcome}>Onsite</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create(assign(
  {},
  CommonStyle
));

module.exports = Onsite;
