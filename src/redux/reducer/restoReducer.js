import { ActionType } from "../constants/actionTypes";

const initialState = {
  restos: [],
  detail: [],
};
export const restoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_RESTOS:
      return { ...state, restos: payload };
    default:
      return state;
  }
};

export const detailReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_RESTO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
