import { categoryHttp } from '../../utils/httpClient';
import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  MODIFY_CATEGORY_REQUEST,
  MODIFY_CATEGORY_SUCCESS,
  MODIFY_CATEGORY_FAILURE,
  REMOVE_CATEGORY_REQUEST,
  REMOVE_CATEGORY_SUCCESS,
  REMOVE_CATEGORY_FAILURE
} from './constants';

function requestCategorys() {
  return {
    type: FETCH_CATEGORY_REQUEST,
    payload: {
      list: [],
      count: 0,
    }
  };
}

function receiveCategorysSuccess(response) {
  return {
    type: FETCH_CATEGORY_SUCCESS,
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
    return categoryHttp.query(params).then(response => {
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
      type: ADD_CATEGORY_REQUEST
    })
    return categoryHttp.create(data).then(response => {
      dispatch({
        type: ADD_CATEGORY_SUCCESS,
        payload: response.data
      })
    }).catch((error) => {
      dispatch({
        type: ADD_CATEGORY_FAILURE,
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
      type: MODIFY_CATEGORY_REQUEST
    })
    return categoryHttp.modify(data, params).then(response => {
      dispatch({
        type: MODIFY_CATEGORY_SUCCESS,
        payload: response.data
      })
    }).catch((error) => {
      dispatch({
        type: MODIFY_CATEGORY_FAILURE,
        payload: {
          message: error.response.data
        }
      })
    })
  }
}

export function remove(params) {
  return dispatch => {
    dispatch({
      type: REMOVE_CATEGORY_REQUEST
    })
    return categoryHttp.remove(params).then(response => {
      dispatch({
        type: REMOVE_CATEGORY_SUCCESS,
        payload: params
      })
    }).catch((error) => {
      dispatch({
        type: REMOVE_CATEGORY_FAILURE,
        payload: {
          message: error.response.data
        }
      })
    })
  }
}
