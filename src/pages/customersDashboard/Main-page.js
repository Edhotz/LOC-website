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
import { useParams } from "react-router-dom";
import { useAuth } from "../../AuthProvider/useAuth";

const MainPage = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [proceedingData, setProceedingData] = useState([]);

  const auth = useAuth();

  const { id } = useParams();

  const handleFetch = async () => {
    setIsLoading(true);
    try {
      const { data } = await API.get(`/client/${id}`);
      setData(data);

      if (data) {
        setIsLoading(false);
      }

      const { Proceeding } = data;

      setProceedingData(Proceeding);
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
              <ProgressBar proceedingId={proceedingData} />
            </Space>
          </Card>
        </Wrapper>

        <Wrapper>
          <ProceedingList dataProps={proceedingData} />
        </Wrapper>
      </Container>
    </>
  );
};

export default MainPage;
