import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { API } from "../../services/api";

const SelectItem = () => {
  const [clients, setClients] = useState([]);
  const [customerId, setCustomerId] = useState("");

  async function handleFetch() {
    try {
      const { data } = await API.get("/clients");
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

  console.log(customerId);

  const onSearch = (value) => {};

  async function handlePost() {
    try {
      const { status } = await API.post(`/clients/${customerId}`);
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
  );
};

export { SelectItem };
