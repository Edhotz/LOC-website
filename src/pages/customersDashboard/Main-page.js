import React, { useEffect, useState } from "react";
import ProgressBar from "../../components/RingProgress";
import Card from "antd/es/card/Card";
import { Container, Wrapper } from "./styles";
import HeaderBar from "../../components/HeaderBar";
import CustomerDataDrawer from "../../components/CustomerDataDrawer";
import CustomerAddDocuments from "../../components/CustomerAddDocuments";
import AnuncimentsList from "../../components/AnuncimentsList";
import CustomerAvatar from "../../components/CustomerAvatar";
import { Col, Row, Space, Des, Descriptionscriptions, h1, Divider } from "antd";
import ProceedingList from "../../components/ProceedingsList";
import { API } from "../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../AuthProvider/useAuth";
import {
  Avatar,
  EditIcon,
  EyeOnIcon,
  IconButton,
  Paragraph,
  Table,
  Text,
  Tooltip,
} from "evergreen-ui";
import ListPhasePopover from "../../components/ListPhasePopover/screen";

const MainPage = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [proceedingData, setProceedingData] = useState([]);
  const [proceedingId, setProceedingId] = useState("");

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
  }, [data]);

  return (
    <>
      <HeaderBar page="Perfil de Cliente" />
      <Container>
        <Wrapper>
          <Space
            style={{
              gap: "30px",
              marginRight: "100px",
            }}
          >
            <Avatar color="blue" name={data.name} size={100} />
            <Space
              display="flex"
              style={{
                flexDirection: "column",
                alignItems: "start",
                textAlign: "start",
              }}
            >
              <h3
                style={{
                  fontWeight: "normal",
                }}
              >
                Nome: {data.name}
              </h3>
              <h3
                style={{
                  fontWeight: "normal",
                }}
              >
                Email: {data.email}
              </h3>
              <h3
                style={{
                  fontWeight: "normal",
                }}
              >
                Telemovel: {data.phone}
              </h3>
              <h3
                style={{
                  fontWeight: "normal",
                }}
              >
                Localização: {data.location}
              </h3>
            </Space>
          </Space>
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
              <ProgressBar proceedingId={proceedingId} />
            </Space>
          </Card>
          <Table height={300} width={800} alignSelf="center" marginLeft="400px">
            <Table.Head
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="10px"
            >
              <Table.TextHeaderCell>Lista de Processos</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body
              height={240}
              width={800}
              alignItems="center"
              justifyContent="center"
            >
              {proceedingData.length === 0
                ? "Sem Dados"
                : proceedingData.map((data) => (
                    <Table.Row
                      key={data.id}
                      isSelectable
                      alignItems="center"
                      onSelect={() => ""}
                    >
                      <Table.TextCell>{data.name}</Table.TextCell>

                      <Table.TextCell>{data.description}</Table.TextCell>
                      <Table.TextCell>{data.status}</Table.TextCell>
                      <Table.TextCell>
                        <Tooltip content="Edit title">
                          <ListPhasePopover id={data.id} />
                        </Tooltip>
                      </Table.TextCell>
                    </Table.Row>
                  ))}
            </Table.Body>
          </Table>
        </Wrapper>
      </Container>
    </>
  );
};

export default MainPage;
