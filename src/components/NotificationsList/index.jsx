import React from "react";
import { Divider, List, Typography } from "antd";

const NotificationList = () => (
  <>
    <Divider
      orientation="left"
      style={{
        fontWeight: "bold",
      }}
    >
      Notificacoes
    </Divider>
    <List
      size="small"
      bordered
      dataSource={""}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />

    <Divider
      orientation="left"
      style={{
        fontWeight: "bold",
      }}
    >
      Atividades
    </Divider>
    <List
      size="small"
      bordered
      dataSource={""}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </>
);
export default NotificationList;
