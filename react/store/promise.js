'use strict';

function warn(error) {
  console.warn(error.meassage| error);
  throw error;
}

module.exports = (store :any) => (next :any) =>(action :any)=>
          typeof action.then === 'function'
            ?Promise.resolve(action).then(next,warn)
            :next(action);
