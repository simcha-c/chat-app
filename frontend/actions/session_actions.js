import * as sessionApiUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './modal_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = function(user) {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

const logoutCurrentUser = function() {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const signup = user => dispatch => {
  return sessionApiUtil.signupUser(user)
    .then(res => dispatch(receiveCurrentUser(res)), ({ responseJSON }) => {
      dispatch(receiveErrors('signup', responseJSON));
    });
};

export const login = user => dispatch => {
  return sessionApiUtil.loginUser(user)
    .then(res => dispatch(receiveCurrentUser(res)));
};

export const logout = () => dispatch => {
  return sessionApiUtil.logoutUser()
    .then(() => dispatch(logoutCurrentUser()));
};
