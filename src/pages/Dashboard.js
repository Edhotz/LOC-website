import React from "react";
import Dashboard from "../components/Dashboard";
import { RequireAuth } from "../AuthProvider/PrivateRoute";

const DashboardPage = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
