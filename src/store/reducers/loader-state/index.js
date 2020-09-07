import { initialState } from "../../initialState";
export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loadingState: action.loading
      };
    default:
      return state;
  }
};
