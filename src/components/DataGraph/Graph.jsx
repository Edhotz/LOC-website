import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";
import { API } from "../../services/api";
import { number } from "zod";

export const Graph = () => {
  const [projectsData, setProjectsData] = useState(null);
  const [activitiesData, setActivitiesData] = useState(null);
  const [tasksData, setTasksData] = useState(null);
  const [customerData, setCustomerData] = useState(null);

  const handleFecthProjects = async () => {
    const { data } = await API.get("/projects");

    const numberOfItems = data.length;

    setProjectsData(numberOfItems);
  };

  const handleFecthActivities = async () => {
    const { data } = await API.get("/activities");

    const numberOfItems = data.length;

    setActivitiesData(numberOfItems);
  };

  const handleFecthTasks = async () => {
    const { data } = await API.get("/tasks");

    const numberOfItems = data.length;

    setTasksData(numberOfItems);
  };

  const handleFecthCustomers = async () => {
    const { data } = await API.get("/activities");

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
      type: "Projetos",
      sales: projectsData,
    },
    {
      type: "Atividades",
      sales: activitiesData,
    },
    {
      type: "Tarefas",
      sales: tasksData,
    },
    {
      type: "Clientes",
      sales: customerData,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      // 可手动配置 label 数据标签位置
      position: "bottom",
      // 'top', 'bottom', 'middle',
      // 配置样式
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
