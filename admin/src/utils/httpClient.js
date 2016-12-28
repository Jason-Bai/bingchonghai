import axios from 'axios'
import config from '../config'

const instanceWithoutToken = axios.create({
    baseURL: `${config.apiRoot}`,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json'
    }
})

const instanceWithToken = axios.create({
    baseURL: `${config.apiRoot}`,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('id_token')
    }
})

export function login({ email, password }) {
  return instanceWithoutToken.post('/session', {
    email,
    password
  })
}
