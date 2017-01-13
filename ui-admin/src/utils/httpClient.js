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

export function profile() {
  return instanceWithToken().get('/session')
}

function crud(endpoint) {
  return {
    query: (params) => {
      const config = {
        timeout: 5000,
        params
      }
      return instanceWithToken().get(`/${endpoint}`, config);
    },
    create: (data = {}) => {
      return instanceWithToken().post(`/${endpoint}`, data);
    },
    modify: (data = {}, params = {}) => {
      return instanceWithToken().patch(`/${endpoint}/${params.id}`, data);
    },
    remove: (params) => {
      return instanceWithToken().delete(`/${endpoint}/${params.id}`);
    }
  };

};
export const userHttp = crud('users');
export const categoryHttp = crud('categorys');
export const diseaseHttp = crud('diseases');
export const articleHttp = crud('articles');
