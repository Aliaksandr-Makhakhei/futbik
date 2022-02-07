import {React, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

const Account = () => {
    const userData = useSelector((state) => state.signIn.userSignIn.user);


    const {email, name, age, role, id} = userData

    const avatar = name.slice(0,1)


  return (
  <>
  <div className="account">
      <div className="account__wrapper">
      <div className="account__title">Тут о тебе</div>
      <div className="account__avatar">{avatar}</div>
      <div className="account__name">{name}</div>
      <div className="account__age">{age}</div>
      <div className="account__role">{role}</div>
      </div>
  </div>
  </>
  );
};

export default Account;