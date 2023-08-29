import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Drawer, List, Row } from "antd";
import { FaUser } from "react-icons/fa";
import { API } from "../../services/api";
import { getUserLocalStorage } from "../../AuthProvider/util";
import PdfViewer from "../PdfViewer";

const DescriptionItem = ({ title, content }) => (
  <div
    className="site-description-item-profile-wrapper"
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <p
      className="site-description-item-profile-p-label"
      style={{
        margin: 3,
        marginLeft: 4,
      }}
    >
      {title}:{" "}
    </p>
    {content}
  </div>
);
const CustomerDataDrawer = () => {
  const [open, setOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const user = getUserLocalStorage();

  const [data, setData] = useState("");

  const handleFetch = async () => {
    try {
      const response = await API.get("/document");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <List
        dataSource={[
          {
            id: user.id,
            name: user.name,
          },
        ]}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                onClick={showDrawer}
                key={`a-${item.id}`}
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaUser size={30} />
                Seus Dados
              </a>,
            ]}
          ></List.Item>
        )}
      />
      <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <p
          className="site-description-item-profile-p"
          style={{
            marginBottom: 24,
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          Perfil de Cliente
        </p>
        <p
          className="site-description-item-profile-p"
          style={{ fontSize: "16px", fontWeight: 600 }}
        >
          Seus dados pessoais
        </p>
        <Row display="flex">
          <Col span={12}>
            <DescriptionItem title="Nome Completo" content={user.name} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Conta" content={user.email} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Cidade" content={user.location} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Pais" content="Angola" />
          </Col>
        </Row>

        <Divider />
        <p className="site-description-item-profile-p">Contactos</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Email" content={user.email} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Numero de Telefone" content={user.phone} />
          </Col>
        </Row>
        <Row
          style={{
            marginTop: 40,
          }}
        >
          <Col span={50}>
            <div className="PdfPage">
              <PdfViewer
                pdf={data.url}
                onCancel={() => setShowPdf(false)}
                visible={showPdf}
              />
              <Button onClick={() => setShowPdf(!showPdf)}>
                Ver Documentos
              </Button>
            </div>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};
export default CustomerDataDrawer;
