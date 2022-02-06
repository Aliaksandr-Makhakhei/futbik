import {React, useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import { getStadiumDetails } from "../../slices/stadiumDetailsSlice";
import { useParams } from "react-router-dom";
import "./style.scss";
import api from "../../configs/api";



const StadiumDetails = () => {


  const details = useSelector((state) => state.getStadiumDetails.details);
  console.log(details);



  const {id, name, players, gps} = details


  return (
   <>
   {/* <div className="detail__button" onClick={() => onAcceptClick()}>Иду на футбик</div>
    <div className="details__name">{name}</div> */}
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

export default StadiumDetails;







// const params = useParams()
// const dispatch = useDispatch();


//   dispatch(getStadiumDetails(params.stadiumId))

// const details = useSelector((state) => state.getStadiumDetails.details);
// const userData = useSelector((state) => state.signIn.userSignIn.user);

//   const {id, name, players, gps} = details

// const onAcceptClick = async () => {
//   const newArray = players.slice();
//   newArray.push(userData)
//   await teamServices.addPlayer(id, newArray)
// }


// const playersList = players.map(player => {
//   return (
//     <div key={player.id} className="details">{player.name} {player.role}</div>
//   )
// })


// const pathname = useParams()
// const {id, name, players, gps} = details
// const details = useSelector((state) => state.getStadiumDetails.details);