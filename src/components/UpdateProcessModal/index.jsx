import React, { useState } from "react";
import { Form, Input, Alert, Button, Modal, Select } from "antd";

import { API } from "../../services/api";

import FormItem from "antd/es/form/FormItem";

import { Dots } from "react-activity";
import { MdTextFields, MdTitle } from "react-icons/md";
import TextArea from "antd/es/input/TextArea";

import { useParams } from "react-router-dom";

const UpdateProcessModal = () => {
  const [open, setOpen] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const { id } = useParams();

  const onChange = (value) => {
    setCustomerId(value);
  };

  const onSearch = (value) => {};

  const options = clients.map((client) => ({
    value: client.id,
    label: client.name,
  }));

  const handlePost = async ({ name, description }) => {
    setIsLoading(true);
    try {
      const { status } = await API.post(`/phase/${id}`, {
        name,
        description,
      });

      if (status === 201) {
        setIsLoading(false);
        console.log(status);
      }
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
      <Button type="default" onClick={showModal}>
        Editar Dados
      </Button>
      <Modal
        title="Novo Etapa"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          encType="multpart/form-data"
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
          <FormItem name="name">
            <Input
              size="large"
              style={{
                padding: 15,
              }}
              prefix={<MdTitle />}
              placeholder="Nome da Etapa"
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
              placeholder="Descrição da Etapa"
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
export default UpdateProcessModal;
