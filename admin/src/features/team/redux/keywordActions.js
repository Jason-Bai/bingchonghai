import {                                                                                                                                               
  FETCH_KEYWORD_REQUEST,
  FETCH_KEYWORD_SUCCESS,
  FETCH_KEYWORD_FAILURE,
  ADD_KEYWORD_REQUEST,
  ADD_KEYWORD_SUCCESS,
  ADD_KEYWORD_FAILURE,
  REMOVE_KEYWORD_REQUEST,
  REMOVE_KEYWORD_SUCCESS,
  REMOVE_KEYWORD_FAILURE,
  MODIFY_KEYWORD_REQUEST,
  MODIFY_KEYWORD_SUCCESS,
  MODIFY_KEYWORD_FAILURE
} from './constants';

import { keywordHttp } from '../../../util/api';

export function fetch(params, options) {

  return (dispatch, state) => {

    dispatch({
      type: FETCH_KEYWORD_REQUEST
    })

    return keywordHttp.list(params, options)
      .then(response => {
        dispatch({
          type: FETCH_KEYWORD_SUCCESS,
          data: response
        })
      }).catch(error => {
        dispatch({
          type: FETCH_KEYWORD_FAILURE,
          data: error
        })
      })
      
  }
}

export function add(data, options) {

  return (dispatch, state) => {

    dispatch({
      type: ADD_KEYWORD_REQUEST
    })

    return keywordHttp.create(data, options)
      .then(response => {
        dispatch({
          type: ADD_KEYWORD_SUCCESS,
          data: response
        })
      }).catch(error => {
        dispatch({
          type: ADD_KEYWORD_FAILURE,
          data: error
        })
      })

  }
}

export function remove(options = {}) {

  return dispatch => {

    dispatch({
      type: REMOVE_KEYWORD_REQUEST
    })
    
    return keywordHttp.remove(options)
      .then(response => {
        dispatch({
          type: REMOVE_KEYWORD_SUCCESS,
          data: options
        })
      }).catch(error => {
        dispatch({
          type: REMOVE_KEYWORD_FAILURE,
          data: error
        })
      })

  }
}

export function modify(data, options = {}) {

  return (dispatch, state) => {

    dispatch({
      type: MODIFY_KEYWORD_REQUEST
    })

    return keywordHttp.modify(data, options)
      .then(response => {
        dispatch({
          type: MODIFY_KEYWORD_SUCCESS,
          data: response
        })
      }).catch(error => {
        dispatch({
          type: MODIFY_KEYWORD_FAILURE,
          data: error
        })
      })
  }
}