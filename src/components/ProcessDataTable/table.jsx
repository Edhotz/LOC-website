import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Alert,
} from "antd";
import { API } from "../../services/api";

import CreateProjectModal from "../CreateProjectsModal";
import { useAuth } from "../../AuthProvider/useAuth";
import CreateProcessModal from "../CreateProcessModal";
import CreateProcessDocumentSheet from "../CreateProcessDocumentSheet";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "text" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const DataTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;
  const [isLoading, setIsLoading] = useState(false);

  const user = useAuth();

  const handleFecth = async () => {
    try {
      const { data } = await API.get("/proceedings");

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePost = async ({ title, description, image, document }) => {
    try {
      setIsLoading(true);
      const { status } = await API.post(`/projects/${user.id}`, {
        title,
        description,
        image,
        document,
      });

      if (status === 201) {
        setIsLoading(false);
        <Alert message="Usuario Criado" type="success" />;
      }

      console.log(status);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      <Alert message="Não foi possivel criar um usuario" type="error" />;
    }
  };

  const handleDelete = async (key) => {
    await API.delete(`/proceedings/${key}`);
  };

  useEffect(() => {
    handleFecth();
  }, [data]);

  const edit = (record) => {
    form.setFieldsValue({
      id: "",
      name: "",
      client_name: "",
      status: "",
      description: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();

      const { name, description, status } = row;

      const { data } = await API.put(`/proceedings/${key.id}`, {
        name,
        status,
        description,
      });

      setData(data);
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Nome do Processo",
      dataIndex: "name",
      width: "20%",
      editable: true,
    },
    {
      title: "Nome do Cliente",
      dataIndex: "client_name",
      width: "25%",
      editable: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      width: "25%",
      editable: true,
    },
    {
      title: "Descrição",
      dataIndex: "description",
      width: "20%",
      editable: true,
    },
    {
      title: "Documentos",
      dataIndex: "documents",
      width: "20%",
      editable: false,
    },

    {
      title: "Editar",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);

        return editable ? (
          <span
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography.Link
              onClick={() => save(record)}
              style={{
                marginRight: 8,
              }}
            >
              Salvar
            </Typography.Link>
            <Popconfirm title="Quer realmente cancelar?" onConfirm={cancel}>
              <a>Cancelar</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Editar
          </Typography.Link>
        );
      },
    },

    {
      title: "Apagar",
      dataIndex: "operation",
      render: (_, record) =>
        data.length >= 1 ? (
          <Popconfirm
            title="Você realmente que apagar?"
            onConfirm={() => handleDelete(record.id)}
          >
            <a
              style={{
                color: "red",
              }}
            >
              Apagar
            </a>
          </Popconfirm>
        ) : null,
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,

      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "created_at" ? Date() : "number",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: 10,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <CreateProcessModal />
        <CreateProcessDocumentSheet />
      </div>

      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          style={{
            borderRadius: 15,
            borderWidth: 1.5,
            borderColor: "#FFF",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.02,
            shadowRadius: 5.5,
            elevation: 5,
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </>
  );
};
export default DataTable;
