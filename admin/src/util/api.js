import axios from 'axios'
import config from '../config'

let httpClient = null


export const unauthenticatedApi = axios.create({
  baseURL: config.apiRoot,
  timeout: 1000000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

export function apiGenerator() {

  const access_token = localStorage.getItem('access_token')

  if (!httpClient) {
      httpClient = axios.create({
        baseURL: config.apiRoot,
        timeout: 1000000,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': access_token,
        }
      })
  }

  return httpClient

}

export const teamHttp = {
  list: (params = {}) => {
    let options = {
      method: 'get',
      params
    }
    return apiGenerator()('/teams', options)
  },
  create: (data) => apiGenerator()(`/teams`, { method: 'post', data}),
  modify: (data, options) => apiGenerator()(`/teams/${options.id}`, {method: 'patch', data}),
  remove: (options) => apiGenerator()(`/teams/${options.id}`, {method: 'delete'}),
  detail: (data, options) => apiGenerator()(`/teams/${options.id}`, {method: 'get', data})
}


export const userHttp = {
  list: (params = {}) => {
    let options  = {
      method: 'get',
      params
    }
    return apiGenerator()('/users', options)
  },
  create: (data) => apiGenerator()(`/users`, { method: 'post', data}),
  modify: (data, options) => apiGenerator()(`/users/${options.id}`, {method: 'patch', data}),
  remove: (options) => apiGenerator()(`/users/${options.id}`, {method: 'delete'})
}

export const employeeHttp = {
  list: (params = {}, options = {}) => {
    let _options  = {
      method: 'get',
      params
    }
    return apiGenerator()(`/teams/${options.teamId}/employees`, _options)
  },
  create: (data, options) => apiGenerator()(`/teams/${options.teamId}/employees`, { method: 'post', data}),
  modify: (data, options) => apiGenerator()(`/employees/${options.id}`, {method: 'patch', data}),
  remove: (options) => apiGenerator()(`/employees/${options.id}`, {method: 'DELETE'})
}

export const keywordHttp = {
  list: (params = {}, options = {}) => {
    let _options  = {
      method: 'get',
      params
    }
    return apiGenerator()(`/teams/${options.teamId}/keywords`, _options)
  },
  create: (data, options) => apiGenerator()(`/teams/${options.teamId}/keywords`, { method: 'post', data}),
  modify: (data, options) => apiGenerator()(`/keywords/${options.id}`, {method: 'patch', data}),
  remove: (options) => apiGenerator()(`/keywords/${options.id}`, {method: 'DELETE'})
}

export const splitorHttp = {
  list: (params = {}, options = {}) => {
    let _options  = {
      method: 'get',
      params
    }
    return apiGenerator()(`/teams/${options.teamId}/splitors`, _options)
  },
  create: (data, options) => apiGenerator()(`teams/${options.teamId}/splitors`, { method: 'post', data}),
  modify: (data, options) => apiGenerator()(`/splitors/${options.id}`, {method: 'patch', data}),
  remove: (options) => apiGenerator()(`/splitors/${options.id}`, {method: 'PATCH', data})
}

export const ruleHttp = {
  list: (params = {}, options = {}) => {
    let _options  = {
      method: 'get',
      params
    }
    return apiGenerator()(`/teams/${options.teamId}/rules`, _options)
  },
  create: (data, options) => apiGenerator()(`/teams/${options.teamId}/rules`, { method: 'post', data}),
  modify: (data, options) => apiGenerator()(`/rules/${options.id}`, {method: 'patch', data}),
  remove: (options) => apiGenerator()(`/rules/${options.id}`, {method: 'delete'})
}

export const queryHttp = {
  list: (params = {}, options = {}) => {
    let _options  = {
      method: 'get',
      params
    }
    return apiGenerator()(`/teams/${options.teamId}/querys`, _options)
  },
  create: (data, options) => apiGenerator()(`/teams/${options.teamId}/querys`, { method: 'post', data}),
  modify: (data, options) => apiGenerator()(`/querys/${options.id}`, {method: 'patch', data}),
  remove: (options) => apiGenerator()(`/querys/${options.id}`, {method: 'delete'})
}

export const countHttp = {
  list: (params = {}, options = {}) => {
    let _options  = {
      method: 'get',
      params
    }
    return apiGenerator()(`/teams/${options.teamId}/counts`, _options)
  },
  create: (data, options) => apiGenerator()(`/teams/${options.teamId}/counts`, { method: 'post', data}),
  modify: (data, options) => apiGenerator()(`/counts/${options.id}`, {method: 'patch', data}),
  remove: (options) => apiGenerator()(`/counts/${options.id}`, {method: 'delete'})
}

export const rawHttp = {
  list: (params = {}, options = {}) => {
    let _options  = {
      method: 'get',
      params
    }
    return apiGenerator()(`/querys/${options.queryId}/raws`, _options)
  }
}
