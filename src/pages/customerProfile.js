import React, { useEffect, useState } from "react";
import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";
import {
  Button,
  Table,
  Avatar,
  Text,
  Dialog,
  TextInput,
  FormField,
} from "evergreen-ui";
import { useHistory, useParams } from "react-router-dom";
import { API } from "../services/api";
import CreateProcessModal from "../components/CreateProcessModal";

const CustomerProfile = () => {
  const [data, setData] = useState("");
  const [proceedingData, setProceedingData] = useState([]);
  const [isShown, setIsShown] = useState(false);

  const router = useHistory();
  const { id } = useParams();

  const handleRouter = async (url) => {
    await router.push(url);
  };

  const HandleGet = async () => {
    try {
      const { data } = await API.get(`/client/${id}`);
      setData(data);

      const { Proceeding } = data;
      console.log(Proceeding);
      setProceedingData(Proceeding);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    HandleGet();
  }, [data]);

  return (
    <div>
      <DashBoardSearchBar title="Dados do cliente" />
      <div
        style={{
          display: "flex",
          marginLeft: "400px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "200px",
          }}
        >
          <Avatar color="blue" name={data.name} size={100} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3px",
            }}
          >
            <Text size={500} fontFamily="Poppins">
              Nome: {data.name}
            </Text>
            <Text size={500} fontFamily="Poppins">
              Email: {data.email}
            </Text>
            <Text size={500} fontFamily="Poppins">
              Localização: {data.location}
            </Text>
            <Text size={500} fontFamily="Poppins">
              Telemovel: {data.phone}
            </Text>
          </div>
        </div>
      </div>

      <Table height={300} width={800} marginLeft="400px" marginTop="50px">
        <Table.Head
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="10px"
        >
          <Table.SearchHeaderCell />
          <Table.TextHeaderCell>Processos de {data.name}</Table.TextHeaderCell>
          <CreateProcessModal />
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
                  onSelect={() =>
                    handleRouter(`/admin/proceeding-data/${data.id}`)
                  }
                >
                  <Table.TextCell>{data.name}</Table.TextCell>

                  <Table.TextCell>{data.status}</Table.TextCell>
                  <Table.TextCell>{data.description}</Table.TextCell>
                </Table.Row>
              ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CustomerProfile;
