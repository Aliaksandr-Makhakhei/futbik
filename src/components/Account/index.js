import {React, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import api from "../../configs/api";
import "./style.scss";

const Account = () => {
    const userData = useSelector((state) => state.signIn.userSignIn.user);
    const [user, setUser] = useState(userData)
    const [gameInfo, setGameInfo] = useState({})
    const {name, age, role, mapId = 0} = user
    const avatar = name.slice(0,1)

useEffect(async () => {
  const getUsersData = await api.get(`/users/${userData.id}`)
  setUser(getUsersData.data)
}, [])


useEffect(async () => {
  if(user.mapId === undefined){
    return null
  } else {
    const getMapInfo = await api.get(`/map/${user.mapId}`)
    setGameInfo(getMapInfo.data)
  }
}, [user])

  return (
  <>
  <div className="account">
      <div className="account__wrapper">
      <div className="account__title">Тут о тебе</div>
      <div className="account__avatar">{avatar}</div>
      <div className="account__name">{name}</div>
      <div className="account__age">{age}</div>
      <div className="account__role">{role}</div>
      {mapId !== 0 && <div className="account__stadium">
        <div className="account__stadium-info">Ты идешь: {gameInfo.name} Твоя позиция: {user.position}</div>
        <Link className="account__stadium-go" to={`/stadium/${gameInfo.id}`}>Перейти на стадион</Link>
      </div>}
      </div>
  </div>
  </>
  );
};

export default Account;