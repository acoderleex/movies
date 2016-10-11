'use strict';

import type { Action } from '../actions/types';
import type { HomeModel } from '../model/home';

export type State = {
  isLoading: bool;
  isRefreshing: bool;
  data: HomeModel;
};

const initial : State = {
    isLoading: false,
    isRefreshing: false,
    data: null
};

function home(state: State=initial,action: Action): State{
    switch (action.type) {
      case 'SET_LOADING':
        return {
          ...state,
          isLoading: true
        }
        break;
      case 'SET_REFRESHING':
        return {
          ...state,
          isRefreshing: true
        }
        break;
      case 'GET_DATA':
        return {
          ...state,
          isLoading: false,
          isRefreshing: false,
          data: action.data
        }
        break;
      default:
        return state;
    }
};
module.exports = home;
