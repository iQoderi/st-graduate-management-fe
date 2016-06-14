/**
 * Created by qoder on 16/6/11.
 */
import {combineReducers} from 'redux';

import is_loading from './loading.reducer';
import is_tips from './tips.reducer';
import is_dropMenu from './dropmenu.reducer';
import is_changePass from './chanPass.reducer';

const neuqstReducer = combineReducers({
  is_loading,
  is_tips,
  is_dropMenu,
  is_changePass
});

module.exports=neuqstReducer;
