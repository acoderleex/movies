'use strict';

import { applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import promise from './promise';
import reducers from '../reducers';

const isDebuggingInChrome= __DEV__&&!!window.navigator.userAgent;

var logger = createLogger({
    predicate: (getState,action) => isDebuggingInChrome,
    collapsed: true,
    duration: true
});

const store =applyMiddleware(thunk,promise,logger)(createStore)(reducers);

function configureStore() {
  if (isDebuggingInChrome) {
    window.store=store;
  }
  return store;
}

module.exports = configureStore;
