import React from "react";
import DashBoardSearchBar from "./DashboardSearchBar";
import DataTable from "../DataTableProjects";
import DataGraph from "../DataGraph";
import BottomDataTable from "../BottomDataTable";

const Dashboard = () => {
  return (
    <>
      <DashBoardSearchBar title="Dashboard" />
      <div
        style={{
          display: "flex",
        }}
      >
        <DataTable />
        <DataGraph />
      </div>
    </>
  );
};

export default Dashboard;
