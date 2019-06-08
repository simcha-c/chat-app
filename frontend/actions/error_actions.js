export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = (errorType) => {
  return {
    type: RECEIVE_ERRORS,
    errorType,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};