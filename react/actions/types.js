'use strict';

import type { HomeModel } from '../model/home';

export type Action = {
    {type: 'SET_LOADING'}
  | {type: 'SET_REFRESHING'}
  | {type: 'GET_DATA',data: HomeModel}
};
