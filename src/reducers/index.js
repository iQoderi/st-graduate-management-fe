/**
 * Created by qoder on 16/6/11.
 */
import {combineReducers} from 'redux';

import is_loading from './loading.reducer';
import is_tips from './tips.reducer';


const neuqstReducer = combineReducers({
  is_loading,
  is_tips
});


module.exports=neuqstReducer;
