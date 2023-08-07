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
import { MdImage, MdLink, MdTextFields, MdTitle } from "react-icons/md";
import { useAuth } from "../../AuthProvider/useAuth";
import { IoMdDocument } from "react-icons/io";

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
      const { data } = await API.get("/projects");

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
    const { status } = await API.delete(`/projects/${user.id}/${key}`);

    console.log(key, status);
  };

  useEffect(() => {
    handleFecth();
  }, [data]);

  const edit = (record) => {
    form.setFieldsValue({
      title: "",
      description: "",
      link: "",
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

      const { title, description, image, document } = row;

      const { status } = await API.put(`/projects/${user.id}/${key.id}`, {
        title,
        description,
        image,
        document,
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
      title: "Titulo",
      dataIndex: "title",
      width: "25%",
      editable: true,
    },
    {
      title: "descrição",
      dataIndex: "description",
      width: "20%",
      editable: true,
    },
    {
      title: "Imagem",
      dataIndex: "image",
      width: "40%",
      editable: true,
    },
    {
      title: "Documentos",
      dataIndex: "document",
      width: "40%",
      editable: true,
    },
    {
      title: "Data",
      dataIndex: "created_at",
      width: "40%",
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
          width: 800,
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form
          name="basic"
          encType="multpart/form-data"
          labelCol={{ span: 30 }}
          wrapperCol={{ span: 30 }}
          onFinish={handlePost}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 70,
            marginLeft: 210,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                gap: 5,
                marginTop: -78,
              }}
            >
              <FormItem name="title">
                <Input
                  size="large"
                  style={{
                    padding: 15,
                  }}
                  prefix={<MdTitle />}
                  placeholder="Titulo"
                />
              </FormItem>
            </div>
            <div>
              <FormItem name="image">
                <Input
                  style={{
                    padding: 15,
                    width: 400,
                    display: "flex",
                  }}
                  prefix={<MdImage />}
                  placeholder="Imagem"
                  size="large"
                  type="file"
                  name="image"
                />
              </FormItem>
            </div>
            <div>
              <FormItem name="document">
                <Input
                  style={{
                    padding: 15,
                  }}
                  prefix={<IoMdDocument />}
                  placeholder="documento"
                  size="large"
                  type="file"
                  name="document"
                />
              </FormItem>
            </div>
          </div>
          <FormItem name="description">
            <Input
              size="large"
              style={{
                minWidth: 460,
                height: 240,
                textOverflow: "inherit",
                alignItems: "start",
                boxSizing: "border-box",
              }}
              prefix={<MdTextFields size={20} />}
              placeholder="Descrição"
            />
          </FormItem>

          <FormItem wrapperCol={{ offset: 0, span: 10 }}>
            <Button
              style={{
                width: 140,
                height: 50,
                marginTop: 80,
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
