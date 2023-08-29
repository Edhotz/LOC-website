import React, { useEffect, useState } from "react";
import { Form, Input, Alert, Button, Modal, Select } from "antd";

import { API } from "../../services/api";

import FormItem from "antd/es/form/FormItem";

import { Dots } from "react-activity";
import { MdTextFields, MdTitle } from "react-icons/md";
import TextArea from "antd/es/input/TextArea";

const AssignProjectModal = () => {
  const [open, setOpen] = useState(false);
  const [user_email, setUserEmail] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  async function handleFetch() {
    try {
      const { data } = await API.get("/users");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleFetch();
  }, []);

  const onChange = (value) => {
    setUserEmail(value);
    console.log(value);
  };

  const onSearch = (value) => {};

  const options = users.map((user) => ({
    value: user.email,
    label: user.name,
  }));

  const handlePost = async ({ title, description }) => {
    setIsLoading(true);
    try {
      const { status } = await API.post(`/assign-project`, {
        title,
        description,
        user_email,
      });

      console.log(status);

      if (status === 201) {
        setIsLoading(false);
        console.log(status);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      <Alert message="Não foi possivel criar um user" type="error" />;
    }
  };

  const handleOk = () => {
    setModalText("Foi criado com sucesso!");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        type="default"
        onClick={showModal}
        style={{
          marginRight: 870,
          marginBottom: 10,
        }}
      >
        Atribuir projetos
      </Button>
      <Modal
        title="Atribuir Projeto"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 30 }}
          wrapperCol={{ span: 30 }}
          onFinish={handlePost}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 3,
            marginRight: 190,
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
          <FormItem>
            <Select
              showSearch
              placeholder="Selecione o usuario"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={options}
            />
          </FormItem>
          <FormItem name="description">
            <TextArea
              size="large"
              style={{
                minWidth: 460,
                height: 140,
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
              }}
              type="primary"
              htmlType="submit"
              disabled={isLoading}
              onClick={() => {
                handleOk();
              }}
            >
              {isLoading ? (
                <Dots color="#727981" size={14} speed={1} animating={true} />
              ) : (
                "Criar"
              )}
            </Button>
          </FormItem>
        </Form>
        <p>{modalText}</p>
      </Modal>
    </>
  );
};
export default AssignProjectModal;
