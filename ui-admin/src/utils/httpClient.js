import axios from 'axios';
import config from '../config';

const instanceWithoutToken = axios.create({
  baseURL: `${config.apiRoot}`,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});

function instanceWithToken() {

  const access_token = localStorage.getItem('x_access_token');

  return axios.create({
    baseURL: `${config.apiRoot}`,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': access_token
    }
  });

}

export function login({ email, password }) {
  return instanceWithoutToken.post('/session', {
    email,
    password
  })
};

export function logout() {
  return instanceWithToken().delete('/session')
};

export const userHttp = {
  query: (params) => {
    const config = {
      timeout: 5000,
      params
    }
    return instanceWithToken().get('/users', config);
  },
  create: (data = {}) => {
    return instanceWithToken().post('/users', data);
  },
  modify: (data = {}, params = {}) => {
    return instanceWithToken().patch(`/users/${params.id}`, data);
  },
  remove: (params) => {
    return instanceWithToken().delete(`/users/${params.id}`);
  }
};
