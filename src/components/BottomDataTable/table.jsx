import React, { useEffect, useState } from "react";
import { Table, Typography } from "antd";
import { API } from "../../services/api";
import { useAuth } from "../../AuthProvider/useAuth";

const BottomTable = () => {
  const [data, setData] = useState("");

  const handleFetch = async () => {
    try {
      const response = await API.get("/projects");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const fixedColumns = [
    {
      title: "Nome",
      dataIndex: "title",
      fixed: true,
      width: 100,
    },
    {
      title: "Descrição",
      dataIndex: "description",
    },
  ];

  return (
    <>
      <Table
        size="small"
        columns={fixedColumns}
        dataSource={data}
        pagination={false}
        scroll={{
          x: 200,
          y: 500,
        }}
        bordered
        summary={() => (
          <Table.Summary fixed>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>Atividades</Table.Summary.Cell>
              <Table.Summary.Cell index={1}>Mais Recentes</Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
    </>
  );
};
export default BottomTable;
