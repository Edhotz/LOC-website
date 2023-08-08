import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Alert,
  Button,
} from "antd";
import { API } from "../../services/api";

import FormItem from "antd/es/form/FormItem";

import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
import { Dots } from "react-activity";
import {
  MdEmail,
  MdImage,
  MdLink,
  MdLocationOn,
  MdTextFields,
  MdTitle,
} from "react-icons/md";
import { useAuth } from "../../AuthProvider/useAuth";
import { IoMdDocument } from "react-icons/io";
import { AiFillProfile } from "react-icons/ai";
import { FaKey, FaLocationArrow, FaPhone, FaUser } from "react-icons/fa";

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
      const { data } = await API.get("/users");

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePost = async ({ name, email, password }) => {
    try {
      setIsLoading(true);
      const { status } = await API.post(`/users`, {
        name,
        email,
        password,
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
    await API.delete(`/users/${key}`);
  };

  useEffect(() => {
    handleFecth();
  }, [data]);

  const edit = (record) => {
    form.setFieldsValue({
      title: "",
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

      console.log(row);

      const { name, email, role } = row;

      const { status } = await API.patch(`/users/${key}`, {
        name,
        email,
        role,
      });

      setData(data);
      console.log(status);
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      width: "25%",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
      editable: true,
    },
    {
      title: "Acesso",
      dataIndex: "role",
      width: "40%",
      editable: true,
    },
    {
      title: "Data de criação",
      dataIndex: "created_at",
      width: "50%",
      editable: true,
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
              onClick={() => save(record.id)}
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
          width: 800,
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 30 }}
          wrapperCol={{ span: 30 }}
          onFinish={handlePost}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 5,
            }}
          >
            <FormItem name="name">
              <Input
                size="large"
                style={{
                  padding: 15,
                }}
                prefix={<FaUser />}
                placeholder="Nome"
              />
            </FormItem>
          </div>

          <div
            style={{
              display: "flex",
              gap: 5,
            }}
          >
            <FormItem name="email">
              <Input
                size="large"
                style={{
                  padding: 15,
                }}
                prefix={<MdEmail />}
                placeholder="Email"
              />
            </FormItem>
          </div>

          <div
            style={{
              display: "flex",
              gap: 5,
            }}
          >
            <FormItem name="password">
              <Input.Password
                size="large"
                style={{
                  padding: 15,
                }}
                prefix={<FaKey />}
                placeholder="Password"
              />
            </FormItem>
          </div>

          <FormItem wrapperCol={{ offset: 0, span: 10 }}>
            <Button
              style={{
                width: 140,
                height: 50,
              }}
              type="primary"
              htmlType="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Dots color="#727981" size={14} speed={1} animating={true} />
              ) : (
                "Criar"
              )}
            </Button>
          </FormItem>
        </Form>
      </div>

      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
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
