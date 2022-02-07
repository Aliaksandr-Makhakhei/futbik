import {React, useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import { getStadiumDetails } from "../../slices/stadiumDetailsSlice";
import field from "../../icons/mapdetail/field.jpg"
import api from "../../configs/api";
import "./style.scss";

const StadiumDetails = () => {
  const [info, setInfo] = useState([])
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch();
  const details = useSelector((state) => state.getStadiumDetails.details);
  const userData = useSelector((state) => state.signIn.userSignIn.user);
  const {id, name, players, gps} = details

useEffect(() => {
  if(players !== undefined){
    setInfo(players)
  } else {
    return null
  }
}, [players])

const onAcceptClick = async () => {
  const falsy = info.some(item => {
        return item.email === userData.email
      })
      if(falsy === true){
           return null
         } else {
          const newPlayer = [...info, userData]
          setInfo(newPlayer)
          const teamUpdate = { "players": newPlayer }
          await api.patch(`/map/${id}`, teamUpdate);
          dispatch(getStadiumDetails(id))
         }
         
}
const list = info.map(item => {
  return (
    <div key={item.id} className="details__name">{item.name}</div>
  )
})



const onPositionClick = () => {
  setSelected(!selected)
}


  return (
   <>
   <div className="detail__button" onClick={() => onAcceptClick()}>Иду на футбик</div>
    <div className="details__name">{name}</div>
     {list}

     <div className="detail__field">
     <img src={field} alt="footbal field" width="900" height="700"/>
      <div className="position__one" onClick={() => onPositionClick()}>1</div>
      <div className="position__two">2</div>
      <div className="position__three">3</div>
      <div className="position__four" >4</div>
      <div className="position__five">5</div>

    </div>


   {gps !== undefined && <MapContainer center={[gps.latitude, gps.longitude]} zoom={14} scrollWheelZoom={true} className={"mapa"}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <Marker position={[gps.latitude, gps.longitude]}>
              <Circle center={[gps.latitude, gps.longitude]} radius={50} />
            </Marker>
          );
      </MapContainer>}
   </>
  );
};

export default StadiumDetails;