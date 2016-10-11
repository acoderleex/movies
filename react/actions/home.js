'use strict';

import HomeService from '../service/home';

const service =new HomeService();

function setHomeLoading() {
  return {
    type: 'SET_LOADING'
  };
}

function getHomeData() {
  return(dispatch: any) => {
    service.getSpalshData().then(
      (result)=>{
        dispatch({
          type: 'GET_DATA',
          data: result
        });
      }
    );
  };
}

module.exports = {
    setHomeLoading,
    getHomeData
};
