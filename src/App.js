import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import appStyle from "./App.module.css";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <Provider store={store}>
      <div className={appStyle.App}>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
