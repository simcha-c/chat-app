export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = (errorType,  errors) => {
  return {
    type: RECEIVE_ERRORS,
    errorType,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};