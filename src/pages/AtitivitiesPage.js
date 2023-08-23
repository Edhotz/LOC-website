import React from "react";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import HeaderBar from "../components/HeaderBar";
import DataTableAtivities from "../components/DataTableAtitivities";
import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";

const AtitivitiesPage = () => {
  return (
    <>
      <DashBoardSearchBar />
      <DataTableAtivities />
    </>
  );
};

export default AtitivitiesPage;
