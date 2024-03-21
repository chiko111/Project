import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./components/store";

import "./normalize.css";
import "./index.css";
import App from "./App";

//!TODO input with add button  with delete button
//!TODO if reload page to store data is not cleared

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
