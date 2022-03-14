import axios from "axios";

const setLoadingState = () => ({
  type: "LOADING",
});

const setLoadedState = () => ({
  type: "LOADED",
});

const setListChatStateToSuccess = (payload) => ({
  type: "LIST_CHAT_SUCCESS",
  payload,
});

const setListChatStateToFailed = (payload) => ({
  type: "LIST_CHAT_FAILED",
  payload,
});

export const LoadListChat = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingState());
      const response = await axios.post(
        `${process.env.REACT_APP_LINE_BASE_URL}/chat/list`,
        {}
      );

      dispatch(setLoadedState());
      dispatch(setListChatStateToSuccess(response.data));
    } catch (e) {
      dispatch(setListChatStateToFailed());
    }
  };
};




