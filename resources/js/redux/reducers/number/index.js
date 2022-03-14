export const CALCULATOR = "CALCULATOR";

const initialState = {
  count: 1,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CALCULATOR:
      return { ...state, count: state.count + payload };

    default:
      return state;
  }
};
