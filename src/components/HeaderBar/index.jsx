import React from "react";
import { Container, H1, Items, Wrapper } from "./styles";
import { Button, Input, Select, Space } from "antd";
import SearchBarMenu from "../Dashboard/DashboardSearchBar/Menu";

const { Search } = Input;

const HeaderBar = () => {
  return (
    <Container>
      <Wrapper>
        <Items>
          <H1>Usuarios</H1>
        </Items>

        <Items>
          <Space.Compact>
            <Search
              addonBefore="Pesquisa"
              placeholder="Busque por alguma coisa"
              allowClear
            />
          </Space.Compact>
        </Items>

        <Items>
          <SearchBarMenu />
        </Items>
      </Wrapper>
    </Container>
  );
};

export default HeaderBar;
