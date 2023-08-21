import React, { useState } from "react";
import { Col, Divider, Drawer, List, Row } from "antd";
import { FaUser } from "react-icons/fa";

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
            id: 1,
            name: "Lily",
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
            <DescriptionItem title="Nome Completo" content="Lily" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Conta" content="AntDesign@example.com" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Cidade" content="Luanda" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Pais" content="Angola" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Message"
              content="Make things as simple as possible but no simpler."
            />
          </Col>
        </Row>

        <Divider />
        <p className="site-description-item-profile-p">Contactos</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Email" content="AntDesign@example.com" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
          </Col>
        </Row>
        <Row>
          <Col span={24}></Col>
        </Row>
      </Drawer>
    </>
  );
};
export default CustomerDataDrawer;
