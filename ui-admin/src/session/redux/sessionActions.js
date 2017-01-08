import { browserHistory } from 'react-router';
import { profile } from '../../utils/httpClient';
import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE
} from './constants';

export function fetchProfile() {
  return dispatch => {
    dispatch({
      type: PROFILE_REQUEST
    });
    return profile().then(response => {
      dispatch({
        type: PROFILE_SUCCESS,
        payload: response.data
      });
    }).catch((error) => {
      dispatch({
        type: PROFILE_FAILURE,
        payload: {
          message: error.response.data
        }
      });
    })
  }
}
