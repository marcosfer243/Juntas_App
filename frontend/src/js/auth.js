import axios from "axios";

const urlApi = "https://juntas-web-server-production.up.railway.app/users/login";

export const login = async (user) => {
  const response = await axios.post(`${urlApi}`, user);

  localStorage.setItem("token", response.data.token);
  return response.data;
};
