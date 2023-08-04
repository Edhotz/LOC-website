import React from "react";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import HeaderBar from "../components/HeaderBar";
import DataTableProjects from "../components/DataTableProjects-page";

const ProjectsPage = () => {
  return (
    <>
      <DashboardMenu />
      <HeaderBar page="Projetos" />
      <DataTableProjects />
    </>
  );
};

export default ProjectsPage;
