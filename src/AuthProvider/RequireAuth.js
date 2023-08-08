import React from "react";
import { useAuth } from "./useAuth";
import { LoginPage } from "../pages/Login";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

export const RequireAuth = ({ children, ...rest }) => {
  const user = useAuth();

  if (!user) {
    return <LoginPage />;
  }

  return (
    <Route
      {...rest}
      render={() => {
        return user === true ? children : <Redirect to="login" />;
      }}
    ></Route>
  );
};
