const {
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE
} = require('./constants');

function users(state = {
    isFetching: false,
    list: [],
    count: 0,
    message: '',
  }, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        list: action.payload.list,
        count: action.payload.count,
      });
    case FETCH_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.payload.list,
        count: action.payload.count,
      });
    case FETCH_USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.payload.message,
      });
    default:
      return state;
  }
}

export default users;
