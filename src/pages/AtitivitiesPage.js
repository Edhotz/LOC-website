import React from "react";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import HeaderBar from "../components/HeaderBar";
import DataTableAtivities from "../components/DataTableAtitivities";

const AtitivitiesPage = () => {
  return (
    <>
      <DashboardMenu />
      <HeaderBar page="Atividades" />
      <DataTableAtivities />
    </>
  );
};

export default AtitivitiesPage;
