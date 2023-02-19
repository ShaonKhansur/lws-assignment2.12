import { ADD_FLIGHT, REMOVE_FLIGHT } from "./actionTypes";

const flightsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FLIGHT: {
      const newState = state.slice();
      newState.push(action.payload);
      return newState;
    }
    case REMOVE_FLIGHT: {
      const newState = state.slice();
      return newState.filter((flight) => flight.id !== action.payload.id);
    }
    default:
      return state;
  }
};

export default flightsReducer;
