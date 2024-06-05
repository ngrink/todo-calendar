import React from "react";
import ReactDOM from "react-dom/client";

import { StoreContext, store } from "./config/mobx.ts";
import App from "./App.tsx";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
);
