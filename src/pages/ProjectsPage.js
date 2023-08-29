import React from "react";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import HeaderBar from "../components/HeaderBar";
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
