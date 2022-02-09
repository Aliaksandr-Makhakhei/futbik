import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../slices/signInSlice";
import logo from "../../icons/navbar/logo.svg";
import { useDispatch } from "react-redux";
import "./style.scss";

const Login = () => {
  const [inputLogin, setInputLogin] = useState("");
  const [inputPass, setInputPass] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = {
    email: inputLogin,
    password: inputPass,
  };

  const onClickLogin = () => {
    dispatch(signIn(userData));
    navigate(`/`);
  };

  return (
    <div className="login">
      <div className="login__form">
        <img src={logo} alt="logo" />
        <input
          className="login__form-login"
          type="text"
          name="login"
          value={inputLogin}
          placeholder="e-mail"
          onChange={(event) => setInputLogin(event.target.value)}
        />
        <input
          className="login__form-password"
          type="password"
          name="password"
          value={inputPass}
          placeholder="пароль"
          onChange={(event) => setInputPass(event.target.value)}
        />
        <div className="login__form-submit" type="submit" value="Отправить" onClick={() => onClickLogin()}>Войти</div>
        <Link to="/signup" className="login__form-register">Создать аккаунт</Link>
      </div>
    </div>
  );
};

export default Login;