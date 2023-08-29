import React from "react";
import UserDataTable from "../components/UsersDataTable";
import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";

const UsersPage = () => {
  return (
    <>
      <DashBoardSearchBar title="Usuarios" />
      <UserDataTable />
    </>
  );
};

export default UsersPage;
