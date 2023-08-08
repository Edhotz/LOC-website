import React from "react";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import HeaderBar from "../components/HeaderBar";
import UserDataTable from "../components/UsersDataTable";

const UsersPage = () => {
  return (
    <>
      <DashboardMenu />
      <HeaderBar page="Usuarios" />
      <UserDataTable />
    </>
  );
};

export default UsersPage;