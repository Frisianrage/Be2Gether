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
    <Popup>
      <div>
  <p>This is {props.placeinfos.address.city}</p>
        <Button variant="success" onClick={handleClick}>New Memory</Button>
        <p></p>
        <Button variant="success" onClick={handleShow}>Gallery</Button>
        <p></p>
        { buttonclicked && <Myplacesmodal firebase={props.firebase} authUser={props.authUser} placeinfos={props.placeinfos} buttonclicked={buttonclicked} setButtonclicked={setButtonclicked} newerId={props.newerId}/> } 
        { showpicsclicked && <ShowPlaceCarousel firebase={props.firebase} newerId={props.newerId} placeinfos={props.placeinfos} showpicsclicked={showpicsclicked} setShowpicsclicked={setShowpicsclicked} /> }
        <Link to={{pathname: ROUTES.TRAVEL, hash: props.placeinfos.address.city}}><Button variant="success">Travel Blog</Button></Link>

      </div>
    </Popup>
  );
}