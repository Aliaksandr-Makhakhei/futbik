import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../slices/signInSlice"
import logo from "../../icons/navbar/logo.svg"
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../../slices/signInSlice"
import "./style.scss";

const Login = () => {
  const [inputLogin, setInputLogin] = useState("");
  const [inputPass, setInputPass] = useState("");
  const error = useSelector((state) => state.signIn.error);
  const navigate = useNavigate();
  const dispatch = useDispatch()

console.log(error);


  const userData = {
    email: inputLogin,
    password: inputPass
  }

    const onClickLogin = () => {
       dispatch(signIn(userData))
       if(error === true) {
         return null
       } else {
        navigate(`/`)
       }
    }

    const deleteError = () => {
      dispatch(clearError())
    }

  return (
    <div className="login">
      <div className="login__form">
      <img src={logo} alt="logo"/>
      {error && <div className="login__error">Вы ввели некорректные данные!</div>}
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