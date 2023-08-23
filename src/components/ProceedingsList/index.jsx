import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { API } from "../../services/api";
import { useAuth } from "../../AuthProvider/useAuth";

const ProceedingList = () => {
  const [data, setData] = useState("");

  const handleFetch = async () => {
    try {
      const { data } = await API.get("/document");
      setData(data);
      console.log(data);
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
      dataIndex: "url",
      fixed: true,
      width: 100,
    },
  ];

  return (
    <>
      <Table
        size="middle"
        columns={fixedColumns}
        dataSource={data}
        pagination={true}
        style={{
          width: 670,
          boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
        }}
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
export default ProceedingList;
