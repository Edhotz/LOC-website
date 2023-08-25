import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Select, Space } from "antd";
import UploadDocument from "../UploadDocument";
import { API } from "../../services/api";

const { Option } = Select;

const CreateProcessDocumentSheet = () => {
  const [open, setOpen] = useState(false);
  const [clients, setClients] = useState([]);
  const [customerId, setCustomerId] = useState("");

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  async function handleFetch() {
    try {
      const { data } = await API.get("/proceedings");
      setClients(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleFetch();
  }, []);

  const onChange = (value) => {
    setCustomerId(value);
  };

  const onSearch = (value) => {};

  async function handlePost() {
    try {
      const { status } = await API.post(`/proceedings/${customerId}`);
      console.log(status);
    } catch (error) {
      console.log(error);
    }
  }

  const options = clients.map((client) => ({
    value: client.id,
    label: client.name,
  }));
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Adicionar Documentos
      </Button>
      <Drawer
        title="Adicionar Documentos"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Select
            showSearch
            placeholder="Selecione um cliente"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={options}
          />
          <UploadDocument proceedingId={customerId} />
        </Form>
      </Drawer>
    </>
  );
};
export default CreateProcessDocumentSheet;
