import React, { useEffect, useState } from "react";
import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";
import UpdateProcessModal from "../components/UpdateProcessModal/";
import { useHistory, useParams } from "react-router-dom";
import { API } from "../services/api";
import { Pane, StatusIndicator, Table, Text } from "evergreen-ui";
import { CreatePhaseModal } from "../components/CreatePhaseModal";
import { Select, Space } from "antd";

const statusData = ["Pendente", "Em_curso", "Finalizado"];
const statusSelectedData = {
  Pendente: "Pendente",
  Em_curso: "Em_curso",
  Finalizado: "Finalizado",
};

const ProceedingData = () => {
  const [cities, setCities] = useState(statusSelectedData[statusData[0]]);
  const [data, setData] = useState("");
  const [phaseData, setPhaseData] = useState([]);
  const [phaseId, setPhaseId] = useState("");

  const handleProvinceChange = (value) => {
    setCities(statusSelectedData[value]);
  };

  const router = useHistory();

  const { id } = useParams();

  const handleRouter = async (url) => {
    await router.push(url);
  };

  const HandleGet = async () => {
    try {
      const { data } = await API.get(`/proceeding/${id}`);
      setData(data);

      const { Phases } = data;

      setPhaseData(Phases);
    } catch (error) {
      console.log(error);
    }
  };

  const options = phaseData.map((phase) => ({
    value: phase.id,
    label: phase.label,
  }));

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  console.log(cities);

  const HandlePut = async () => {
    try {
      const updatePhase = await API.put(`/phase/${phaseId.id}`, {
        name: phaseId.name,
        description: phaseId.description,
        status: cities,
      });

      console.log(updatePhase.config.data);
    } catch (error) {
      console.log(error);
    }
  };

  HandlePut();

  useEffect(() => {
    HandleGet();
  }, []);

  return (
    <>
      <DashBoardSearchBar
        title={`Dados do processo de ${
          data.client == undefined ? "Processando..." : data.client.name
        }`}
      />

      <Pane>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            marginLeft: "500px",
            marginTop: "200px",
          }}
        >
          <Text size={500} fontFamily="Poppins">
            Nome do Processo: {data.name}
          </Text>
          <Text size={500} fontFamily="Poppins">
            Descrição: {data.description}
          </Text>
          <Text size={500} fontFamily="Poppins">
            Status:
            {data.status == "Pendente" ? (
              <StatusIndicator
                color="success"
                fontFamily="Poppins"
                marginLeft="10px"
              >
                {data.status}
              </StatusIndicator>
            ) : (
              <StatusIndicator
                color="warning"
                fontFamily="Poppins"
                marginLeft="10px"
              >
                {data.status}
              </StatusIndicator>
            )}
          </Text>
        </div>
        <UpdateProcessModal />
      </Pane>

      <Pane>
        <Table width={800} marginLeft="500px" marginTop="50px">
          <Table.Head
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            padding="10px"
          >
            <Table.TextHeaderCell>Fases</Table.TextHeaderCell>

            <CreatePhaseModal procedding_id={id} />
          </Table.Head>
          <Table.VirtualBody height={240}>
            {phaseData.map((phase) => (
              <Table.Row
                key={phase.id}
                isSelectable
                onSelect={() => setPhaseId(phase)}
              >
                <Table.TextCell>{phase.name}</Table.TextCell>
                <Table.TextCell>{phase.description}</Table.TextCell>
                <Table.TextCell isNumber>
                  <StatusIndicator color="success">
                    <Space wrap>
                      <Select
                        defaultValue={phase.status}
                        style={{
                          width: 120,
                        }}
                        onChange={handleProvinceChange}
                        options={statusData.map((data) => ({
                          label: data,
                          value: data,
                        }))}
                      />
                    </Space>
                  </StatusIndicator>
                </Table.TextCell>
              </Table.Row>
            ))}
          </Table.VirtualBody>
        </Table>
      </Pane>
    </>
  );
};

export default ProceedingData;
