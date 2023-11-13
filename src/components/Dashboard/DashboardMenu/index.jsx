import React from "react";
import {
  AiFillHome,
  AiFillProfile,
  AiFillProject,
  AiOutlineUser,
} from "react-icons/ai";

import { Container, Items, Text, Wrapper } from "./styles";
import { BsFillHouseAddFill, BsHouseFill } from "react-icons/bs";
import {
  MdAddTask,
  MdAssignmentInd,
  MdOutlineAssignmentReturn,
  MdTask,
} from "react-icons/md";

const DashboardMenu = () => {
  return (
    <Container>
      <Wrapper>
        <Items>
          <AiFillHome
            size={32}
            color="#20a6da"
            style={{
              marginRight: 10,
            }}
          />
          <Text href="/dashboard">Dashboard</Text>
        </Items>

        <Items>
          <AiOutlineUser
            size={32}
            color="#20a6da"
            style={{
              marginRight: 20,
            }}
          />
          <Text href="/users">Usuarios</Text>
        </Items>

        <Items>
          <MdTask
            size={32}
            color="#20a6da"
            style={{
              marginRight: 10,
            }}
          />
          <Text href="/ativities">Processos</Text>
        </Items>



        <Items>
          <AiFillProfile
            size={32}
            color="#20a6da"
            style={{
              marginRight: 20,
            }}
          />
          <Text href="/customers">Clientes</Text>
        </Items>

      
      </Wrapper>
    </Container>
  );
};

export default DashboardMenu;
