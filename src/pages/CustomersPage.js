import React from "react";
import DataTableCustomers from "../components/DataTableCustomers";
import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";

const CustomersPage = () => {
  return (
    <div>
      <DashBoardSearchBar title="Clientes" />
      <DataTableCustomers />
    </div>
  );
};

export default CustomersPage;
