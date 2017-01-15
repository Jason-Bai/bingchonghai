import _ from 'lodash';
import { articleHttp } from '../../utils/httpClient';
import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  ADD_ARTICLE_REQUEST,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAILURE,
  MODIFY_ARTICLE_REQUEST,
  MODIFY_ARTICLE_SUCCESS,
  MODIFY_ARTICLE_FAILURE,
  REMOVE_ARTICLE_REQUEST,
  REMOVE_ARTICLE_SUCCESS,
  REMOVE_ARTICLE_FAILURE,
  DETAIL_ARTICLE_REQUEST,
  DETAIL_ARTICLE_SUCCESS,
  DETAIL_ARTICLE_FAILURE
} from './constants';

function requestCategorys() {
  return {
    type: FETCH_ARTICLE_REQUEST,
    payload: {
      list: [],
      count: 0,
    }
  };
}

function receiveCategorysSuccess(response) {
  return {
    type: FETCH_ARTICLE_SUCCESS,
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
    return articleHttp.query(params).then(response => {
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
      type: ADD_ARTICLE_REQUEST
    })
    return articleHttp.create(data).then(response => {
      dispatch({
        type: ADD_ARTICLE_SUCCESS,
        payload: response.data
      })
    }).catch((error) => {
      dispatch({
        type: ADD_ARTICLE_FAILURE,
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
      type: MODIFY_ARTICLE_REQUEST
    });
    return articleHttp.modify(data, params).then(response => {
      const payload = _.extend({}, response.data, {parent: params.parent, creator: params.creator});
      dispatch({
        type: MODIFY_ARTICLE_SUCCESS,
        payload
      });
    }).catch((error) => {
      dispatch({
        type: MODIFY_ARTICLE_FAILURE,
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
      type: REMOVE_ARTICLE_REQUEST
    })
    return articleHttp.remove(params).then(response => {
      dispatch({
        type: REMOVE_ARTICLE_SUCCESS,
        payload: params
      })
    }).catch((error) => {
      dispatch({
        type: REMOVE_ARTICLE_FAILURE,
        payload: {
          message: error.response.data
        }
      })
    })
  }
}

export function detail(params) {
  return dispatch => {
    dispatch({
      type: DETAIL_ARTICLE_REQUEST
    })
    return articleHttp.detail(params).then(response => {
      dispatch({
        type: DETAIL_ARTICLE_SUCCESS,
        payload: response.data
      })
    }).catch((error) => {
      dispatch({
        type: DETAIL_ARTICLE_FAILURE,
        payload: {
          message: error.response.data
        }
      })
    })
  }
}
