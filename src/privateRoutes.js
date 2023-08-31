import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUserLocalStorage } from "./AuthProvider/util";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // Simulando uma autenticação
  let isAuthenticated = true;

  const user = getUserLocalStorage();

  if (!user) {
    isAuthenticated = false;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
