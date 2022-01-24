import api from "../configs/api";

// const loadEvents = async () => {
//   const response = await api.get("/events");
//   return response.data;
// };

const logIn = async (object) => {
  await api.post(`/login`, object).then(function (response) {
    console.log(response); //можно добавить catch
  });
};

const register = async (object) => {
  await api.post(`/users`, object).then(function (response) {
    console.log(response); //можно добавить catch
  });
};

const exportObject = { logIn, register };

export default exportObject;