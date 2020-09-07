import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const middlewares = [thunk];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;

export const configureStore = preloadedState => {
  try {
    return createStore(
      reducers,
      preloadedState,
      applyMiddleware(...middlewares)
    );
  } catch (ex) {
    console.log("ex::" + ex);
  }
};
