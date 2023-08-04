import React from "react";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import HeaderBar from "../components/HeaderBar";
import DataTableTasks from "../components/DataTableTasks";

const TasksPage = () => {
  return (
    <>
      <DashboardMenu />
      <HeaderBar page="Tarefas" />
      <DataTableTasks />
    </>
  );
};

export default TasksPage;
