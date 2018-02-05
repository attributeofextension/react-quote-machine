import { FETCH_MY_QUOTES, POST_QUOTE, POST_NAME } from '../actions/types';

export default function myQuotesReducer(state = {},action) {
  switch(action.type) {
    case POST_NAME :
      return action.payload;
    case POST_QUOTE : 
      return action.payload;
    case FETCH_MY_QUOTES :
      return action.payload;
    default: 
      return state;
  }
}