import {React, useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import { getStadiumDetails } from "../../slices/stadiumDetailsSlice";
import { signInSlice } from "../../slices/signInSlice";
import field from "../../icons/mapdetail/field.jpg"
import api from "../../configs/api";
import "./style.scss";

const StadiumDetails = () => {
  const [info, setInfo] = useState([])
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

// const onAcceptClick = async () => {
//   const falsy = info.some(item => {
//         return item.email === userData.email
//       })
//       if(falsy === true){
//            return null
//          } else {
//           const newPlayer = [...info, userData]
//           setInfo(newPlayer)
//           const teamUpdate = { "players": newPlayer }
//           await api.patch(`/map/${id}`, teamUpdate);
//           dispatch(getStadiumDetails(id))
//          }    
// }

// const list = info.map(item => {
//   return (
//     <div key={item.id} className="details__name">{item.name}</div>
//   )
// })


const onAcceptClick = async (positionNumber) => {

console.log(userData);
    if(userData.position === positionNumber){
      console.log('уже занято тобой');
    } else {

      const newObj = {...userData};        
    newObj.position = positionNumber;
    setInfo(newObj)
    const newPlayer = [...info, newObj]
    const teamUpdate = { "players": newPlayer }
    await api.patch(`/map/${id}`, teamUpdate);
    dispatch(getStadiumDetails(id))

    }


    








//   const findPosition = info.some(item => {
//     return item.position === positionNumber
// })



//   if(findPosition) {
//     console.log("ты уже и так на этой позиции");
//   } else {
//     // const deletePosition = { "players": [] }
//     //  await api.patch(`/map/${id}`, deletePosition);
//     //  dispatch(getStadiumDetails(id))
//      const clearPosition = info.filter(item => {
//         return item.position !== positionNumber
//      })

// console.log(clearPosition);

//           const newObj = {...userData};
          
//           newObj.position = positionNumber;
//           setInfo(newObj)
//           const newPlayer = [...info, newObj]
//           const teamUpdate = { "players": newPlayer }
//           await api.patch(`/map/${id}`, teamUpdate);
//           dispatch(getStadiumDetails(id))
//   }       
}


const positions = [{id: 1, name: 'one'}, {id: 2, name: 'two'}, {id: 3, name: 'three'}, {id: 4, name: 'four'}, {id: 5, name: 'five'}]
const positionOnMap = positions.map((item) => {
  return (
    <div key={item.id} className={`position__${item.name}`} onClick={() => onAcceptClick(item.id)}>{item.id}</div>
  )
})



  return (
   <>
   {/* <div className="detail__button" onClick={() => onAcceptClick()}>Иду на футбик</div> */}
    <div className="details__name">{name}</div>
     {/* {list} */}

     <div className="detail__field">
     <img src={field} alt="footbal field" width="900" height="700"/>
      {positionOnMap}

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


// const findPosition = info.some(item => {
  //     return item.position === positionNumber
  // })
  
  
  
  //   if(findPosition) {
  //     console.log("ты уже и так на этой позиции");
  //   } else {
  //     // const deletePosition = { "players": [] }
  //     //  await api.patch(`/map/${id}`, deletePosition);
  //     //  dispatch(getStadiumDetails(id))
  //      const clearPosition = info.filter(item => {
  //         return item.position !== positionNumber
  //      })
  
  // console.log(clearPosition);
  
  //           const newObj = {...userData};
            
  //           newObj.position = positionNumber;
  //           setInfo(newObj)
  //           const newPlayer = [...info, newObj]
  //           const teamUpdate = { "players": newPlayer }
  //           await api.patch(`/map/${id}`, teamUpdate);
  //           dispatch(getStadiumDetails(id))
  //   }       
  // }