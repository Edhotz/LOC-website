import axios from "axios";
import { getUserLocalStorage } from "../AuthProvider/util";

export const API = axios.create({
  baseURL: "http://localhost:3333",
});

API.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();

    config.headers.Authorization = user?.token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
