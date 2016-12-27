import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from './constants'
import { browserHistory } from 'react-router'
import { login } from '../lib/httpClient'

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser(creds) {
  return dispatch => {
    dispatch(requestLogin(creds))
    return login(creds).then(response => {
      if (!response || !response.data) {
        dispatch(loginError(response.data.message))
        return Promise.reject(response.data)
      } else {
        localStorage.setItem('x_access_token', response.data.auth.token)
        localStorage.setItem('refresh_token', response.data.auth.refreshToken)
        localStorage.setItem('expiredAt', response.data.auth.expiredAt)
        dispatch(receiveLogin(response.data))
        browserHistory.push('/admin')
      }
    }).catch(err => console.log("Error: ", err))
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}
