import React from "react";
import DashboardMenu from "./DashboardMenu";
import DashBoardSearchBar from "./DashboardSearchBar";
import DataTable from "../DataTableProjects";
import DataGraph from "../DataGraph";
import BottomDataTable from "../BottomDataTable";

const Dashboard = () => {
  return (
    <>
      <DashboardMenu />
      <DashBoardSearchBar />
      <DataTable />
      <DataGraph />
      <BottomDataTable />
    </>
  );
};

export default Dashboard;
