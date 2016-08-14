/**
 * Created by qoder on 16/6/11.
 */
import{createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
const neuqstReducer = require('../reducers');

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

var configStore = function (initialState) {
  const store = createStoreWithMiddleware(neuqstReducer, initialState);
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
