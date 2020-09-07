import { initialState } from "../../initialState";
export const launchDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return {
        ...state,
        launchData: action.data
      };
    default:
      return state;
  }
};
