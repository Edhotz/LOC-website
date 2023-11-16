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
  const [proceedingData, setProceedingData] = useState("");
  const [isShown, setIsShown] = useState(false);

  const router = useHistory();
  const { id } = useParams();
  console.log(id);

  const handleRouter = async (url) => {
    await router.push(url);
  };

  const HandleGet = async () => {
    try {
      const { data } = await API.get(`/client/${id}`);
      setData(data);

      const { Proceeding } = data;
      setProceedingData(Proceeding);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    HandleGet();
  }, []);

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

      <Table height={300} width={800} marginLeft="500px" marginTop="50px">
        <CreateProcessModal />
        <Table.Head>
          <Table.SearchHeaderCell />
          <Table.TextHeaderCell>Processos de {data.name}</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body
          height={240}
          width={800}
          alignItems="center"
          justifyContent="center"
        ></Table.Body>
      </Table>
    </div>
  );
};

export default CustomerProfile;
