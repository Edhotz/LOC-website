import React from "react";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import HeaderBar from "../components/HeaderBar";
import UserDataTable from "../components/UsersDataTable";
import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";

const UsersPage = () => {
  return (
    <>
      <DashBoardSearchBar />
      <UserDataTable />
    </>
  );
};

export default UsersPage;
