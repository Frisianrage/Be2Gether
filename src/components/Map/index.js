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

const position = [51.505, -0.09]

const MyMap = (props) => {
  const [buttonclicked, setButtonclicked] = useState(false)
  const [placeinfos, setPlaceinfos] = useState()
  const [showpicsclicked, setShowpicsclicked] = useState(false)
  

  return (<AuthUserContext.Consumer>
    {authUser => (
    <div>
      <div>
        <h1 className="mapwindowhead">Places we've been...</h1>
        <div className="leaflet">
          <Map className="MyMap" center={position} zoom={3}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
          <Search position="topleft" inputPlaceholder="Custom placeholder" showMarker={true} zoom={7} closeResultsOnClick={true} openSearchOnLoad={false}>
                {(info)=>  {setPlaceinfos(info);  
                    return (
                      <Marker position={[info.latLng.lat, info.latLng.lng]}>
                        <CostumPopup info={info} showpicsclicked={showpicsclicked} placeinfos={placeinfos} firebase={props.firebase} setShowpicsclicked={setShowpicsclicked} setButtonclicked={setButtonclicked} />
                      </Marker>
                    )
                   }
                  }
                </Search>
                  <Marker position={position}>Hello</Marker>
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
 