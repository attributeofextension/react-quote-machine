import axios from 'axios';
import { FETCH_USER, FETCH_MY_QUOTES, POST_QUOTE, FETCH_QMs, FETCH_QM, POST_NAME } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchMyQuotes = () => async dispatch => {
  const res = await axios.get('/api/quotes/my');
  console.log(res);
  dispatch({type: FETCH_MY_QUOTES, payload: res.data });
}

export const postQuote = (values) => async dispatch => {
  const res = await axios.post('/api/quotes/my',values);
  console.log(res.data);
  dispatch({type: POST_QUOTE, payload: res.data});
}
export const fetchQMs = () => async dispatch => {
  const res = await axios.get(`/api/qm/`);

  dispatch({type: FETCH_QMs, payload: res.data });
}
export const fetchQM = (id) => async dispatch => {
  const res = await axios.get(`/api/qm/${id}`);
  dispatch({type: FETCH_QM, payload: res.data });
}
export const postName = (values) => async dispatch => {
  const res = await axios.post('/api/quotes/captions',values);
  dispatch({type: POST_NAME, payload: res.data });
}