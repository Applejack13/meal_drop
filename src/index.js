import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Main from "./Main";
import store from "./store/index";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);
