import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import store from "./store/store";
import { Provider } from "react-redux";
import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
