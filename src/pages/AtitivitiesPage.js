import React from "react";
import DataTableAtivities from "../components/DataTableAtitivities";
import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";

const AtitivitiesPage = () => {
  return (
    <>
      <DashBoardSearchBar title="Atividades" />
      <DataTableAtivities />
    </>
  );
};

export default AtitivitiesPage;
