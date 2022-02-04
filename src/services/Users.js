import api from "../configs/api";

const logIn = async (object) => {
  const response = await api.post(`/login`, object)
  return response
};

const signUp = async (object) => {
  const response = await api.post(`/users`, object)
  return response
};

const exportObject = { logIn, signUp };

export default exportObject;