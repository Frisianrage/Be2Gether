import React, {useState, useEffect} from 'react'
import { AuthUserContext, withAuthorization } from '../Session';
import { Map, Marker, TileLayer} from 'react-leaflet'
import L from 'leaflet';
import Search from "react-leaflet-search";
import CostumPopup from './Search/Custompopup'
import Placepopup from './Myplaces/Placepopup'
import Newplacepopup from './Addplace/Newplacepopup'
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MyMap = (props) => {

  const [position, setPosition] = useState([])
  const [newmarker, setNewmarker] = useState(false)
  const [newmarkerposition, setNewMarkerPosition] = useState([])
  const centerpos = [53.36745, 7.20778]

  const storageUrl = props.firebase.db.app.database().ref().child('map/places-together/' + props.authUser.friendwith.coupleid)
  
  
useEffect(() => {
  let mounted = true
  storageUrl.once('value')
  .then(async function (snapshot) {
     const newArray = await snapshot.val();
     if(mounted){
      if(newArray){
        const mymarker = Object.keys(newArray).map(key => newArray[key]);
        setPosition(mymarker)
      } 
     }     
  })
  return () => {
    mounted = false
  }
}
)    
  
const handleClick = (e) => {
  if(!newmarker){
<<<<<<< Updated upstream
=======
    console.log(e)
>>>>>>> Stashed changes
    const lat = e.latlng.lat
    const lng = e.latlng.lng
    setNewMarkerPosition([lat,lng])
    setNewmarker(true)
     } else{
      setNewmarker(false)
      }
  }
  return (<AuthUserContext.Consumer>
    {authUser => (
    <div>
<<<<<<< Updated upstream
=======
      <div>
>>>>>>> Stashed changes
        <h1 className="mapwindowhead">Places where {props.authUser.friendwith.first_name} and you've been...</h1>
        <div className="leaflet">
          <Map onClick={handleClick} className="MyMap" center={centerpos} zoom={3}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
          <Search position="topleft" inputPlaceholder="Custom placeholder" showMarker={true} zoom={7} closeResultsOnClick={true} openSearchOnLoad={false}>
                {(info) =>  { 
                    return (
                      <Marker position={[info.latLng.lat, info.latLng.lng]}>
                        <CostumPopup info={info} authUser={authUser} firebase={props.firebase} />
                      </Marker>
                    )
                   }
                  }
                </Search>
<<<<<<< Updated upstream
                {position.map((place, key) => <Marker key={key} position={place.coordinates}><Placepopup authUser={authUser} placeinfos={place} firebase={props.firebase} ></Placepopup></Marker>)}
                {newmarker && <Marker position={newmarkerposition}><Newplacepopup position={newmarkerposition} authUser={authUser} firebase={props.firebase} ></Newplacepopup></Marker> }
          </Map>
        </div>
=======
                  {position.map((place, key) => <Marker key={key} position={place.coordinates}><Placepopup authUser={authUser} placeinfos={place} firebase={props.firebase} ></Placepopup></Marker>)}
                  {newmarker && <Marker position={newmarkerposition}><Newplacepopup position={newmarkerposition} authUser={authUser} firebase={props.firebase} ></Newplacepopup></Marker> }
                </Map>
        </div>
       </div>
       
>>>>>>> Stashed changes
    </div> )}
  </AuthUserContext.Consumer>
  )
}
 
const condition = authUser => !!authUser;

export default withAuthorization(condition)(MyMap);

<<<<<<< Updated upstream
/*  


                 
*/
=======
>>>>>>> Stashed changes
