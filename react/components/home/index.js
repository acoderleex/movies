'use strict';
import React , { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight
} from 'react-native';

import assign from 'object-assign';
import { connect } from 'react-redux';

import LoadingStyle from '../../styles/loading';
import CommonStyle from '../../styles/common';
import type { HomeModel } from '../../model/home';
import getImageSource from '../../utils/getimagesource';


type Props = {
    dispatch: any;
    isLoading: bool;
    isRefreshing: bool;
    data: HomeModel;
    navigator: any;
};

class App extends Component {

    props: Props;

    constructor(props: Props){
        super(props);
        (this: any).navigatorTo=this.navigatorTo.bind(this);
    }
    render(){
      if (this.props.isLoading === true) {
        return(
          <View style={ styles.loadingView } >
            <View style={styles.loadingHeader}>
              <Text style={styles.loadingText}>Loading...</Text>
              <Image source={require('../../img/sunny.gif')} />
            </View>
          </View>
        );
      }
      var imageUrl= getImageSource(this.props.data.imageUrl);
      return(
        <TouchableHighlight onPress={()=>this.navigatorTo(1)} style={styles.touch}>
          <View style={styles.container}>
            <Text style={styles.welcome}>Movies</Text>
            <Image source={{uri: imageUrl}} style={ styles.cardImg }/>
          </View>
        </TouchableHighlight>
      );
    }

    navigatorTo(indexItem: number){
      if (indexItem==0) {
        this.props.navigator.push({
            onsite: true,
            passProps: { isShowHeader: '1' }
        });
      }else  if (indexItem==1) {
        this.setState({isShowHeader:false}),
        this.props.navigator.push({
            mine: true,
            passProps: { isShowHeader: '12888' }
        });
      }else  if (indexItem==2) {
        this.props.navigator.push({
            home: true,
            passProps: { isShowHeader: '1' }
        });
      }
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
