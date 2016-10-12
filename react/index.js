'use strict';

import React , { Component } from 'react';
import { Provider } from 'react-redux';

import configureRealm from './realm/configure';
import configureStore from './store/configure';
import { setHomeLoading,getHomeData } from './actions';

import Tables from './apptables';


type State = {
  store: any;
};

class Entry extends Component {
  state: State;

  constructor() {
    super();
    configureRealm();
    this.state = {
      store: configureStore()
    }
    this.state.store.dispatch(setHomeLoading());
    this.state.store.dispatch(getHomeData());
  }
  render(){
    return(
      <Provider store={this.state.store}>
          <Tables/>
      </Provider>
    );
  }
}

global.log=(...args)=>{
    console.log('----Start------');
    console.log(...args);
    console.log('---- End ------');
    return args[args.length-1];
};

module.exports = Entry;
