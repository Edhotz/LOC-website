import React from "react";
import Dashboard from "../components/Dashboard";
import { RequireAuth } from "../AuthProvider/RequireAuth";

const DashboardPage = () => {
  return (
    <RequireAuth>
      <Dashboard />
    </RequireAuth>
  );
};

export default DashboardPage;
