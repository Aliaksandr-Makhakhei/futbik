import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mapMarkers } from "../../slices/mapMarkers";
import { createDetails } from "../../slices/mapDetails";
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

  
  useEffect(() => {
    dispatch(mapMarkers());
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const markers = useSelector((state) => state.getMarkers.markers);
  
  const stadium = new L.icon({
    iconUrl: require("../../icons/mapicon/ball.png"),
    iconSize: [40, 40],
  });

  

const onMarkerClick = (marker) => {
  dispatch(createDetails(marker))
  navigate(`/stadium/${marker.id}`)
}


  return (
    <div className="home">
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
                <div className="map__marker-details" onClick={() => onMarkerClick(marker)}>Подробнее</div>
              </Popup>
              <Circle center={[gps.latitude, gps.longitude]} radius={70} />
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Home;
