import _ from 'lodash';
const {
  FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE,
  ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE,
  MODIFY_CATEGORY_REQUEST, MODIFY_CATEGORY_SUCCESS, MODIFY_CATEGORY_FAILURE,
  REMOVE_CATEGORY_REQUEST, REMOVE_CATEGORY_SUCCESS, REMOVE_CATEGORY_FAILURE
} = require('./constants');

function categories(state = {
    isFetching: false,
    list: [],
    count: 0,
    message: '',
  }, action) {
  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        list: action.payload.list,
        count: action.payload.count,
      });
    case FETCH_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.payload.list,
        count: action.payload.count,
      });
    case FETCH_CATEGORY_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.payload.message,
      });
    case ADD_CATEGORY_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ADD_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: [
          action.payload,
          ...state.list
        ],
        count: state.count + 1,
      });
    case ADD_CATEGORY_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.payload.message,
      });
    case MODIFY_CATEGORY_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case MODIFY_CATEGORY_SUCCESS:
      let modifiedList= [];
      _.each(state.list, (c) => {
        if (c.id === action.payload.id) {
          modifiedList.push(action.payload);
        } else {
          modifiedList.push(c);
        }
      })
      return Object.assign({}, state, {
        isFetching: false,
        list: modifiedList
      });
    case MODIFY_CATEGORY_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.payload.message,
      });
    case REMOVE_CATEGORY_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REMOVE_CATEGORY_SUCCESS:
      let removedList = state.list.filter((c) => {
        return c.id !== action.payload.id;
      })
      return Object.assign({}, state, {
        isFetching: false,
        list: removedList
      });
    case REMOVE_CATEGORY_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.payload.message,
      });
    default:
      return state;
  }
}

export default categories;
