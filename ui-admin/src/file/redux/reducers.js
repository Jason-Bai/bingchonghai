const {
  FETCH_FILE_REQUEST, FETCH_FILE_SUCCESS, FETCH_FILE_FAILURE,
  ADD_FILE_REQUEST, ADD_FILE_SUCCESS, ADD_FILE_FAILURE,
  MODIFY_FILE_REQUEST, MODIFY_FILE_SUCCESS, MODIFY_FILE_FAILURE,
  REMOVE_FILE_REQUEST, REMOVE_FILE_SUCCESS, REMOVE_FILE_FAILURE
} = require('./constants');

function files(state = {
    isFetching: false,
    list: [],
    count: 0,
    errorMessage: null,
  }, action) {
  switch (action.type) {
    case FETCH_FILE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        list: action.payload.list,
        count: action.payload.count,
        errorMessage: null,
      });
    case FETCH_FILE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.payload.list,
        count: action.payload.count,
        errorMessage: null,
      });
    case FETCH_FILE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload.message,
      });
    case ADD_FILE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        errorMessage: null,
      });
    case ADD_FILE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: [
          action.payload,
          ...state.list
        ],
        count: state.count + 1,
        errorMessage: null,
      });
    case ADD_FILE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload.message,
      });
    case MODIFY_FILE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        errorMessage: null,
      });
    case MODIFY_FILE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: [
          action.payload,
          ...state.list
        ],
        errorMessage: null
      });
    case MODIFY_FILE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload.message,
      });
    case REMOVE_FILE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        errorMessage: null
      });
    case REMOVE_FILE_SUCCESS:
      const list = state.list.filter((u) => {
        return u.id !== action.payload.id;
      })
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: null,
        list
      });
    case REMOVE_FILE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload.message,
      });
    default:
      return state;
  }
}

export default files;
