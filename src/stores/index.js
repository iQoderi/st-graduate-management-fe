/**
 * Created by qoder on 16/6/11.
 */
import{import, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createStore} from 'redux';
const neuqstReducer = require('../reducers');



const crashReporter = store=>next=>action=> {
  try {
    return next(action);
  } catch (err) {
    const neuqState = store.getState();
    const user = neuqState.myMsg;
    bughd("user", user);
    bughd('notify', err);
  }
};

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  crashReporter
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
