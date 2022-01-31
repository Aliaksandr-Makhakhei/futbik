import React from "react";
import ReactDOM from "react-dom";
import { store } from "../src/store/index";
import { Provider } from "react-redux";
import App from "../src/navigation/App";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);