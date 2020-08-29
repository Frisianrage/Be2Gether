import React from 'react'
import {Popup} from 'react-leaflet'
import {Button} from 'react-bootstrap';
import ShowPlaceCarousel from './showplacecarousel'



export default function PlacePopup(props) {
  
  const handleClick = () => {
    props.setButtonclicked(true)
  }

  const handleShow = () => {
    props.setShowpicsclicked(true)
  }
 
  
  return (
    <Popup>
      <div>
  <p>This is {props.placeinfos.city}</p>
        <Button variant="success" onClick={handleClick}>New Memory</Button>
        <p></p>
        <Button variant="success" onClick={handleShow}>Show Pictures</Button>
        { props.showpicsclicked && <ShowPlaceCarousel firebase={props.firebase} placeinfos={props.placeinfos} showpicsclicked={props.showpicsclicked} setShowpicsclicked={props.setShowpicsclicked} /> }
      </div>
    </Popup>
  );
}