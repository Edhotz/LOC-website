import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { API } from "../../services/api";
import { useAuth } from "../../AuthProvider/useAuth";
import { useParams } from "react-router-dom";

const ProceedingList = ({ dataProps }) => {
  const [data, setData] = useState("");

  const auth = useAuth();

  const { id } = useParams();

  const handleFetch = async () => {
    try {
      const { data } = await API.get(`/client/${auth.id}`);
      setData(data);

      const { Proceeding } = data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const fixedColumns = [
    {
      title: "Nome do processo",
      dataIndex: "name",
      fixed: true,
      width: 100,
    },
    {
      title: "Status",
      dataIndex: "status",
      fixed: true,
      width: 100,
    },
  ];

  return (
    <>
      <Table
        size="middle"
        columns={fixedColumns}
        dataSource={dataProps}
        pagination={true}
        style={{
          width: 670,
          boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
          marginLeft: "270px",
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
