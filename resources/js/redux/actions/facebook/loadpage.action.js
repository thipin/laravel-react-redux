import axios from "axios";

const setLoadingState = () => ({
  type: "LOADING",
});

const setLoadedState = () => ({
  type: "LOADED",
});

const setStateFacebook = () => ({
  type: "SOCIAL_ROUTE_FACEBOOK",
});

const setStateLine = () => ({
  type: "SOCIAL_ROUTE_LINE",
});

export const loading = (status) => {
  return (dispatch) => {
    if ((status = 1)) {
      dispatch(setLoadingState());
    } else {
      dispatch(setLoadedState());
    }
  };
};

export const setFacebook = () => {
  return (dispatch) => {
    dispatch(setStateFacebook());
  };
};

export const setLine = () => {
  return (dispatch) => {
    dispatch(setStateLine());
  };
};
