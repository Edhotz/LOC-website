import { Button, Popover, Space } from "antd";
import { Heading, Text } from "evergreen-ui";
import React, { useEffect, useState } from "react";
import { API } from "../../services/api";

const ListPhasePopover = ({ id }) => {
  const [data, setData] = useState("");
  const [phaseData, setPhaseData] = useState([]);
  async function handleGet() {
    try {
      const { data } = await API.get(`/proceeding/${id}`);

      setData(data);

      const { Phases } = data;
      setPhaseData(Phases);
    } catch (error) {
      console.log(error);
    }
  }

  const weight = 10;

  const compute = phaseData.length * (100 / weight);

  console.log(compute);

  const content = (
    <div>
      <Heading> {compute}%</Heading>
    </div>
  );

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <Popover content={content} title="Progresso do Processo">
      <Button type="default">Progresso</Button>
    </Popover>
  );
};

export default ListPhasePopover;
