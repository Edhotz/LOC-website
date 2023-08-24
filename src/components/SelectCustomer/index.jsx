import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useEffect, useState } from "react";
import { API } from "../../services/api";

export function SelectItem() {
  const [data, setData] = useState([]);

  const handleFecth = async () => {
    try {
      const { data } = await API.get("/clients");

      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFecth();
  }, []);

  return (
    <Select defaultValue="dog">
      <Option value="name">{data.name}</Option>
      <Option value="cat">Cat</Option>
    </Select>
  );
}
