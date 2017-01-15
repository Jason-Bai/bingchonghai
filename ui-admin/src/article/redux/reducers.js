import _ from 'lodash';
const {
  FETCH_ARTICLE_REQUEST, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_FAILURE,
  ADD_ARTICLE_REQUEST, ADD_ARTICLE_SUCCESS, ADD_ARTICLE_FAILURE,
  MODIFY_ARTICLE_REQUEST, MODIFY_ARTICLE_SUCCESS, MODIFY_ARTICLE_FAILURE,
  REMOVE_ARTICLE_REQUEST, REMOVE_ARTICLE_SUCCESS, REMOVE_ARTICLE_FAILURE,
  DETAIL_ARTICLE_REQUEST, DETAIL_ARTICLE_SUCCESS, DETAIL_ARTICLE_FAILURE
} = require('./constants');

function articles(state = {
    isFetching: false,
    list: [],
    count: 0,
    errMessage: '',
    current: null,
  }, action) {
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        list: action.payload.list,
        count: action.payload.count,
      });
    case FETCH_ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.payload.list,
        count: action.payload.count,
      });
    case FETCH_ARTICLE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errMessage: action.payload.message,
      });
    case ADD_ARTICLE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ADD_ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: [
          action.payload,
          ...state.list
        ],
        count: state.count + 1,
      });
    case ADD_ARTICLE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errMessage: action.payload.message,
      });
    case MODIFY_ARTICLE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case MODIFY_ARTICLE_SUCCESS:
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
    case MODIFY_ARTICLE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errMessage: action.payload.message,
      });
    case REMOVE_ARTICLE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REMOVE_ARTICLE_SUCCESS:
      let removedList = state.list.filter((c) => {
        return c.id !== action.payload.id;
      })
      return Object.assign({}, state, {
        isFetching: false,
        list: removedList
      });
    case REMOVE_ARTICLE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errMessage: action.payload.message,
      });
    case DETAIL_ARTICLE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case DETAIL_ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        current: action.payload
      });
    case DETAIL_ARTICLE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        current: null,
        errMessage: action.payload.message,
      });
    default:
      return state;
  }
}

export default articles;
