import { ActionType } from "../constants/actionTypes";

export const setRestos = (restos) => {
  return {
    type: ActionType.SET_RESTOS,
    payload: restos,
  };
};

export const selectedResto = (resto) => {
  return {
    type: ActionType.SELECTED_RESTO,
    payload: resto,
  };
};
