import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { GlobalStyle } from "./styles/global.js";
import { HashRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Toaster />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
