import { combineReducers } from 'redux';
import modal from './modal_reducer';
import errors from './errors_reducer';

const uiReducer = combineReducers({
  modal,
  errors,
});

export default uiReducer;