import {
  FETCH_SESSION_REQUEST,
  FETCH_SESSION_SUCCESS,
  FETCH_SESSION_FAILURE,
  REMOVE_SESSION_REQUEST,
  REMOVE_SESSION_SUCCESS,
  REMOVE_SESSION_FAILURE
} from './constants'

import config from '../../../config'
import { push } from 'react-router-redux'
import { apiGenerator, unauthenticatedApi } from '../../../util/api'

export function fetchSession(params) {
  return (dispatch, state) => {
    dispatch({
      type: FETCH_SESSION_REQUEST,
    })
    return apiGenerator().get('/session')
      .then(response => {
        dispatch({
          type: FETCH_SESSION_SUCCESS,
          data: response
        })

        let beforeTransition = state().routing.locationBeforeTransitions.pathname

        if (beforeTransition.startsWith('/admin')) {
          return dispatch(push(beforeTransition))
        } else {
          return dispatch(push('/admin'))
        }
      })
      .catch(error => {
        localStorage.clear()
        dispatch(push('/signin'))
      })
  }
}

export function createSession(code) {
  return (dispatch, state) => {
    const data = {
      code,
      client_id: config.open.oAuth.clientId
    }
    return unauthenticatedApi.post('/session', data)
      .then(response => {
        let expiresAt = Date.parse(new Date()) + response.data.expires_in * 1000
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('refresh_token', response.data.refresh_token)
        localStorage.setItem('expires_at', expiresAt)
        dispatch(push('/admin'))
      }).catch(error => {
        localStorage.clear()
        dispatch(push('/signin'))
      })
  }
}


export function removeSession() {
  return (dispatch, state) => {
    dispatch({
      type: REMOVE_SESSION_REQUEST,
    })
    return apiGenerator().get('/session')
      .then(response => {
        localStorage.clear()
        dispatch(push('/signin'))
      })
      .catch(error => {
        dispatch({
          type: REMOVE_SESSION_FAILURE,
          data: 'logout error'
        })
      })
  }
}
