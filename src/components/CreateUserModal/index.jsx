import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Alert,
  Button,
  Modal,
} from "antd";

import { API } from "../../services/api";

import FormItem from "antd/es/form/FormItem";

import { Dots } from "react-activity";
import {
  MdEmail,
  MdImage,
  MdLink,
  MdLocationOn,
  MdTextFields,
  MdTitle,
} from "react-icons/md";
import { FaKey, FaLocationArrow, FaPhone, FaUser } from "react-icons/fa";

const CreateUserModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
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

  const handleOk = () => {
    setModalText("O Usuario foi criado com sucesso!");
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
          marginRight: 640,
          marginBottom: 10,
        }}
      >
        Criar novo usuario
      </Button>
      <Modal
        title="Novo Usuario"
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
            marginRight: 200,
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
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

          <FormItem name="password">
            <Input.Password
              size="large"
              style={{
                padding: 15,
                marginLeft: 7,
              }}
              prefix={<FaKey />}
              placeholder="Password"
            />
          </FormItem>

          <FormItem wrapperCol={{ offset: 0, span: 10 }}>
            <Button
              style={{
                marginRight: 120,
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
export default CreateUserModal;
