import React, { useState } from "react";
import { Form, Input, Alert, Button, Modal } from "antd";

import { API } from "../../services/api";

import FormItem from "antd/es/form/FormItem";

import { MdEmail, MdLocationOn } from "react-icons/md";

import { Dots } from "react-activity";
import { MdTextFields, MdTitle } from "react-icons/md";
import TextArea from "antd/es/input/TextArea";
import { useAuth } from "../../AuthProvider/useAuth";
import { FaLock, FaPhone, FaUser } from "react-icons/fa";

const CreateCustomerModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const user = useAuth();

  const handlePost = async ({ name, email, location, phone, password }) => {
    try {
      setIsLoading(true);
      const { status } = await API.post(`/clients/register`, {
        name,
        email,
        location,
        phone,
        password,
      });

      if (status === 201) {
        setIsLoading(false);
        <Alert message="Cliente Criado" type="success" />;
      }

      console.log(status);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      <Alert message="Não foi possivel criar um usuario" type="error" />;
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
          marginRight: 635,
          marginBottom: 10,
        }}
      >
        Criar novo cliente
      </Button>
      <Modal
        title="Novo Cliente"
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
            width: 300,
            flexDirection: "column",
            alignItems: "start",
            marginRight: 400,
            gap: 4,
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

          <FormItem name="location">
            <Input
              size="large"
              style={{
                padding: 15,
                alignItems: "start",
              }}
              prefix={<MdLocationOn size={20} />}
              placeholder="localização"
            />
          </FormItem>

          <FormItem name="phone">
            <Input
              size="large"
              style={{
                padding: 15,
              }}
              prefix={<FaPhone />}
              placeholder="Telemovel"
            />
          </FormItem>

          <FormItem name="password">
            <Input.Password
              size="large"
              style={{
                padding: 15,
              }}
              prefix={<FaLock />}
              placeholder="Password"
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
export default CreateCustomerModal;
