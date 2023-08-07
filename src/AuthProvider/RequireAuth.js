import React from "react";
import { useAuth } from "./useAuth";
import { LoginPage } from "../pages/Login";

export const RequireAuth = ({ children }) => {
  const user = useAuth();

  if (!user) {
    return <LoginPage />;
  }

  return children;
};
