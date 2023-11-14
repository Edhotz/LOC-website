import React, { useEffect, useState } from "react";
import DashBoardSearchBar from "../components/Dashboard/DashboardSearchBar";
import { useHistory } from "react-router-dom";
import { API } from "../services/api";
import {
  Button,
  Dialog,
  Pane,
  Popover,
  Select,
  StatusIndicator,
  Table,
  Text,
} from "evergreen-ui";

const ProceedingData = () => {
  const [data, setData] = useState("");
  const [phaseData, setPhaseData] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [isShownPhase, setIsShownPhase] = useState(false);

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

      const { id, client_name, name, description, status, client, Phases } =
        data;

      const [firstPhase] = Phases;
      const {
        id: phaseId,
        name: phaseName,
        description: phaseDescription,
        status: phaseStatus,
      } = firstPhase;

      setPhaseData(Phases);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    HandleGet();
  }, []);

  return (
    <>
      <DashBoardSearchBar title={`Dados do processo de ${data.client_name}`} />

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
        <Button
          marginLeft="500px"
          marginTop="10px"
          color="Highlight"
          onClick={() => setIsShown(true)}
        >
          Editar dados do Processo
        </Button>

        <Dialog
          isShown={isShown}
          title="Editar dados do processo"
          onCloseComplete={() => setIsShown(false)}
        ></Dialog>
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
            <Button
              marginLeft="500px"
              marginTop="10px"
              color="Highlight"
              onClick={() => setIsShownPhase(true)}
            >
              Nova Fase
            </Button>

            <Dialog
              isShown={isShownPhase}
              title="Nova Fase"
              onCloseComplete={() => setIsShownPhase(false)}
            ></Dialog>
          </Table.Head>
          <Table.VirtualBody height={240}>
            {phaseData.map((phase) => (
              <Table.Row key={phase.id} isSelectable>
                <Table.TextCell>{phase.name}</Table.TextCell>
                <Table.TextCell>{phase.description}</Table.TextCell>
                <Table.TextCell isNumber>
                  {phase.status == "Pendente" ? (
                    <StatusIndicator color="success">
                      <Select onChange={(event) => alert(event.target.value)}>
                        <option value="foo" selected>
                          {phase.status}
                        </option>
                        <option value="bar">Em_Curso</option>
                        <option value="bar">Finalizado</option>
                      </Select>
                    </StatusIndicator>
                  ) : phase.status == "Em_curso" ? (
                    <StatusIndicator color="blue">
                      <Select onChange={(event) => alert(event.target.value)}>
                        <option value="foo" selected>
                          {phase.status}
                        </option>
                        <option value="bar">Em_curso</option>
                        <option value="bar">Finalizado</option>
                      </Select>
                    </StatusIndicator>
                  ) : (
                    <StatusIndicator color="warning">
                      {phase.status}
                    </StatusIndicator>
                  )}
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
