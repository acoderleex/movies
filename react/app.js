'use strict';
import React , { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import assign from 'object-assign';
import { connect } from 'react-redux';

import LoadingStyle from './styles/loading';
import CommonStyle from './styles/common';
import type { HomeModel } from './model/home';
import getImageSource from './utils/getimagesource';


type Props = {
    dispatch: any;
    isLoading: bool;
    isRefreshing: bool;
    data: HomeModel;
};

class App extends Component {

    props: Props;

    constructor(props: Props){
        super(props);
    }
    render(){
      if (this.props.isLoading === true) {
        return(
          <View style={ styles.loadingView } >
            <View style={styles.loadingHeader}>
              <Text style={styles.loadingText}>Loading...</Text>
              <Image source={require('./img/sunny.gif')} />
            </View>
          </View>
        );
      }
      var imageUrl= getImageSource(this.props.data.imageUrl);
      return(
        <View style={styles.container}>
          <Text style={styles.welcome}>Movies</Text>
          <Image source={{uri: imageUrl}} style={ styles.cardImg }/>
        </View>
      );
    }
}

function mapStateToProps(store: any,props: Props) {
    return {
      isLoading: store.home.isLoading,
      isRefreshing: store.home.isRefreshing,
      data: store.home.data,
      ...props
    };
}


const styles = StyleSheet.create(assign(
  {},
  CommonStyle,
  LoadingStyle
));

module.exports = connect(mapStateToProps)(App);
