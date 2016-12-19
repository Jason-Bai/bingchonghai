import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  REMOVE_USER_REQUEST,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILURE,
  MODIFY_USER_REQUEST,
  MODIFY_USER_SUCCESS,
  MODIFY_USER_FAILURE
} from './constants'

import createReducer from '../../../util/createReducer'


const initialState = {
  count: 0,
  list: [],
  fetchError: null,
  fetchPending: false
}

export default createReducer(initialState, {
  [FETCH_USER_REQUEST](state, action) {
    return {
      ...state,
      fetchPending: true,
      fetchError: null
    }
  },
  [FETCH_USER_SUCCESS](state, action) {
    return {
      ...state,
      fetchPending: false,
      fetchError: null,
      list: action.data.data,
      count: +action.data.headers['x-content-record-total']
    }
  },
  [FETCH_USER_FAILURE](state, action) {
    return {
      ...state,
      fetchPending: false,
      fetchError: action.data.error
    }
  },
  [ADD_USER_REQUEST](state, action) {
    return {
      ...state,
      fetchPending: true,
      fetchError: null
    }
  },
  [ADD_USER_SUCCESS](state, action) {
    const list = [
      action.data.data,
      ...state.list
    ]
    return {
      ...state,
      fetchPending: false,
      fetchError: null,
      list: list,
      count: state.count + 1
    }
  },
  [ADD_USER_FAILURE](state, action) {
    return {
      ...state,
      fetchPending: false,
      fetchError: action.data.error
    }
  },
  [REMOVE_USER_REQUEST](state, action) {
    return {
      ...state,
      fetchPending: true,
      fetchError: null
    }
  },
  [REMOVE_USER_SUCCESS](state, action) {
    const list = _.filter(state.list, e => {
      return e.id !== action.data.id
    })
    return {
      ...state,
      fetchPending: false,
      fetchError: null,
      list: list,
      count: state.count - 1
    }
  },
  [REMOVE_USER_FAILURE](state, action) {
    return {
      ...state,
      fetchPending: false,
      fetchError: action.data.error
    }
  },
  [MODIFY_USER_REQUEST](state, action) {
    return {
      ...state,
      fetchPending: true,
      fetchError: null,
    }
  },
  [MODIFY_USER_SUCCESS](state, action) {
    const list = _.each(state.list, e => {
      if(e.id == action.data.data.id) {
        e = action.data.data
      }
    })
    return {
      ...state,
      fetchPending: false,
      fetchError: null,
      list: list
    }
  },
  [MODIFY_USER_FAILURE](state, action) {
    return {
      ...state,
      fetchPending: false,
      fetchError: action.data.error
    }
  },
})
