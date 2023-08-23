import { API } from "../services/api";

export function setUserLocalStorage(user) {
  localStorage.setItem("u", JSON.stringify(user));
}
export function getUserLocalStorage() {
  const json = localStorage.getItem("u");
  if (!json) {
    return null;
  }
  const user = JSON.parse(json);
  return user !== null && user !== void 0 ? user : null;
}
export async function LoginRequest(email, password) {
  try {
    const request = await API.post("/sessions", { email, password });
    return request.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function LoginCustomerRequest(email, password) {
  try {
    const request = await API.post("/clients/login", { email, password });
    return request.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

