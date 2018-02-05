import { combineReducers } from 'redux';
import authReducer from './authReducer';
import myQuotesReducer from './myQuotesReducer';
import qmReducer from './qmReducer';

export default combineReducers({
  auth : authReducer,
  myQuotes: myQuotesReducer,
  qms: qmReducer
});