import React from "react";
import {
  AiFillHome,
  AiFillProfile,
  AiFillProject,
  AiOutlineUser,
  AiTwotoneCustomerService,
} from "react-icons/ai";

import { Container, Items, LogoImage, Text, Wrapper } from "./styles";

import logo from "../../../images/logo.png";
import { MdAddTask, MdTask } from "react-icons/md";

const DashboardMenu = () => {
  return (
    <Container>
      <Wrapper>
        <Items>
          <AiFillHome size={32} color="#20a6da" />
          <Text href="/dashboard">Dashboard</Text>
        </Items>

        <Items>
          <AiOutlineUser size={32} color="#20a6da" />
          <Text href="/users">Usuarios</Text>
        </Items>

        <Items>
          <MdTask size={32} color="#20a6da" />
          <Text href="/ativities">Atividades</Text>
        </Items>

        <Items>
          <AiFillProject size={32} color="#20a6da" />
          <Text href="/projects">Projetos</Text>
        </Items>

        <Items>
          <MdAddTask size={32} color="#20a6da" />
          <Text href="/tasks">Tarefas</Text>
        </Items>

        <Items>
          <AiFillProfile size={32} color="#20a6da" />
          <Text href="/customers">Clientes</Text>
        </Items>
      </Wrapper>
    </Container>
  );
};

export default DashboardMenu;
