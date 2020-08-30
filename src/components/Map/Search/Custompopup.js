import React, {useState} from 'react'
import {Popup} from 'react-leaflet'
import {Button} from 'react-bootstrap';
import ShowPicCarousel from './showpicscarousel'
import Placemodal from './Placemodal'



export default function CostumPopup(props) {
  const [showpicsclicked, setShowpicsclicked] = useState(false)
  const handleClick = () => {
    props.setButtonclicked(true)
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
        { props.buttonclicked && <Placemodal firebase={props.firebase} authUser={props.authUser} info={props.info} buttonclicked={props.buttonclicked} setButtonclicked={props.setButtonclicked} newerId={props.newerId}/> } 
        { showpicsclicked && <ShowPicCarousel firebase={props.firebase} info={props.info} showpicsclicked={showpicsclicked} setShowpicsclicked={setShowpicsclicked} newerId={props.newerId} /> }
      </div>
    </Popup>
  );
}

/*
<div>
        <p>I am a custom popUp</p>
        <p>
          latitude and longitude from search component:{" "}
          {props.Info.latLng.toString().replace(",", " , ")}
        </p>
        <p>Info from search component: {props.info}</p>
        <p>
          {props.info.raw &&
            props.info.raw.place_id &&
            JSON.stringify(props.info.raw.place_id)}
        </p>
      </div>
*/