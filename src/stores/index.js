/**
 * Created by qoder on 16/6/11.
 */
const redux = require('redux');
const neuqstReducer = require('../reducers');

var configStore = function (initialState) {
  const store = redux.createStore(neuqstReducer, initialState);
  //热替换
  if (module.hot) {
    module.hot.accept('../reducers', ()=> {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};


export  default configStore;
