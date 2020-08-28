import React, {useState} from 'react';
import { Marker} from 'react-leaflet'


export default function Mymarker(props) {
 
  const [position, setPosition] = useState()
   
  props.firebase.db.app.database().ref().child('/places/')
  .once('value')
  .then(function (snapshot) {
     //let newArray = await snapshot.val();
     snapshot.forEach(async function(childSnapshot) {
      //const Cityname = childSnapshot.key;
      //var childData = await childSnapshot.val();
      childSnapshot.forEach(async function(grandchildSnapshot) {
        //var commonId = grandchildSnapshot.key;
        var places = await grandchildSnapshot.val();
        const newplaces = Object.keys(places).map(key => places[key]);;
        const latlng = newplaces[0].coordinates
       setPosition(latlng)
   }) }) })

   console.log(position)
  return (
    
    <Marker position={position}></Marker>  
  
  )
 
}

