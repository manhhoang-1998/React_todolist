import { SET_INPUT, ADD_INPUT, REMOVE_INPUT } from "./constant";

export const setInput = (payload) => ({
  type: SET_INPUT,
  payload,
});
export const addInput = (payload) => ({
  type: ADD_INPUT,
  payload,
});
export const removeInput = (payload) => ({
  type: REMOVE_INPUT,
  payload,
});
