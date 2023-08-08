import React from "react";

import { Button, Menu } from "antd";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../../../AuthProvider/useAuth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SearchBarMenu = () => {
  const user = useAuth();
  const logout = useAuth();

  const history = useHistory();

  const auth = useAuth();

  async function onFinish() {
    try {
      await auth.logout();
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

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
      getItem(
        <Button
          onClick={() => onFinish()}
          title="Sair"
          style={{
            border: "none",
            color: "red",
            background: "transparent",
          }}
        >
          Logout
        </Button>
      ),
    ]),
  ];
  return (
    <Menu
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
