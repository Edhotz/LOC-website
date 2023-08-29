import React from "react";
import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";
import ProcessDataTable from "../components/ProcessDataTable";

const legalization = () => {
  return (
    <>
      <DashBoardSearchBar title="Legalização e Processos" />
      <ProcessDataTable />
    </>
  );
};

export default legalization;
