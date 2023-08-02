import React from "react";

import { Menu } from "antd";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../../../AuthProvider/useAuth";

const SearchBarMenu = () => {
  const user = useAuth();

  const onClick = (e) => {
    console.log("click ", e);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem(user.email, "sub4", <FaUser size={22} />, [
      getItem("Editar Perfil"),
      getItem("Sair", "10"),
    ]),
  ];
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="vertical"
      items={items}
    />
  );
};
export default SearchBarMenu;
