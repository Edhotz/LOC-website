import { Button, Popover, Progress, Space } from "antd";
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
      <Progress
        percent={compute}
        status="normal"
        style={{
          marginTop: 8,
          width: 280,
        }}
        strokeColor={{
          from: "#f2f2f2",
          to: "#108ee9",
        }}
      />
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
