import React from "react";
import { RingProgress } from "@ant-design/plots";

export const RingProgressComponent = () => {
  const config = {
    height: 200,
    width: 200,
    autoFit: true,
    percent: 0.8,
    color: ["#00008b", "#E8EDF3"],
    innerRadius: 0.85,
    radius: 0.98,

    statistic: {
      title: {
        style: {
          color: "#363636",
          fontSize: "12px",
          lineHeight: "20px",
        },
        formatter: () => "Progresso",
      },
    },
  };
  return <RingProgress {...config} />;
};
