export const CALCULATOR = "CALCULATOR";

export const setStateNumber = (payload) => ({
  type: CALCULATOR,
  payload,
});

export const setNumber = (count) => {
  return (dispatch) => {
    dispatch(setStateNumber(count));
  }
};
