import React, { useEffect, useState, Suspense } from "react";
import ProgressBar from "../../components/RingProgress";
import Card from "antd/es/card/Card";
import { Space } from "antd";
import { API } from "../../services/api";
import Paragraph from "antd/es/typography/Paragraph";

const CustomerDataCard = () => {
  const handleFetch = async () => {
    setIsLoading(true);
    try {
      const { data } = await API.get("/proceedings");

      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Card
        style={{
          display: "flex",
          width: 400,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Space
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Progresso:</h1>
          <ProgressBar />
        </Space>
      </Card>
    </Suspense>
  );
};

export { CustomerDataCard };
