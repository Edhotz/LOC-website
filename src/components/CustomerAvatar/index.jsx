import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, Space } from "antd";

const CustomerAvatar = () => (
  <Space direction="vertical" size={80}>
    <Space wrap size={16}>
      <Avatar size={200} icon={<UserOutlined size={50} />} />
    </Space>
  </Space>
);
export default CustomerAvatar;
