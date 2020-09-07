import { combineReducers } from "redux";
import { filterReducer } from "./filter";
import { loadingReducer } from "./loader-state";
import { launchDetailReducer } from "./launchDetails";

export default combineReducers({
  filterReducer,
  loadingReducer,
  launchDetailReducer
});
