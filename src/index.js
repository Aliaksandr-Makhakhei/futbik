import React from "react";
import ReactDOM from "react-dom";
import store, {persistor} from "../src/store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "../src/navigation/App";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

//в лоадинг персист гэйт можно передать компонент спинера