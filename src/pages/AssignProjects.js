import React from "react";
import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";
import ProcessDataTable from "../components/ProcessDataTable";
import AssignProjectDataTable from "../components/AssignProjectDataTable";

const assignProject = () => {
  return (
    <>
      <DashBoardSearchBar title="Atribuir Projetos" />
      <AssignProjectDataTable />
    </>
  );
};

export default assignProject;
