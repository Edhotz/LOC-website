import React, { createContext, useEffect, useState } from "react";
import {
  LoginCustomerRequest,
  LoginRequest,
  getUserLocalStorage,
  setUserLocalStorage,
} from "./util";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email, password) {
    const response = await LoginRequest(email, password);

    const { user } = response;

    const payload = { token: response.token, email, id: user.id };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  async function authenticateCustomer(email, password) {
    const response = await LoginCustomerRequest(email, password);

    const { client } = response;

    const payload = { token: response.token, ...client };

    console.log(payload);
    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider
      value={{ ...user, authenticate, authenticateCustomer, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
