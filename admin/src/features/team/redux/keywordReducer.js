import {
  FETCH_KEYWORD_REQUEST,
  FETCH_KEYWORD_SUCCESS,
  FETCH_KEYWORD_FAILURE,
  ADD_KEYWORD_REQUEST,
  ADD_KEYWORD_SUCCESS,
  ADD_KEYWORD_FAILURE,
  REMOVE_KEYWORD_REQUEST,
  REMOVE_KEYWORD_SUCCESS,
  REMOVE_KEYWORD_FAILURE,
  MODIFY_KEYWORD_REQUEST,
  MODIFY_KEYWORD_SUCCESS,
  MODIFY_KEYWORD_FAILURE
} from './constants'


import createReducer from '../../../util/createReducer'

const initialState = {
  count: 0,
  list: [],
  error: null,
  pendding: false
}

export default createReducer(initialState, {
  [FETCH_KEYWORD_REQUEST](state, action) {
    return {
      ...state,
      pendding: true,
      error: null
    }
  },
  [FETCH_KEYWORD_SUCCESS](state, action) {
    return {
      ...state,
      pendding: false,
      error: null,
      list: action.data.data,
      count: +action.data.headers['x-content-record-total']
    }
  },
  [FETCH_KEYWORD_FAILURE](state, action) {
    return {
      ...state,
      pendding: false,
      error: action.data.response.data.code
    }
  },
  [ADD_KEYWORD_REQUEST](state, action) {
    return {
      ...state,
      pendding: true,
      error: null
    }
  },
  [ADD_KEYWORD_SUCCESS](state, action) {
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
  [ADD_KEYWORD_FAILURE](state, action) {
    return {
      ...state,
      pendding: false,
      error: action.data.response.data.code
    }
  },
  [REMOVE_KEYWORD_REQUEST](state, action) {
    return {
      ...state,
      pendding: true,
      error: null
    }
  },
  [REMOVE_KEYWORD_SUCCESS](state, action) {
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
  [REMOVE_KEYWORD_FAILURE](state, action) {
    return {
      ...state,
      pendding: false,
      error: action.data.response.data.code
    }
  },
  [MODIFY_KEYWORD_REQUEST](state, action) {
    return {
      ...state,
      pendding: true,
      error: null
    }
  },
  [MODIFY_KEYWORD_SUCCESS](state, action) {
    const list = _.each(state.list, e => {
      if(e.id == action.data.data.id) {
        e = action.data.data
      }
    })
    return {
      ...state,
      pendding: false,
      error: null,
      list: list,
      count: state.count
    }
  },
  [MODIFY_KEYWORD_FAILURE](state, action) {
    return {
      ...state,
      pendding: false,
      error: action.data.response.data.code
    }
  }
})
