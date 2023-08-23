import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import DashboardMenu from "../Dashboard/DashboardMenu";
import { TbLayoutSidebar, TbLayoutSidebarRight } from "react-icons/tb";
import SearchBarMenu from "../Dashboard/DashboardSearchBar/Menu";
import NotificationList from "../NotificationsList";

const NotificationSideBar = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showDefaultDrawer = () => {
    setSize("default");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button
          type="default"
          onClick={showDefaultDrawer}
          style={{
            width: "70px",
            height: "70px",
            border: "none",
          }}
        >
          <TbLayoutSidebarRight size={32} />
        </Button>
      </Space>
      <Drawer
        placement="right"
        size={size}
        autoFocus={false}
        onClose={onClose}
        open={open}
        mask={false}
        extra={<Space></Space>}
      >
        <NotificationList />
      </Drawer>
    </>
  );
};
export default NotificationSideBar;
