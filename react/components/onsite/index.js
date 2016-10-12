'use strict';
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View
} from 'react-native';

import assign from 'object-assign';
import CommonStyle from '../../styles/common';

class Onsite extends Component {

  render() {
    return (
      <View style={ styles.container}>
          <Text style={ styles.welcome}>Onsite</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create(assign(
  {},
  CommonStyle
));

module.exports = Onsite;
