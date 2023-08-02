import React from "react";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import HeaderBar from "../components/HeaderBar";
import DataTable from "../components/UsersDataTable";

const UsersPage = () => {
  return (
    <>
      <DashboardMenu />
      <HeaderBar />
      <DataTable />
    </>
  );
};

export default UsersPage;
