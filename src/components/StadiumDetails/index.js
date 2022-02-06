import {React, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlayer } from "../../slices/addPlayerSlice"
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "./style.scss";






//сделать useSelector данных юзера и положить их через arr.push в массив players. Потом отправить этот ключ в объекте через patch созданный в слайсере.







const StadiumDetails = () => {
  const dispatch = useDispatch()
  const details = useSelector((state) => state.getStadiumDetails.details);
  const userData = useSelector((state) => state.signIn.userSignIn.user);


const {id, name, players, gps} = details


const onAcceptClick = () => {
  const newArr = [...players, userData]
  dispatch(addPlayer(id, newArr))
}

//можно сделать проверку по длинне массива. 
// const playersList = players.map(player => {
//   return (
//     <div key={player.id} className="details">{player.name} {player.role}</div>
//   )
// })

  return (
   <>
   <div className="detail__button" onClick={() => onAcceptClick()}>Иду на футбик</div>
   <div className="details__name">{name}</div>
   {/* {playersList} */}


   <MapContainer center={[gps.latitude, gps.longitude]} zoom={14} scrollWheelZoom={true} className={"mapa"}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <Marker position={[gps.latitude, gps.longitude]}>
              <Circle center={[gps.latitude, gps.longitude]} radius={50} />
            </Marker>
          );
      
      </MapContainer>


   </>
  );
};
//вставить внизу карту только с меткой данного поля
export default StadiumDetails;