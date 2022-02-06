import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mapMarkers } from "../../slices/mapMarkersSlice";
import { getStadiumDetails } from "../../slices/stadiumDetailsSlice";
import { clearDetails } from "../../slices/stadiumDetailsSlice"
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "./style.scss";

const Home = () => {

// const [userGPS, setUserGPS] = useState({})
 // navigator.geolocation.getCurrentPosition((position) => {
  //   setUserGPS(position.coords);
  // });
// const userLocation = new L.icon({
  //   iconUrl: require("../../icons/mapicon/user.png"),
  //   iconSize: [40, 40],
  // });
  const dispatch = useDispatch();
  const markers = useSelector((state) => state.getMarkers.markers);
  
  useEffect(() => {
    dispatch(mapMarkers());
    dispatch(clearDetails());
  }, [dispatch]);
  
  const stadium = new L.icon({
    iconUrl: require("../../icons/mapicon/ball.png"),
    iconSize: [40, 40],
  });

  return (
    <div className="home">
      <div className="home__wrapper">
      <div className="home__title">Выбери свое поле!</div>
      <MapContainer center={[53.902, 27.5624]} zoom={11} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[userGPS.latitude, userGPS.longitude]} icon={userLocation}></Marker> */}
        {markers.map((marker) => {
          const {id, name, gps} = marker
          return (
            <Marker key={id} position={[gps.latitude, gps.longitude]} icon={stadium}>
              <Popup>
                <div className="map__marker-title">{name}</div>
                <Link className="map__marker-details" to={`/stadium/${id}`} onClick={() => dispatch(getStadiumDetails(id))}>Подробнее</Link>
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