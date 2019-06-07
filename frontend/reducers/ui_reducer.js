import { combineReducers } from 'redux';
import modal from './modal_reducer';
// import { merge } from 'lodash';

const uiReducer = combineReducers({
  modal
});

export default uiReducer;