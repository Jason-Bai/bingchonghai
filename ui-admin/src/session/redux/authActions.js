import { browserHistory } from 'react-router';
import { login, logout } from '../../utils/httpClient';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './constants';

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user,
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

export function loginUser(creds) {
  return dispatch => {
    dispatch(requestLogin(creds));
    return login(creds).then(response => {
      if (!response || !response.data) {
        dispatch(loginError(response.data.message));
        Promise.reject(response.data);
      } else {
        localStorage.setItem('x_access_token', response.data.auth.token);
        localStorage.setItem('refresh_token', response.data.auth.refreshToken);
        localStorage.setItem('expiredAt', response.data.auth.expiredAt);
        dispatch(receiveLogin(response.data));
        browserHistory.push('/admin/dashboard');
      }
    }).catch(err => console.log('Error: ', err))
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  };
}

// Logs the user out
function logoutError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    return logout().then(response => {
      if (!response || !response.data) {
        dispatch(logoutError(response.data.message));
        browserHistory.push('/admin/login');
      } else {
        localStorage.clear();
        dispatch(receiveLogout());
        browserHistory.push('/admin/login');
      }
    })
  }
}
