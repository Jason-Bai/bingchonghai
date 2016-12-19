import {                                                                                                                                               
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
  REMOVE_EMPLOYEE_REQUEST,
  REMOVE_EMPLOYEE_SUCCESS,
  REMOVE_EMPLOYEE_FAILURE,
  MODIFY_EMPLOYEE_REQUEST,
  MODIFY_EMPLOYEE_SUCCESS,
  MODIFY_EMPLOYEE_FAILURE
} from './constants';

import { employeeHttp } from '../../../util/api';

export function fetch(params, options) {

  return (dispatch, state) => {

    dispatch({
      type: FETCH_EMPLOYEE_REQUEST
    })

    return employeeHttp.list(params, options)
      .then(response => {
        dispatch({
          type: FETCH_EMPLOYEE_SUCCESS,
          data: response
        })
      }).catch(error => {
        dispatch({
          type: FETCH_EMPLOYEE_FAILURE,
          data: error
        })
      })
      
  }
}

export function add(data, options) {

  return (dispatch, state) => {

    dispatch({
      type: ADD_EMPLOYEE_REQUEST
    })

    return employeeHttp.create(data, options)
      .then(response => {
        dispatch({
          type: ADD_EMPLOYEE_SUCCESS,
          data: response
        })
      }).catch(error => {
        dispatch({
          type: ADD_EMPLOYEE_FAILURE,
          data: error
        })
      })

  }
}

export function remove(options = {}) {

  return dispatch => {

    dispatch({
      type: REMOVE_EMPLOYEE_REQUEST
    })
    
    return employeeHttp.remove(options)
      .then(response => {
        dispatch({
          type: REMOVE_EMPLOYEE_SUCCESS,
          data: options
        })
      }).catch(error => {
        dispatch({
          type: REMOVE_EMPLOYEE_FAILURE,
          data: error
        })
      })

  }
}

export function modify(data, options = {}) {

  return (dispatch, state) => {

    dispatch({
      type: MODIFY_EMPLOYEE_REQUEST
    })

    return employeeHttp.modify(data, options)
      .then(response => {
        dispatch({
          type: MODIFY_EMPLOYEE_SUCCESS,
          data: response
        })
      }).catch(error => {
        dispatch({
          type: MODIFY_EMPLOYEE_FAILURE,
          data: error
        })
      })
  }
}