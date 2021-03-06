import React, {useState} from 'react'
import {Popup} from 'react-leaflet'
import {Button} from 'react-bootstrap';

import ShowPicCarousel from './showpicscarousel'
import Placemodal from './Placemodal'

export default function CostumPopup(props) {
  const [showpicsclicked, setShowpicsclicked] = useState(false)
  const [buttonclicked, setButtonclicked] = useState(false)
  const handleClick = () => {
    setButtonclicked(true)
  }

  const handleShow = () => {
    setShowpicsclicked(true)
  }

  return (
    <Popup>
      <div>
        <p>This is {props.info.raw[0].address.city}!!!!!</p>
        <Button variant="success" onClick={handleClick}>New Memory</Button>
        <p></p>
        <Button variant="success" onClick={handleShow}>Gallery
        </Button>
        { buttonclicked && <Placemodal firebase={props.firebase} authUser={props.authUser} info={props.info} buttonclicked={buttonclicked} setButtonclicked={setButtonclicked} /> } 
        { showpicsclicked && <ShowPicCarousel firebase={props.firebase} info={props.info} showpicsclicked={showpicsclicked} setShowpicsclicked={setShowpicsclicked} /> }
      </div>
    </Popup>
  );
}