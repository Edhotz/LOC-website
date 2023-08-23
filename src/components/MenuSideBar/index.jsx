import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import DashboardMenu from "../Dashboard/DashboardMenu";
import { TbLayoutSidebar } from "react-icons/tb";
import SearchBarMenu from "../Dashboard/DashboardSearchBar/Menu";

const MenuSideBar = () => {
  const [open, setOpen] = useState(true);
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
            marginLeft: "300px",
            border: "none",
          }}
        >
          <TbLayoutSidebar size={32} />
        </Button>
      </Space>
      <Drawer
        title={`Luanda Office Center`}
        placement="left"
        size={size}
        autoFocus={false}
        onClose={onClose}
        open={open}
        mask={false}
        extra={<Space></Space>}
      >
        <SearchBarMenu />

        <DashboardMenu />
      </Drawer>
    </>
  );
};
export default MenuSideBar;
