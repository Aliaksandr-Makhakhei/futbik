import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import field from "../../icons/mapdetail/field.jpg";
import api from "../../configs/api";
import "./style.scss";

const StadiumDetails = () => {
  const [mapInfo, setMapInfo] = useState([]);
  const [isBusy, setIsBusy] = useState(false);
  const positions = [
    { id: 1, name: "one", selected: false },
    { id: 2, name: "two", selected: false },
    { id: 3, name: "three", selected: false },
    { id: 4, name: "four", selected: false },
    { id: 5, name: "five", selected: false },
    { id: 6, name: "six", selected: false },
    { id: 7, name: "seven", selected: false },
    { id: 8, name: "eight", selected: false },
    { id: 9, name: "nine", selected: false },
    { id: 10, name: "ten", selected: false },
  ];

  const positionCount = positions.map((position) =>
    mapInfo.map((player) => {
      if (position.id === player.position) {
        return {
          "id": position.id,
          "name": position.name,
          "selected": (position.selected = true),
        };
      } else {
        return {
          "id": position.id,
          "name": position.name,
          "selected": (position.selected = false),
        };
      }
    })
  );

  const details = useSelector((state) => state.getStadiumDetails.details);
  const userData = useSelector((state) => state.signIn.userSignIn.user);
  const { id, name, gps } = details;

  useEffect(async () => {
    const getUsersData = await api.get(`/users`);
    const users = getUsersData.data;
    const thisMapPlayers = users.filter((player) => player.mapId === id);
    setMapInfo(thisMapPlayers);
  }, [id]);

  const onAcceptClick = async (positionNumber) => {
    const checkPosition = mapInfo.some(item => item.position === positionNumber);
    if (checkPosition) {
      setIsBusy(true);
    } else {
      setIsBusy(false);
      await api.patch(`/users/${userData.id}`, {
        "position": positionNumber,
        "mapId": id,
      });
      const getUsersData = await api.get(`/users`);
      const users = getUsersData.data;
      const thisMapPlayers = users.filter((player) => player.mapId === id);
      setMapInfo(thisMapPlayers);
    }
  };

  const positionOnMap = positions.map(position => {
    return (
      <div key={position.id} className={`position__${position.name} ${position.selected && "position__selected"}`} onClick={() => onAcceptClick(position.id)}>{position.id}</div>
    );
  });

  const list = mapInfo.map((player) => {
    return (
      <div key={player.id} className="details__players">??????: {player.name} | ????????????: {player.role} | ??????????????: {player.position}</div>
    );
  });

  return (
    <div className="details">
      {isBusy && <div className="details__busy">?????? ?????????????? ?????? ????????????! ???????????? ????????????</div>}
      <div className="details__name">{name}</div>
      {list}
      <div className="detail__field">
        <img src={field} alt="footbal field" width="900" height="700" />
        {positionOnMap}
      </div>
      {gps !== undefined && <MapContainer center={[gps.latitude, gps.longitude]} zoom={14} scrollWheelZoom={true} className={"map"}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <Marker position={[gps.latitude, gps.longitude]}>
            <Circle center={[gps.latitude, gps.longitude]} radius={50}/>
          </Marker>
        </MapContainer>}
    </div>
  );
};

export default StadiumDetails;