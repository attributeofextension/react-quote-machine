import _ from 'lodash';
import { FETCH_QMs, FETCH_QM } from '../actions/types';

export default function qmReducer(state={},action) {
  switch(action.type) {
    case FETCH_QMs:
      return _.mapKeys(action.payload, '_id');
    case FETCH_QM:
      return { ...state, [action.payload._id]: action.payload };
    default:
      return state;
  }
 }