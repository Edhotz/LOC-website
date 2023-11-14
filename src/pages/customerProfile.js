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
import { useHistory } from "react-router-dom";
import { API } from "../services/api";

const CustomerProfile = () => {
  const [data, setData] = useState("");
  const [isShown, setIsShown] = useState(false);

  const router = useHistory();

  const handleRouter = async (url) => {
    await router.push(url);
  };

  const HandleGet = async () => {
    try {
      const { data } = await API.get(
        "/proceeding/bedab8d3-566a-4f7b-bad7-6b2233a94005"
      );
      setData(data);
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
          marginLeft: "500px",
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

      <Dialog
        isShown={isShown}
        title="Novo Processo"
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Custom Label"
      >
        <FormField flex>
          <TextInput
            label="Default text input field"
            description="This is a description."
            placeholder="Placeholder text"
          />

          <TextInput
            label="Default text input field"
            description="This is a description."
            placeholder="Placeholder text"
          />

          <TextInput
            label="Default text input field"
            description="This is a description."
            placeholder="Placeholder text"
          />
        </FormField>
      </Dialog>

      <Table height={300} width={800} marginLeft="500px" marginTop="50px">
        <Button onClick={() => setIsShown(true)}> Novo Processo</Button>
        <Table.Head>
          <Table.SearchHeaderCell />
          <Table.TextHeaderCell>Processos de {data.name}</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body
          height={240}
          width={800}
          alignItems="center"
          justifyContent="center"
        >
          {profiles.map((profile) => (
            <Table.Row
              key={profile.id}
              isSelectable
              onSelect={() => handleRouter("/admin/proceeding-data")}
            >
              <Button>
                <Table.TextCell>{profile.name}</Table.TextCell>
              </Button>
              <Table.TextCell>{profile.lastActivity}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CustomerProfile;

const profiles = [
  {
    id: "1",
    lastActivity: "a few seconds ago",
    ltv: "$365",
    name: "Cheryl Carter",
  },
  {
    id: "2",
    lastActivity: "a minute ago",
    ltv: "$427",
    name: "Heather Morales",
  },
  {
    id: "3",
    lastActivity: "3 minutes ago",
    ltv: "$538",
    name: "Sean Jackson",
  },
  {
    id: "4",
    lastActivity: "4 minutes ago",
    ltv: "$171",
    name: "Catherine Anderson",
  },
  {
    id: "5",
    lastActivity: "6 minutes ago",
    ltv: "$222",
    name: "Jack Phillips",
  },
];
