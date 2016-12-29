const {
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE
} = require('./constants')

function users(state = {
    isFetching: false,
    list: [],
    count: 0,
  }, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.data,
        count: action.data.length
      })
    case FETCH_USER_FAILURE:
      return state
    default:
      return state
  }
}

export default users
