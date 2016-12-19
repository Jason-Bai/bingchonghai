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
} from './constants'

import { userHttp } from '../../../util/api'

export function fetch(params) {

  return (dispatch, state) => {

    dispatch({
      type: FETCH_USER_REQUEST,
    })

    return userHttp.list(params)
      .then(response => {
        dispatch({
          type: FETCH_USER_SUCCESS,
          data: response
        })
      }).catch(error => {
        dispatch({
          type: FETCH_USER_FAILURE,
          data: error
        })
      })

  }
}

export function modify(data, options) {
  return (dispatch, state) => {
    dispatch({
      type: MODIFY_USER_REQUEST,
    })

    return userHttp.modify(data, options)
      .then(response => {
        dispatch({
          type: MODIFY_USER_SUCCESS,
          data: response
        })
      }).catch(error => {
        dispatch({
          type: MODIFY_USER_FAILURE,
          data: error
        })
      })

  }
}

export function add(data) {
  return (dispatch, state) => {
    dispatch({
      type: ADD_USER_REQUEST
    })

    return userHttp.create(data)
      .then(response => {
        dispatch({
          type: ADD_USER_SUCCESS,
          data: response
        })
      }).catch(error => {
        dispatch({
          type: ADD_USER_FAILURE,
          data: error
        })
      })
  }
}

export function remove(options) {
  return (dispatch, state) => {
    dispatch({
      type: REMOVE_USER_REQUEST
    })
    return userHttp.remove(options)
      .then(response => {
        dispatch({
          type: REMOVE_USER_SUCCESS,
          data: options
        })
      }).catch(error => {
        dispatch({
          type: REMOVE_USER_FAILURE,
          data: error
        })
      })
  }
}
