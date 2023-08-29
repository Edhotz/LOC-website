import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, Space } from "antd";
import { FaUser } from "react-icons/fa";

const CustomerAvatar = () => (
  <Space direction="vertical" size={80}>
    <Space wrap size={16}>
      <Avatar size={200} icon={<FaUser size="100px" />} />
    </Space>
  </Space>
);
export default CustomerAvatar;
