const initialState = {
  socialRoute: "facebook",
  loadPage: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SOCIAL_ROUTE_FACEBOOK":
      return { ...state, socialRoute: "facebook" };
    case "SOCIAL_ROUTE_LINE":
      return { ...state, socialRoute: "line" };
    case "LOADING":
      return { ...state, loadPage: true };
    case "LOADED":
      return { ...state, loadPage: false };
    default:
      return state;
  }
};
