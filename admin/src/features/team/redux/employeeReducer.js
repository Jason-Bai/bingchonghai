import {
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
  REMOVE_EMPLOYEE_REQUEST,
  REMOVE_EMPLOYEE_SUCCESS,
  REMOVE_EMPLOYEE_FAILURE,
  MODIFY_EMPLOYEE_REQUEST,
  MODIFY_EMPLOYEE_SUCCESS,
  MODIFY_EMPLOYEE_FAILURE
} from './constants'


import createReducer from '../../../util/createReducer'

const initialState = {
  count: 0,
  list: [],
  error: null,
  pendding: false
}

export default createReducer(initialState, {
  [FETCH_EMPLOYEE_REQUEST](state, action) {
    return {
      ...state,
      pendding: true,
      error: null
    }
  },
  [FETCH_EMPLOYEE_SUCCESS](state, action) {
    return {
      ...state,
      pendding: false,
      error: null,
      list: action.data.data,
      count: +action.data.headers['x-content-record-total']
    }
  },
  [FETCH_EMPLOYEE_FAILURE](state, action) {
    return {
      ...state,
      pendding: false,
      error: action.data.error
    }
  },
  [ADD_EMPLOYEE_REQUEST](state, action) {
    return {
      ...state,
      pendding: true,
      error: null
    }
  },
  [ADD_EMPLOYEE_SUCCESS](state, action) {
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
  [ADD_EMPLOYEE_FAILURE](state, action) {
    return {
      ...state,
      pendding: false,
      error: action.data.error
    }
  },
  [REMOVE_EMPLOYEE_REQUEST](state, action) {
    return {
      ...state,
      pendding: true,
      error: null
    }
  },
  [REMOVE_EMPLOYEE_SUCCESS](state, action) {
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
  [REMOVE_EMPLOYEE_FAILURE](state, action) {
    return {
      ...state,
      pendding: false,
      error: action.data.error
    }
  },
  [MODIFY_EMPLOYEE_REQUEST](state, action) {
    return {
      ...state,
      pendding: true,
      error: null
    }
  },
  [MODIFY_EMPLOYEE_SUCCESS](state, action) {
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
  [MODIFY_EMPLOYEE_FAILURE](state, action) {
    return {
      ...state,
      pendding: false,
      error: action.data.error
    }
  }
})
