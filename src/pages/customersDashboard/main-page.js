import React from "react";
import { RingProgressComponent } from "../../components/RingProgress";
import DocumentsTable from "../../components/DocumentsTable";
import Card from "antd/es/card/Card";
import { Container } from "./styles";

const mainPage = () => {
  return (
    <Container>
      <Card
        style={{
          display: "flex",
          width: 230,
          height: 230,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RingProgressComponent />
      </Card>

      <DocumentsTable />
    </Container>
  );
};

export default mainPage;
