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

import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";

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
import TextArea from "antd/es/input/TextArea";
import { useAuth } from "../../AuthProvider/useAuth";

const CreateAtivitiesModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const user = useAuth();

  const handlePost = async ({ title, description, link }) => {
    setIsLoading(true);
    try {
      const { status } = await API.post(`/activities/${user.id}`, {
        title,
        description,
        link,
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
          marginRight: 620,
          marginBottom: 10,
        }}
      >
        Criar nova atividade
      </Button>
      <Modal
        title="Nova atividade"
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
            alignItems: "center",
            gap: 10,
          }}
        >
          <FormItem name="title">
            <Input
              size="large"
              style={{
                padding: 15,
                marginRight: 380,
              }}
              prefix={<UserOutlined />}
              placeholder="Titulo"
            />
          </FormItem>
          <FormItem name="link">
            <Input
              style={{
                padding: 15,
                marginRight: 380,
              }}
              prefix={<MdLink />}
              placeholder="Link"
              size="large"
            />
          </FormItem>
          <FormItem name="description">
            <TextArea
              size="large"
              style={{
                width: 460,
                height: 140,
                padding: 10,
                alignItems: "start",
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
export default CreateAtivitiesModal;
