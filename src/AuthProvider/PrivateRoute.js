import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";
import DashboardPage from "../pages/Dashboard";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  const user = useAuth();

  return (
    <Route {...rest}>
      {user ? (
        <DashboardPage />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
