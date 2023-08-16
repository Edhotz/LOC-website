import React from "react";
import { RingProgressComponent } from "../../components/RingProgress";
import DocumentsTable from "../../components/DocumentsTable";
import Card from "antd/es/card/Card";
import { Container, Wrapper } from "./styles";
import HeaderBar from "../../components/HeaderBar";
import CustomerDataDrawer from "../../components/CustomerDataDrawer";
import CustomerAddDocuments from "../../components/CustomerAddDocuments";
import AnuncimentsList from "../../components/AnuncimentsList";

const mainPage = () => {
  return (
    <>
      <HeaderBar page="Seu Processo" />
      <Container>
        <Card
          style={{
            display: "flex",
            width: 280,
            height: 230,
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <RingProgressComponent />
        </Card>

        <DocumentsTable />

        <Wrapper>
          <CustomerDataDrawer />
          <CustomerAddDocuments />
        </Wrapper>
        <AnuncimentsList />
      </Container>
    </>
  );
};

export default mainPage;