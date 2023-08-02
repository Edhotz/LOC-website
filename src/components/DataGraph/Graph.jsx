import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";

export const Graph = () => {
  const data = [
    {
      type: "Projetos",
      sales: 38,
    },
    {
      type: "Atividades",
      sales: 52,
    },
    {
      type: "Tarefas",
      sales: 61,
    },
    {
      type: "Clientes",
      sales: 145,
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
