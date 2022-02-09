import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mapMarkers } from "../../slices/mapMarkersSlice";
import { getStadiumDetails, clearDetails } from "../../slices/stadiumDetailsSlice";
import { clearError } from "../../slices/signInSlice";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "./style.scss";

const Home = () => {
  const dispatch = useDispatch();
  const markers = useSelector((state) => state.getMarkers.markers);

  useEffect(() => {
    dispatch(mapMarkers());
    dispatch(clearDetails());
    dispatch(clearError());
  }, [dispatch]);

  const stadium = new L.icon({
    iconUrl: require("../../icons/mapicon/ball.png"),
    iconSize: [40, 40],
  });

  const isLogin = useSelector((state) => state.signIn.isLogin);

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__title">Выбери свое поле!</div>
        <MapContainer center={[53.902, 27.5624]} zoom={11} scrollWheelZoom={true}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          {markers.map((marker) => {
            const { id, name, gps } = marker;
            return (
              <Marker key={id} position={[gps.latitude, gps.longitude]} icon={stadium}>
                <Popup><div className="map__marker-title">{name}</div>
                {isLogin === false ? <Link to="/login">Нужно авторизоваться</Link> : <Link className="map__marker-details" to={`/stadium/${id}`} onClick={() => dispatch(getStadiumDetails(id))}>Подробнее</Link>}
                </Popup>
                <Circle center={[gps.latitude, gps.longitude]} radius={70} />
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default Home;