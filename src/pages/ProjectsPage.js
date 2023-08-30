import React from "react";
import DataTableProjects from "../components/DataTableProjects-page";
import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";

const ProjectsPage = () => {
  return (
    <>
      <DashBoardSearchBar title="Projetos" />
      <DataTableProjects />
    </>
  );
};

export default ProjectsPage;
