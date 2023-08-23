import React from "react";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import HeaderBar from "../components/HeaderBar";
import DataTableCustomers from "../components/DataTableCustomers";
import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";

const CustomersPage = () => {
  return (
    <div>
      <DashBoardSearchBar />
      <DataTableCustomers />
    </div>
  );
};

export default CustomersPage;
