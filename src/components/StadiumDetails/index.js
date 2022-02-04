import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const StadiumDetails = () => {

  const stadiumDetails = useSelector((state) => state.createDetails.details);

const {id, name, gps, players} = stadiumDetails


const playersList = players.map(player => {
  return (
    <div key={player.id}>{player.name} {player.role}</div>
  )
})



  return (
   <>
   <div>{name}</div>
   {playersList}
   </>
  );
};
//вставить внизу карту только с меткой данного поля
export default StadiumDetails;