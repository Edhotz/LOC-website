import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";
import { API } from "../../services/api";

export const Graph = () => {
  const [projectsData, setProjectsData] = useState(null);
  const [activitiesData, setActivitiesData] = useState(null);
  const [tasksData, setTasksData] = useState(null);
  const [customerData, setCustomerData] = useState(null);

  const handleFecthProjects = async () => {
    const { data } = await API.get("/proceedings");

    const numberOfItems = data.length;

    setProjectsData(numberOfItems);
  };

  const handleFecthActivities = async () => {
    const { data } = await API.get("/proceedings");

    const numberOfItems = data.length;

    setActivitiesData(numberOfItems);
  };

  const handleFecthTasks = async () => {
    const { data } = await API.get("/clients");

    const numberOfItems = data.length;

    setTasksData(numberOfItems);
  };

  const handleFecthCustomers = async () => {
    const { data } = await API.get("/phases");

    const numberOfItems = data.length;

    setCustomerData(numberOfItems);
  };

  useEffect(() => {
    handleFecthProjects();
    handleFecthActivities();
    handleFecthCustomers();
    handleFecthTasks();
  }, []);

  const data = [
    {
      type: "Processos",
      sales: projectsData,
    },
    {
      type: "Clientes",
      sales: activitiesData,
    },
    {
      type: "Fases",
      sales: tasksData,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "bottom",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Totais",
      },
      sales: {
        alias: "Itens",
      },
    },
  };
  return <Column {...config} />;
};
