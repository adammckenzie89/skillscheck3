import { createStore } from "redux";

const initialState = {
  houses: []
};

export const GET_HOUSES = "GET_HOUSES";

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOUSES:
      return {
        ...state,
        houses: action.payload
      };
    default:
      return state;
  }
}

export default createStore(reducer);
