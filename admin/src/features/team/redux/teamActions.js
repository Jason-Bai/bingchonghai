import {
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAILURE,
  ADD_TEAM_REQUEST,
  ADD_TEAM_SUCCESS,
  ADD_TEAM_FAILURE,
  REMOVE_TEAM_REQUEST,
  REMOVE_TEAM_SUCCESS,
  REMOVE_TEAM_FAILURE,
  MODIFY_TEAM_REQUEST,
  MODIFY_TEAM_SUCCESS,
  MODIFY_TEAM_FAILURE,
  SET_CURRENT_TEAM
} from './constants';

import { teamHttp } from '../../../util/api';

export function fetch(params) {

  return (dispatch, state) => {

    dispatch({
      type: FETCH_TEAM_REQUEST
    })

    return teamHttp.list(params)
      .then(response => {
        dispatch({
          type: FETCH_TEAM_SUCCESS,
          data: response
        })
      }).catch(error => {
        dispatch({
          type: FETCH_TEAM_FAILURE,
          data: error
        })
      })

  }
}

export function add(data) {

  return (dispatch, state) => {

    dispatch({
      type: ADD_TEAM_REQUEST
    })

    return teamHttp.create(data)
      .then(response => {
        dispatch({
          type: ADD_TEAM_SUCCESS,
          data: response
        })
      }).catch(error => {
        dispatch({
          type: ADD_TEAM_FAILURE,
          data: error
        })
      })

  }
}

export function remove(options = {}) {

  return dispatch => {

    dispatch({
      type: REMOVE_TEAM_REQUEST
    })

    return teamHttp.remove(options)
      .then(response => {
        dispatch({
          type: REMOVE_TEAM_SUCCESS,
          data: options
        })
      }).catch(error => {
        dispatch({
          type: REMOVE_TEAM_FAILURE,
          data: error
        })
      })

  }
}

export function modify(data, options = {}) {

  return (dispatch, state) => {

    dispatch({
      type: MODIFY_TEAM_REQUEST
    })

    return teamHttp.modify(data, options)
      .then(response => {
        dispatch({
          type: MODIFY_TEAM_SUCCESS,
          data: response
        })
      }).catch(error => {
        dispatch({
          type: MODIFY_TEAM_FAILURE,
          data: error
        })
      })

  }
}

export function setCurrentTeam(id) {
  return {
    type: SET_CURRENT_TEAM,
    data: {
      id
    }
  }
}
