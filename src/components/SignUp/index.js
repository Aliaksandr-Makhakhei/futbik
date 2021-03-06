import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../icons/navbar/logo.svg"
import api from "../../configs/api";
import "./style.scss";


const SignUp = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputRole, setInputRole] = useState("");
  const navigate = useNavigate();

  const userData = {
    'email': inputEmail,
    'password': inputPass,
    'name': inputName,
    'age': inputAge,
    'role': inputRole,
    'position': 0,
  }

  const onClickSignUp = async () => {
    await api.post(`/users`, userData)
    navigate(`/login`)
  }

  return (
    <div className="signup">
      <div className="signup__form">
      <img src={logo} alt="logo"/>
        <input
          className="signup__form-login"
          type="text"
          name="email"
          value={inputEmail}
          placeholder="Введите e-mail"
          onChange={(event) => setInputEmail(event.target.value)}
        />
        <input
          className="signup__form-password"
          type="password"
          name="password"
          value={inputPass}
          placeholder="Введите пароль"
          onChange={(event) => setInputPass(event.target.value)}
        />
        <input
          className="signup__form-name"
          type="text"
          name="name"
          value={inputName}
          placeholder="Ваше имя"
          onChange={(event) => setInputName(event.target.value)}
        />
        <input
          className="signup__form-age"
          type="text"
          name="age"
          value={inputAge}
          placeholder="Ваш возраст"
          onChange={(event) => setInputAge(event.target.value)}
        />
        <input
          className="signup__form-role"
          type="text"
          name="role"
          value={inputRole}
          placeholder="Ваша позиция"
          onChange={event => setInputRole(event.target.value)}
        />
        <div className="signup__form-submit" type="submit" value="Зарегистрироваться" onClick={() => onClickSignUp()}>Зарегистрироваться</div> 
      </div>
    </div>
  );
};

export default SignUp;