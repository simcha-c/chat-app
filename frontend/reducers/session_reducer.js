const defaultState = { currentUserId: null };

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {

    default:
      return state;
  }
};

export default sessionReducer;