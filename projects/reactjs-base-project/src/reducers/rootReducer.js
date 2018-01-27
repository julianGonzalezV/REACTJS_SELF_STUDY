import {combineReducers} from 'redux';
import persons from './personReducer';

const rootReducer = combineReducers({
  // short hand property names
  persons
})

export default rootReducer;
