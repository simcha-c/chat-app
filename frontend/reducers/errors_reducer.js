import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/error_actions';
import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal_actions';

const defaultState = {
    type: null,
    errors: {},
};

const errorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_ERRORS:
      const newState = {
        type: action.errorType,
        errors: action.errors,
      };
      return newState;

    case CLEAR_ERRORS:
    case CLOSE_MODAL:
    case OPEN_MODAL:
      return defaultState;

    default:
      return state;
  }
};

export default errorsReducer;