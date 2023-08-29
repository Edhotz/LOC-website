import React, { useEffect, useState } from "react";
import ProgressBar from "../../components/RingProgress";
import Card from "antd/es/card/Card";
import { Container, Wrapper } from "./styles";
import HeaderBar from "../../components/HeaderBar";
import CustomerDataDrawer from "../../components/CustomerDataDrawer";
import CustomerAddDocuments from "../../components/CustomerAddDocuments";
import AnuncimentsList from "../../components/AnuncimentsList";
import CustomerAvatar from "../../components/CustomerAvatar";
import { Space } from "antd";
import ProceedingList from "../../components/ProceedingsList";
import { API } from "../../services/api";

const MainPage = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = async () => {
    setIsLoading(true);
    try {
      const { data } = await API.get("/proceedings");
      setData(data);
      if (data) {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <HeaderBar page="Perfil de Cliente" />
      <Container>
        <Wrapper>
          <CustomerAvatar />
          <Card
            style={{
              display: "flex",
              width: 400,
              height: 230,
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <span
              style={{
                display: "flex",
                gap: 10,
              }}
            >
              <h1>Nome: </h1>
              <h1
                style={{
                  fontWeight: 400,
                }}
              >
                {isLoading ? "Carregando..." : data[0].client_name}
              </h1>
            </span>

            <span
              style={{
                display: "flex",
                gap: 10,
              }}
            >
              <h1>Processo: </h1>
              <h1
                style={{
                  fontWeight: 400,
                }}
              >
                {isLoading ? "Carregando..." : data[0].description}
              </h1>
            </span>

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
          <CustomerDataDrawer />
          <CustomerAddDocuments />
        </Wrapper>

        <Wrapper>
          <ProceedingList />
        </Wrapper>
      </Container>
    </>
  );
};

export default MainPage;
