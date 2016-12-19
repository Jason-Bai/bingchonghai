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
  DETAIL_TEAM_REQUEST,
  DETAIL_TEAM_SUCCESS,
  DETAIL_TEAM_FAILURE,
  SET_CURRENT_TEAM
} from './constants'


import createReducer from '../../../util/createReducer'

const initialState = {
  current: null,
  count: 0,
  list: [],
  error: null,
  pendding: false
}

export default createReducer(initialState, {
  [FETCH_TEAM_REQUEST](state, action) {
    return {
      ...state,
      pendding: true,
      error: null
    }
  },
  [FETCH_TEAM_SUCCESS](state, action) {
    return {
      ...state,
      pendding: false,
      error: null,
      list: action.data.data,
      count: +action.data.headers['x-content-record-total']
    }
  },
  [FETCH_TEAM_FAILURE](state, action) {
    return {
      ...state,
      pendding: false,
      error: action.data.error
    }
  },
  [ADD_TEAM_REQUEST](state, action) {
    return {
      ...state,
      pendding: true,
      error: null
    }
  },
  [ADD_TEAM_SUCCESS](state, action) {
    const list = [
      action.data.data,
      ...state.list
    ]
    return {
      ...state,
      pendding: false,
      error: null,
      list: list,
      count: state.count + 1
    }
  },
  [ADD_TEAM_FAILURE](state, action) {
    return {
      ...state,
      pendding: false,
      error: action.data.error
    }
  },
  [REMOVE_TEAM_REQUEST](state, action) {
    return {
      ...state,
      pendding: true,
      error: null
    }
  },
  [REMOVE_TEAM_SUCCESS](state, action) {
    const list = _.filter(state.list, t => {
      return t.id !== action.data.id
    })
    return {
      ...state,
      pendding: false,
      error: null,
      list: list,
      count: state.count - 1
    }
  },
  [REMOVE_TEAM_FAILURE](state, action) {
    return {
      ...state,
      pendding: false,
      error: action.data.error
    }
  },
  [MODIFY_TEAM_REQUEST](state, action) {
    return {
      ...state,
      pendding: true,
      error: null
    }
  },
  [MODIFY_TEAM_SUCCESS](state, action) {
    const list = _.each(state.list, e => {
      if(e.id == action.data.data.id) {
        e = action.data.data
      }
    })
    return {
      ...state,
      pendding: false,
      error: null,
      list: list
    }
  },
  [MODIFY_TEAM_FAILURE](state, action) {
    return {
      ...state,
      pendding: false,
      error: action.data.error
    }
  },
  [SET_CURRENT_TEAM](state, action) {
    return {
      ...state,
      current: action.data.id,
      list: action.data.teams
    }
  }
})
