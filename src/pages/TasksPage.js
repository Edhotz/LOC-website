import React from "react";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import HeaderBar from "../components/HeaderBar";
import DataTableTasks from "../components/DataTableTasks";
import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";

const TasksPage = () => {
  return (
    <>
      <DashBoardSearchBar />
      <DataTableTasks />
    </>
  );
};

export default TasksPage;
