import React from "react";
import { Container, H1, Items, Wrapper } from "./styles";
import { Input } from "antd";
import MenuSideBar from "../../MenuSideBar";
import NotificationSideBar from "../../NotificationSideBar";

const DashBoardSearchBar = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <Items>
          <MenuSideBar />
        </Items>

        <Items>
          <H1>{title}</H1>
        </Items>

        <Items>
          <NotificationSideBar />
        </Items>
      </Wrapper>
    </Container>
  );
};

export default DashBoardSearchBar;
