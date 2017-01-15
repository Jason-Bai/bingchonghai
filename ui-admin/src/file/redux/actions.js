import _ from 'lodash';
import { fileHttp } from '../../utils/httpClient';
import {
  FETCH_FILE_REQUEST,
  FETCH_FILE_SUCCESS,
  FETCH_FILE_FAILURE,
  ADD_FILE_REQUEST,
  ADD_FILE_SUCCESS,
  ADD_FILE_FAILURE,
  MODIFY_FILE_REQUEST,
  MODIFY_FILE_SUCCESS,
  MODIFY_FILE_FAILURE,
  REMOVE_FILE_REQUEST,
  REMOVE_FILE_SUCCESS,
  REMOVE_FILE_FAILURE
} from './constants';

function requestFiles() {
  return {
    type: FETCH_FILE_REQUEST,
    payload: {
      list: [],
      count: 0,
    }
  };
}

function receiveFilesSuccess(response) {
  return {
    type: FETCH_FILE_SUCCESS,
    payload: {
      list: response.data,
      count: +response.headers['x-content-record-total'],
    }
  };
}

function receiveFilesFailure(response) {
  return {
    type: LOGIN_FAILURE,
    payload: {
      message: response.data,
    }
  };
}

export function fetch(params) {
  return dispatch => {
    dispatch(requestFiles());
    return fileHttp.query(params).then(response => {
      if (!response || !response.data) {
        dispatch(receiveFilesFailure(response));
      } else {
        dispatch(receiveFilesSuccess(response));
      }
    }).catch(err => console.log('Error: ', err))
  }
}

export function create(data) {
  return dispatch => {
    dispatch({
      type: ADD_FILE_REQUEST
    })
    return fileHttp.create(data).then(response => {
      dispatch({
        type: ADD_FILE_SUCCESS,
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
        type: ADD_FILE_FAILURE,
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
      type: MODIFY_FILE_REQUEST
    })
    return fileHttp.modify(data, params).then(response => {
      dispatch({
        type: MODIFY_FILE_SUCCESS,
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
        type: MODIFY_FILE_FAILURE,
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
      type: REMOVE_FILE_REQUEST
    })
    return fileHttp.remove(params).then(response => {
      dispatch({
        type: REMOVE_FILE_SUCCESS,
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
        type: REMOVE_FILE_FAILURE,
        payload: {
          message
        }
      })
    })
  }
}
