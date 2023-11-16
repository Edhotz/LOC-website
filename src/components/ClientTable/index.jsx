import React, { useState, useEffect } from "react";
import { Button, Dialog, Label, Table } from "evergreen-ui";
import { useHistory } from "react-router-dom";
import { API } from "../../services/api";
import Form from "antd/es/form/Form";
import { Input } from "antd";
import CreateCustomerModal from "../CreateCustomerModal";
export const ClientDataTable = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(false);

  const router = useHistory();

  async function handleGet() {
    try {
      const { data } = await API.get("/clients");

      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handlePost() {
    try {
      const { status } = API.post("/clients/register", {
        name,
        email,
        phone,
        location,
        password,
      });

      console.log(status);
    } catch (error) {
      console.log(error);
    }
  }
  const handleRouter = async (url) => {
    await router.push(url);
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <Table height={300} width={800}>
      <Table.Head
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Table.SearchHeaderCell />
        <Table.TextHeaderCell>Lista de clientes</Table.TextHeaderCell>
        <CreateCustomerModal />
      </Table.Head>
      <Table.Body
        height={240}
        width={800}
        alignItems="center"
        justifyContent="center"
      >
        {data.length === 0
          ? "Sem Dados"
          : data.map((data) => (
              <Table.Row
                key={data.id}
                isSelectable
                alignItems="center"
                onSelect={() => handleRouter("/admin/customer-profile")}
              >
                <Table.TextCell>{data.name}</Table.TextCell>

                <Table.TextCell>{data.email}</Table.TextCell>
                <Table.TextCell>{data.phone}</Table.TextCell>
              </Table.Row>
            ))}
      </Table.Body>
    </Table>
  );
};
