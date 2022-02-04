import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../icons/navbar/logo.svg"
import "./style.scss";

const Navbar = () => {
  const location = useLocation()
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo"><img src={logo} alt="logo"/></Link>
      {location.pathname !== "/" ?  null : <Link to="/login" className="navbar__login-btn">Войти</Link>}
    </nav>
  );
};

export default Navbar;