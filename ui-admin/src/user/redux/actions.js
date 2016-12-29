import { userHttp } from '../../utils/httpClient';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './constants';

function requestUsers() {
  return {
    type: FETCH_USER_REQUEST,
    payload: {
      list: [],
      count: 0,
    }
  };
}

function receiveUsersSuccess(response) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: {
      list: response.data,
      count: +response.headers['x-content-record-total'],
    }
  };
}

function receiveUsersFailure(response) {
  return {
    type: LOGIN_FAILURE,
    payload: {
      message: response.data,
    }
  };
}

export function fetch(params) {
  return dispatch => {
    dispatch(requestUsers());
    return userHttp.list(params).then(response => {
      if (!response || !response.data) {
        dispatch(receiveUsersFailure(response));
        Promise.reject(response.data);
      } else {
        dispatch(receiveUsersSuccess(response));
      }
    }).catch(err => console.log('Error: ', err))
  }
}
