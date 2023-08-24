import React, { useEffect, useState } from "react";
import { Form, Input, Alert, Button, Modal, Select } from "antd";

import { API } from "../../services/api";

import FormItem from "antd/es/form/FormItem";

import { Dots } from "react-activity";
import { MdTextFields, MdTitle } from "react-icons/md";
import TextArea from "antd/es/input/TextArea";
import { useAuth } from "../../AuthProvider/useAuth";
import { SelectItem } from "../SelectCustomer";

const CreateProcessModal = () => {
  const [open, setOpen] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const onChange = (value) => {
    setCustomerId(value);
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const user = useAuth();

  const handlePost = async ({ name, description }) => {
    setIsLoading(true);
    try {
      const { status } = await API.post(`/proceedings/${user.id}`, {
        name,
        description,
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
        Criar novo processo
      </Button>
      <Modal
        title="Novo Processo"
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
              placeholder="Nome do processo"
            />
          </FormItem>

          <FormItem>
            <SelectItem />
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
              placeholder="Descrição do processo"
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
export default CreateProcessModal;
