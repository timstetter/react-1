import * as ActionTypes from "./ActionTypes";
import { CAMPSITES } from "../shared/campsites";

export const addComment = (campsiteId, rating, author, text) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    campsiteId: campsiteId,
    rating: rating,
    author: author,
    text: text,
  },
});

//setting up async call with thunk as if the data is coming from a server

export const fetchCampsites = () => (dispatch) => {
  dispatch(campsitesLoading());

  setTimeout(() => {
    dispatch(addCampsites(CAMPSITES));
  }, 2000);
};

export const campsitesLoading = () => ({
  type: ActionTypes.CAMPSITES_LOADING,
});

export const campsitesFailed = (errMess) => ({
  type: ActionTypes.CAMPSITES_FAILED,
  payload: errMess,
});

export const addCampsites = (campsites) => ({
  type: ActionTypes.ADD_CAMPSITES,
  payload: campsites,
});