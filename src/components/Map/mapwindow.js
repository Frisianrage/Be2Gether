import React, {useState} from 'react'
import { AuthUserContext, withAuthorization } from '../Session';
import { Map, Marker, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import Search from "react-leaflet-search";
import CostumPopup from './Search/Custompopup'
import Placemodal from './Search/Placemodal'
import {newerId, userTwoName} from './mapuserlist'
import Placepopup from './Myplaces/Placepopup'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



const MyMap = (props) => {
  const [buttonclicked, setButtonclicked] = useState(false)
  const [placeinfos, setPlaceinfos] = useState([])
  const [showpicsclicked, setShowpicsclicked] = useState(false)
  const [position, setPosition] = useState([])
  const centerpos = [53.36745, 7.20778]

     
  props.firebase.db.app.database().ref().child('/places-together/' + newerId)
  .once('value')
  .then(async function (snapshot) {
     const newArray = await snapshot.val();
     if(newArray){
      const mymarker = Object.keys(newArray).map(key => newArray[key]);
      setPosition(mymarker)
     } else {
      setPosition([])
     }
     
   })
  
   const handleClick = (item) => {
    setPlaceinfos(item)
   }

  return (<AuthUserContext.Consumer>
    {authUser => (
    <div>
      <div>
        <h1 className="mapwindowhead">Places where {userTwoName} and you've been...</h1>
        <div className="leaflet">
          <Map className="MyMap" center={centerpos} zoom={3}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
          <Search position="topleft" inputPlaceholder="Custom placeholder" showMarker={true} zoom={7} closeResultsOnClick={true} openSearchOnLoad={false}>
                {(info) =>  { 
                    return (
                      <Marker onClick={handleClick(info)} position={[info.latLng.lat, info.latLng.lng]}>
                        <CostumPopup showpicsclicked={showpicsclicked} info={info} firebase={props.firebase} setShowpicsclicked={setShowpicsclicked} setButtonclicked={setButtonclicked} />
                      </Marker>
                    )
                   }
                  }
                </Search>
                <div>
                {position.map(place => <Marker position={place.coordinates}><Placepopup showpicsclicked={showpicsclicked} placeinfos={place} firebase={props.firebase} setShowpicsclicked={setShowpicsclicked} setButtonclicked={setButtonclicked}></Placepopup></Marker>)}
                </div>
                
                </Map>
        </div>
       </div>
       { buttonclicked && 
       <Placemodal 
       firebase={props.firebase} 
       authUser={authUser} 
       placeinfos={placeinfos} 
       buttonclicked={buttonclicked} 
       setButtonclicked={setButtonclicked}
       newerId={newerId}/> } 
    </div> )}
  </AuthUserContext.Consumer>
  )
}
 
const condition = authUser => !!authUser;

export default withAuthorization(condition)(MyMap);
 