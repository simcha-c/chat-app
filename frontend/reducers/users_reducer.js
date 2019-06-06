import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    default:
      return state;
  }
};

export default usersReducer;