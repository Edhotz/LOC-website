import React from "react";
import { Divider, List, Typography } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const AnuncimentsList = () => (
  <>
    <List
      header={<h2>Anuncios</h2>}
      bordered
      dataSource={data}
      style={{
        width: 670,
        border: "none",
        boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
      }}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
  </>
);
export default AnuncimentsList;
