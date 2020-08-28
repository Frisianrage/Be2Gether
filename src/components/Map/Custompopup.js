import React, {useState, useEffect} from 'react'
import {Popup} from 'react-leaflet'
import {Button} from 'react-bootstrap';
import ShowPicCarousel from './showpicscarousel'



export default function CostumPopup(props) {
  console.log(props.info.raw[0])
  const handleClick = () => {
    props.setButtonclicked(true)
  }

  const handleShow = () => {
    props.setShowpicsclicked(true)
  }
  return (
    <Popup>
      <div>
  <p>This is {props.info.raw[0].address.city}</p>
        <Button variant="success" onClick={handleClick}>New Memory</Button>
        <p></p>
        <Button variant="success" onClick={handleShow}>Show Pictures</Button>
        { props.showpicsclicked && <ShowPicCarousel firebase={props.firebase} placeinfos={props.placeinfos} showpicsclicked={props.showpicsclicked} setShowpicsclicked={props.setShowpicsclicked} /> }
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