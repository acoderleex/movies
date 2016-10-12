'use strict';
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View
} from 'react-native';

import assign from 'object-assign';
import CommonStyle from '../../styles/common';

class More extends Component {

  render() {
    return (
      <View style={ styles.container}>
          <Text style={ styles.welcome}>More</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create(assign(
  {},
  CommonStyle
));

module.exports = More;
