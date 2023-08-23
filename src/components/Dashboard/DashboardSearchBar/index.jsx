import React from "react";
import { Container, H1, Items, Wrapper } from "./styles";
import { Button, Input, Select, Space } from "antd";
import SearchBarMenu from "./Menu";
import MenuSideBar from "../../MenuSideBar";
import NotificationSideBar from "../../NotificationSideBar";

const { Search } = Input;

const DashBoardSearchBar = () => {
  return (
    <Container>
      <Wrapper>
        <Items>
          <MenuSideBar />
        </Items>

        <Items>
          <H1>Dashboard</H1>
        </Items>

        <Items>
          <NotificationSideBar />
        </Items>
      </Wrapper>
    </Container>
  );
};

export default DashBoardSearchBar;
