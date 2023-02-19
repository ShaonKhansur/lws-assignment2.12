import { ADD_FLIGHT, REMOVE_FLIGHT } from "./actionTypes";

export const addFlight = (data) => {
  return {
    type: ADD_FLIGHT,
    payload: data,
  };
};

export const removeFlight = (data) => {
  return {
    type: REMOVE_FLIGHT,
    payload: data,
  };
  
};
