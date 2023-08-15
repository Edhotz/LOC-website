import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { API } from "../../services/api";
import { useAuth } from "../../AuthProvider/useAuth";

const DocumentsTable = () => {
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
      title: "titulo",
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
        pagination={true}
        scroll={{
          x: 200,
          y: 500,
        }}
        bordered
        summary={() => (
          <Table.Summary fixed>
            <Table.Summary.Row></Table.Summary.Row>
          </Table.Summary>
        )}
      />
    </>
  );
};
export default DocumentsTable;
