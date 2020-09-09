import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Popup} from 'react-leaflet'
import {Button} from 'react-bootstrap';
import Myplacesmodal from './Myplacesmodal'
import ShowPlaceCarousel from './showplacecarousel'
import * as ROUTES from '../../../constants/routes';



export default function PlacePopup(props) {
  const [showpicsclicked, setShowpicsclicked] = useState(false)
  const [buttonclicked, setButtonclicked] = useState(false)
  
  
  const handleClick = () => {
    setButtonclicked(true)
    console.log(props)
  }

  const handleShow = () => {
    setShowpicsclicked(true)
  }
 
  return (
    <Popup className="Custompopup">
      <div >
          <h3>This is {props.placeinfos.address.city}</h3>
          <div className="popupbuttons">
            <div className="popupbtn">
              <button  className="popupbtn" variant="success" onClick={handleClick}>New Memory</button>
            </div>
            <div className="popupbtn">
              <button  className="popupbtn" variant="success" onClick={handleShow}>Gallery</button>
            </div>
            <div className="popupbtn">
              <Link to={{pathname: ROUTES.TRAVEL, hash: props.placeinfos.address.city}}><button className="popupbtn" variant="success">Travel Blog</button></Link>
            </div>
          </div>
          { buttonclicked && <Myplacesmodal firebase={props.firebase} authUser={props.authUser} placeinfos={props.placeinfos} buttonclicked={buttonclicked} setButtonclicked={setButtonclicked} newerId={props.newerId}/> } 
          { showpicsclicked && <ShowPlaceCarousel firebase={props.firebase} authUser={props.authUser} placeinfos={props.placeinfos} showpicsclicked={showpicsclicked} setShowpicsclicked={setShowpicsclicked} /> }
      </div>
    </Popup>
  );
}