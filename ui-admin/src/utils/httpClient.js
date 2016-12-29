import axios from 'axios';
import config from '../config';

const instanceWithoutToken = axios.create({
  baseURL: `${config.apiRoot}`,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});

const instanceWithToken = axios.create({
  baseURL: `${config.apiRoot}`,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': localStorage.getItem('x_access_token')
  }
});

export function login({ email, password }) {
  return instanceWithoutToken.post('/session', {
    email,
    password
  })
};

export const userHttp = {
  list: (params) => {
    const config = {
      timeout: 5000,
      params
    }
    return instanceWithToken.get('/users', config);
  }
};
