import _ from 'lodash';
import { diseaseHttp } from '../../utils/httpClient';
import {
  FETCH_DISEASE_REQUEST,
  FETCH_DISEASE_SUCCESS,
  FETCH_DISEASE_FAILURE,
  ADD_DISEASE_REQUEST,
  ADD_DISEASE_SUCCESS,
  ADD_DISEASE_FAILURE,
  MODIFY_DISEASE_REQUEST,
  MODIFY_DISEASE_SUCCESS,
  MODIFY_DISEASE_FAILURE,
  REMOVE_DISEASE_REQUEST,
  REMOVE_DISEASE_SUCCESS,
  REMOVE_DISEASE_FAILURE
} from './constants';

function requestCategorys() {
  return {
    type: FETCH_DISEASE_REQUEST,
    payload: {
      list: [],
      count: 0,
    }
  };
}

function receiveCategorysSuccess(response) {
  return {
    type: FETCH_DISEASE_SUCCESS,
    payload: {
      list: response.data,
      count: +response.headers['x-content-record-total'],
    }
  };
}

function receiveCategorysFailure(response) {
  return {
    type: LOGIN_FAILURE,
    payload: {
      message: response.data,
    }
  };
}

export function fetch(params) {
  return dispatch => {
    dispatch(requestCategorys());
    return diseaseHttp.query(params).then(response => {
      if (!response || !response.data) {
        dispatch(receiveCategorysFailure(response));
      } else {
        dispatch(receiveCategorysSuccess(response));
      }
    }).catch(err => console.log('Error: ', err))
  }
}

export function create(data) {
  return dispatch => {
    dispatch({
      type: ADD_DISEASE_REQUEST
    })
    return diseaseHttp.create(data).then(response => {
      dispatch({
        type: ADD_DISEASE_SUCCESS,
        payload: response.data
      })
    }).catch((error) => {
      dispatch({
        type: ADD_DISEASE_FAILURE,
        payload: {
          message: error.response.data
        }
      })
    })
  }
}

export function modify(data, params) {
  return dispatch => {
    dispatch({
      type: MODIFY_DISEASE_REQUEST
    });
    return diseaseHttp.modify(data, params).then(response => {
      const payload = _.extend({}, response.data, {parent: params.parent, creator: params.creator});
      dispatch({
        type: MODIFY_DISEASE_SUCCESS,
        payload
      });
    }).catch((error) => {
      dispatch({
        type: MODIFY_DISEASE_FAILURE,
        payload: {
          message: error.response.data
        }
      });
    })
  }
}

export function remove(params) {
  return dispatch => {
    dispatch({
      type: REMOVE_DISEASE_REQUEST
    })
    return diseaseHttp.remove(params).then(response => {
      dispatch({
        type: REMOVE_DISEASE_SUCCESS,
        payload: params
      })
    }).catch((error) => {
      dispatch({
        type: REMOVE_DISEASE_FAILURE,
        payload: {
          message: error.response.data
        }
      })
    })
  }
}
