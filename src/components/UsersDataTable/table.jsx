import React, { useContext, useEffect, useRef, useState } from "react";
import { Alert, Button, Form, Input, Popconfirm, Table } from "antd";
import { API } from "../../services/api";
import FormItem from "antd/es/form/FormItem";

import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
import { Dots } from "react-activity";
import { MdEmail } from "react-icons/md";

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  name,
  email,
  role,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, []);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();

      const name = values.name;
      const email = values.email;
      const role = values.role;

      const data = {
        name,
        email,
        role,
      };

      const { status } = await API.patch(`/users/${record.id}`, data);

      console.log(record.id, status);
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: "Este campo não pode ficar vazio",
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

const DataTable = () => {
  const [dataSource, setDataSource] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = async () => {
    try {
      const { data } = await API.get("/users");
      setDataSource(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePost = async ({ name, email, password }) => {
    setIsLoading(true);
    try {
      const { status } = await API.post("/users", {
        name,
        email,
        password,
      });
      <Alert message="Usuario Criado" type="success" />;

      if (status === 201) {
        setIsLoading(false);
      }

      console.log(status);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      <Alert message="Não foi possivel criar um usuario" type="error" />;
    }
  };

  useEffect(() => {
    handleFetch();
  }, [dataSource]);

  const [count, setCount] = useState(2);

  const handleDelete = async (key) => {
    const { data } = await API.delete(`/users/${key}`);

    console.log(key, data);
  };

  const defaultColumns = [
    {
      title: "name",
      dataIndex: "name",
      width: "30%",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      editable: true,
    },
    {
      title: "role",
      dataIndex: "role",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
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

  const handleAdd = () => {
    const newData = {};
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
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
          <FormItem name="name">
            <Input
              size="middle"
              style={{
                padding: 15,
              }}
              prefix={<UserOutlined />}
              placeholder="username"
            />
          </FormItem>
          <FormItem name="email">
            <Input
              size="middle"
              style={{
                padding: 15,
              }}
              prefix={<MdEmail size={20} />}
              placeholder="Email"
            />
          </FormItem>

          <FormItem name="password">
            <Input.Password
              style={{
                padding: 15,
              }}
              prefix={<LockOutlined />}
              placeholder="Password"
              size="middle"
            />
          </FormItem>

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

      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};
export default DataTable;
