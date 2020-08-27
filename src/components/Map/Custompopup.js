import React, {useState, useEffect} from 'react'
import {Popup} from 'react-leaflet'



export default function CostumPopup(props) {
  console.log(props)
  return (
    <Popup>
      <div>
        <p>I am a custom popUp</p>
        
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