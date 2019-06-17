import * as sessionApiUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './error_actions';

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
      const firstErr = responseJSON[0].slice(0, 9);
      let userErr, passErr;
      if (firstErr === 'Username') {
        userErr = responseJSON[0];
      } else if (firstErr === 'Password') {
        passErr = responseJSON[0];
      } if (responseJSON.length > 1) {
        const secondErr = responseJSON[1].slice(0, 9);
        if (secondErr === 'Password') {
          passErr = responseJSON[1];
        }
      }

      errors = {
        username: userErr || '',
        password: passErr || '',
      };
      dispatch(receiveErrors('signup', errors));
    });
};

export const login = user => dispatch => {
  return sessionApiUtil.loginUser(user)
    .then(res => dispatch(receiveCurrentUser(res)), ({ responseJSON }) => {
      const errors = { login: 'Invalid Credentials' };
      dispatch(receiveErrors('login', errors));
    });
};

export const logout = () => dispatch => {
  return sessionApiUtil.logoutUser()
    .then(() => dispatch(logoutCurrentUser()));
};
