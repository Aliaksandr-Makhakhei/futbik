import {React, useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {logOut} from "../../slices/signInSlice"
import logo from "../../icons/navbar/logo.svg"
import userAccount from "../../icons/navbar/user.svg"
import exit from "../../icons/navbar/logout.svg"
import "./style.scss";

const Navbar = () => {
const [dropdown, setDropdown] = useState(false)
  const isLogin = useSelector((state) => state.signIn.isLogin);
  const dispatch = useDispatch()

const onLogOutClick = () => {
  dispatch(logOut())
  setDropdown(!dropdown)
}

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo"><img src={logo} alt="logo"/></Link>
    {isLogin ? <img className="navbar__user-btn"src={userAccount} alt="account" onClick={() => setDropdown(!dropdown)}/> : <Link to="/login" className="navbar__login-btn">Войти</Link>}
    {dropdown && <div className="user">
      <Link to="/account" className="user__account" onClick={() => setDropdown(!dropdown)}>Личный кабинет</Link>
      <div className="user__logout" onClick={() => onLogOutClick()}>
        <div className="user__logout-title">Выйти</div>
        <img className="user__logout-image" src={exit} alt="log out"/>
      </div>
      </div>}
    </nav>
  );
};

export default Navbar;