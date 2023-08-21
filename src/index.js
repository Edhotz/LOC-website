import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./AuthProvider";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { BgProvider } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <BgProvider>
          <App />
        </BgProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
