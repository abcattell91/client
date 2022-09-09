import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // done to rename the reducer to help know what it is.
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
