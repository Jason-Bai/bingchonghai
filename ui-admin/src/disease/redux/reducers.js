import _ from 'lodash';
const {
  FETCH_DISEASE_REQUEST, FETCH_DISEASE_SUCCESS, FETCH_DISEASE_FAILURE,
  ADD_DISEASE_REQUEST, ADD_DISEASE_SUCCESS, ADD_DISEASE_FAILURE,
  MODIFY_DISEASE_REQUEST, MODIFY_DISEASE_SUCCESS, MODIFY_DISEASE_FAILURE,
  REMOVE_DISEASE_REQUEST, REMOVE_DISEASE_SUCCESS, REMOVE_DISEASE_FAILURE
} = require('./constants');

function diseases(state = {
    isFetching: false,
    list: [],
    count: 0,
    errMessage: '',
  }, action) {
  switch (action.type) {
    case FETCH_DISEASE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        list: action.payload.list,
        count: action.payload.count,
      });
    case FETCH_DISEASE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.payload.list,
        count: action.payload.count,
      });
    case FETCH_DISEASE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errMessage: action.payload.message,
      });
    case ADD_DISEASE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ADD_DISEASE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: [
          action.payload,
          ...state.list
        ],
        count: state.count + 1,
      });
    case ADD_DISEASE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errMessage: action.payload.message,
      });
    case MODIFY_DISEASE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case MODIFY_DISEASE_SUCCESS:
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
    case MODIFY_DISEASE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errMessage: action.payload.message,
      });
    case REMOVE_DISEASE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REMOVE_DISEASE_SUCCESS:
      let removedList = state.list.filter((c) => {
        return c.id !== action.payload.id;
      })
      return Object.assign({}, state, {
        isFetching: false,
        list: removedList
      });
    case REMOVE_DISEASE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errMessage: action.payload.message,
      });
    default:
      return state;
  }
}

export default diseases;
