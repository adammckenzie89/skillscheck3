import { createStore } from "redux";

const initialState = {
  homes: []
};

export const ADD_HOUSE = "ADD_HOUSE";
export const DELETE_HOUSE = "DELETE_HOUSE";

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HOUSE:
      return {
        ...state,
        homes: [...state.homes, action.payload]
      };
    case DELETE_HOUSE:
      let deleteHome = [...state.homes];
      deleteHome.splice(action.payload, 1);
      return {
        ...state,
        homes: deleteHome
      };
    default:
      return state;
  }
}

export default createStore(reducer);
