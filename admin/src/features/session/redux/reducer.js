import {
  FETCH_SESSION_REQUEST,
  FETCH_SESSION_SUCCESS,
  FETCH_SESSION_FAILURE,
  REMOVE_SESSION_REQUEST,
  REMOVE_SESSION_SUCCESS,
  REMOVE_SESSION_FAILURE
} from './constants'

import createReducer from '../../../util/createReducer'

const initialState = {
  session: null,
  error: null,
  pending: false,
}

export default createReducer(initialState, {
  [FETCH_SESSION_REQUEST](state, action) {
    return {
      ...state,
      pending: true,
      error: null,
    }
  },
  [FETCH_SESSION_SUCCESS](state, action) {
    return {
      ...state,
      pending: false,
      error: null,
      session: action.data.data,
    }
  },
  [FETCH_SESSION_FAILURE](state, action) {
    return {
      ...state,
      pending: false,
      error: action.data.error,
    }
  },
  [REMOVE_SESSION_REQUEST](state, action) {
    return {
      ...state,
      pending: true,
      error: null
    }
  },
  [REMOVE_SESSION_SUCCESS](state, action) {
    return {
      ...state,
      session: null,
      pending: false,
      error: null
    }
  },
   [REMOVE_SESSION_FAILURE](state, action) {
     return {
       ...state,
       pending: false,
       error: action.data.error
     }
   }
})
