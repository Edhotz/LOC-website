import React from "react";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import HeaderBar from "../components/HeaderBar";
import DataTableCustomers from "../components/DataTableCustomers";

const CustomersPage = () => {
  return (
    <div>
      <DashboardMenu />
      <HeaderBar page="Clientes" />
      <DataTableCustomers />
    </div>
  );
};

export default CustomersPage;
