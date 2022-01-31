import api from "../configs/api";

const signIn = async (object) => {
  await api.post(`/login`, object).then(function (response) {
    console.log(response); //можно добавить catch
  });
};

const signUp = async (object) => {
  await api.post(`/users`, object).then(function (response) {
    console.log(response); //можно добавить catch
  });
};

const exportObject = { signIn, signUp };

export default exportObject;