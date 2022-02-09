import {React, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../configs/api";
import "./style.scss";

const AdminPanel = () => {
    const [inputName, setInputName] = useState("");
    const [inputLatitude, setInputLatitude] = useState("");
    const [inputLongitude, setInputLongitude] = useState("");
    const navigate = useNavigate();

    const mapData = {
        'name': inputName,
        'gps': {
            "latitude": inputLatitude,
            "longitude":inputLongitude
        },
      }


const onClickPostMap = async () => {
    await api.post(`/map`, mapData)
    navigate('admin')
}



  return (
  <>
<div className="new-map">
      <div className="new-map__form">
        <input
          className="new-map__name"
          type="text"
          name="map-name"
          value={inputName}
          placeholder="Введите название стадиона"
          onChange={(event) =>  setInputName(event.target.value)}
        />
        <input
          className="new-map__latitude"
          type="text"
          name="latitude"
          value={inputLatitude}
          placeholder="Введите широту"
          onChange={(event) => setInputLatitude(event.target.value)}
        />
        <input
          className="new-map__longitude"
          type="text"
          name="longitude"
          value={inputLongitude}
          placeholder="Введите долготу"
          onChange={(event) => setInputLongitude(event.target.value)}
        />
        <div className="new-map__form-submit" onClick={() => onClickPostMap()}>Добавить карту</div> 
      </div>
    </div>
  </>
  );
};

export default AdminPanel;