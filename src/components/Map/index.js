import React, {useState, useEffect} from 'react'
import { AuthUserContext, withAuthorization } from '../Session';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import Search from "react-leaflet-search";
import CostumPopup from './Custompopup'
import Placemodal from './Placemodal'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



const MyMap = (props) => {
  const [buttonclicked, setButtonclicked] = useState(false)
  const [placeinfos, setPlaceinfos] = useState()
  const [showpicsclicked, setShowpicsclicked] = useState(false)
 /* const [marker, setMarker] = useState([])*/
  
 // const [position, setPosition] = useState()

  const newerId = "EL2a3ZzudpaEiDverbOyzQUVep5H"
 //  let probe = []
  props.firebase.db.app.database().ref().child('/places-together/' + newerId)
  .once('value')
  .then(async function (snapshot) {
     let newArray = await snapshot.val();
     const test = Object.keys(newArray).map(v => newArray[v]);
     test.forEach(item => item.forEach(t => console.log(t)))
     
      //setPosition(newitem)
     /*snapshot.forEach(function(childSnapshot) {
     const Data = childSnapshot.val();
      console.log(Data)
     
      var childData = childSnapshot.val();
     console.log(childData)
      childSnapshot.forEach(async function(grandchildSnapshot) {
        //var commonId = grandchildSnapshot.key;
        var places = await grandchildSnapshot.val();
        const newplaces = Object.keys(places).map(key => places[key]);;
       setPosition(newplaces)
   })
   })*/
   })
   
   

    const centerpos = [53.36745, 7.20778]

  return (<AuthUserContext.Consumer>
    {authUser => (
    <div>
      <div>
        <h1 className="mapwindowhead">Places we've been...</h1>
        <div className="leaflet">
          <Map className="MyMap" center={centerpos} zoom={3}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
          <Search position="topleft" inputPlaceholder="Custom placeholder" showMarker={true} zoom={7} closeResultsOnClick={true} openSearchOnLoad={false}>
                {(info)=>  {setPlaceinfos(info); 
                    return (
                      <Marker position={[info.latLng.lat, info.latLng.lng]}>
                        <CostumPopup showpicsclicked={showpicsclicked} placeinfos={placeinfos} firebase={props.firebase} setShowpicsclicked={setShowpicsclicked} setButtonclicked={setButtonclicked} />
                      </Marker>
                    )
                   }
                  }
                </Search>
                
                  <Marker position={centerpos}></Marker>
                </Map>
        </div>
       </div>
       { buttonclicked && 
       <Placemodal 
       firebase={props.firebase} 
       authUser={authUser} 
       placeinfos={placeinfos} 
       buttonclicked={buttonclicked} 
       setButtonclicked={setButtonclicked}/> } 
    </div> )}
  </AuthUserContext.Consumer>
  )
}
 
const condition = authUser => !!authUser;

export default withAuthorization(condition)(MyMap);
 