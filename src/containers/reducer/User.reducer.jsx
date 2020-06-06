const initialState = {
  auth: true,
};

const actions = {
  updateUser: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
};

function reducer(state, action) {
  return actions[action.type](state, action);
}

export { initialState, reducer };
