const initialState = {
  listChat: [],
  urlNext: "",
  isError: false,
  dataCustomer: {},
  dataChat: {},
  MID: {},
  pageID: "",
  facebookID: "",
  isFullChat: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LIST_CHAT_SUCCESS":
      return {
        ...state,
        listChat: payload.list,
        urlNext: payload.url_next,
        isError: false,
      };
    case "LIST_CHAT_FAILED":
      return {
        ...state,
        listChat: [],
        urlNext: "",
        isError: true,
      };
    case "LIST_CHAT_CLEAR":
      return {
        ...state,
        listChat: [],
        urlNext: "",
        isError: false,
      };
    case "FULL_CHAT_SUCCESS":
      return {
        ...state,
        dataCustomer: payload.customer,
        dataChat: payload.chat,
        MID: payload.m_id,
        pageID: payload.page_id,
        facebookID: payload.facebook_id,
        isFullChat: true,
      };
    case "FULL_CHAT_FAILED":
      return {
        ...state,
        dataCustomer: {},
        dataChat: {},
        MID: {},
        pageID: "",
        facebookID: "",
        isFullChat: false,
      };
    case "FULL_CHAT_CLEAR":
      return {
        ...state,
        dataCustomer: {},
        dataChat: {},
        MID: {},
        pageID: "",
        facebookID: "",
        isFullChat: false,
      };
    default:
      return state;
  }
};
