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

const setListChatStateToClear = (payload) => ({
  type: "LIST_CHAT_CLEAR",
  payload,
});

const setFullChatStateToSuccess = (payload) => ({
  type: "FULL_CHAT_SUCCESS",
  payload,
});

const setFullChatStateToFailed = (payload) => ({
  type: "FULL_CHAT_FAILED",
  payload,
});

const setFullChatStateToClear = (payload) => ({
  type: "FULL_CHAT_CLEAR",
  payload,
});

export const LoadListChat = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingState());
      const response = await axios.post(
        `${process.env.REACT_APP_FACEBOOK_BASE_URL}/chat/list`,
        {}
      );

      dispatch(setLoadedState());
      dispatch(setListChatStateToSuccess(response.data));
    } catch (e) {
      dispatch(setListChatStateToFailed());
    }
  };
};

export const ClearListChat = () => {
  return async (dispatch) => {
    try {
      dispatch(setListChatStateToClear());
    } catch (e) {
      dispatch(setListChatStateToFailed());
    }
  };
};

export const LoadFullChat = (facebookID) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingState());
      dispatch(setFullChatStateToClear());
      const response = await axios.post(
        `${process.env.REACT_APP_FACEBOOK_BASE_URL}/chat/loadchat`,
        { facebook_id: facebookID }
      );

      dispatch(setLoadedState());
      dispatch(setFullChatStateToSuccess(response.data));
    } catch (e) {
      dispatch(setFullChatStateToFailed());
    }
  };
};
