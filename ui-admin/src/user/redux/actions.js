import _ from 'lodash';
import { userHttp } from '../../utils/httpClient';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  MODIFY_USER_REQUEST,
  MODIFY_USER_SUCCESS,
  MODIFY_USER_FAILURE,
  REMOVE_USER_REQUEST,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILURE
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
    return userHttp.query(params).then(response => {
      if (!response || !response.data) {
        dispatch(receiveUsersFailure(response));
      } else {
        dispatch(receiveUsersSuccess(response));
      }
    }).catch(err => console.log('Error: ', err))
  }
}

export function create(data) {
  return dispatch => {
    dispatch({
      type: ADD_USER_REQUEST
    })
    return userHttp.create(data).then(response => {
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: response.data
      })
    }).catch((error) => {
      let message;
      if (_.isString(error.response.data.message)) {
        message = error.response.data.message;
      }
      if (_.isArray(error.response.data.message)) {
        message = _.map(error.response.data.message, 'message').join(';')
      }
      dispatch({
        type: ADD_USER_FAILURE,
        payload: {
          message
        }
      })
    })
  }
}

export function modify(data, params) {
  return dispatch => {
    dispatch({
      type: MODIFY_USER_REQUEST
    })
    return userHttp.modify(data, params).then(response => {
      dispatch({
        type: MODIFY_USER_SUCCESS,
        payload: response.data
      })
    }).catch((error) => {
      let message;
      if (_.isString(error.response.data.message)) {
        message = error.response.data.message;
      }
      if (_.isArray(error.response.data.message)) {
        message = _.map(error.response.data.message, 'message').join(';')
      }
      dispatch({
        type: MODIFY_USER_FAILURE,
        payload: {
          message
        }
      })
    })
  }
}

export function remove(params) {
  return dispatch => {
    dispatch({
      type: REMOVE_USER_REQUEST
    })
    return userHttp.remove(params).then(response => {
      dispatch({
        type: REMOVE_USER_SUCCESS,
        payload: params
      })
    }).catch((error) => {
      let message;
      if (_.isString(error.response.data.message)) {
        message = error.response.data.message;
      }
      if (_.isArray(error.response.data.message)) {
        message = _.map(error.response.data.message, 'message').join(';')
      }
      dispatch({
        type: REMOVE_USER_FAILURE,
        payload: {
          message
        }
      })
    })
  }
}
