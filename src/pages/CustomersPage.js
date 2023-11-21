import React from "react";
import DataTableCustomers from "../components/DataTableCustomers";
import { ClientDataTable } from "../components/ClientTable/index";

import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";

const CustomersPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <DashBoardSearchBar title="Clientes" />

      <div
        style={{
          marginTop: "170px",
          marginLeft: "440px",
        }}
      >
        <ClientDataTable />
      </div>
    </div>
  );
};

export default CustomersPage;
