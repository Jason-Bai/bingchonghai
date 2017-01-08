const {
  PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE
} = require('./constants')

function session(state = {
    isFetching: false,
    user: null,
    errorMessage: null
  }, action) {
  switch (action.type) {
    case PROFILE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case PROFILE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.payload,
        errorMessage: null
      });
    case PROFILE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        user: null,
        errorMessage: action.payload
      });
    default:
      return state;
  }
}

export default session;
