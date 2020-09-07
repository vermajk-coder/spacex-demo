import { initialState } from "../../initialState";
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LAUNCH_YEAR_FILTER":
      return {
        ...state,
        selectedFilter: {
          ...state.selectedFilter,
          launchYear: action.selectedFilter
        }
      };
    case "SUCCESS_LAUNCH":
      return {
        ...state,
        selectedFilter: {
          ...state.selectedFilter,
          successLaunch: action.selectedFilter
        }
      };
    case "SUCCESS_LANDING":
      return {
        ...state,
        selectedFilter: {
          ...state.selectedFilter,
          successLanding: action.selectedFilter
        }
      };
    default:
      return state;
  }
};
