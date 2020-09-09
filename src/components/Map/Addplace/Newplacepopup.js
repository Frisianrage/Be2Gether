import React, {useState} from 'react'
import {Popup} from 'react-leaflet'
import {Button} from 'react-bootstrap';
import Newplacemodal from './Newplacemodal'
//import ShowPlaceCarousel from './showplacecarousel'



export default function NewplacePopup(props) {
  const [buttonclicked, setButtonclicked] = useState(false)
  
  const handleClick = () => {
    setButtonclicked(true)
    console.log(props)
  }
 
  return (
    <Popup>
      <div>
        <p>You have no Memory at this place yet!</p>
        <p> You want to create a new Memory?</p>
        <Button variant="success" onClick={handleClick}>Yes</Button>
        { buttonclicked && <Newplacemodal position={props.position} firebase={props.firebase} authUser={props.authUser} buttonclicked={buttonclicked} setButtonclicked={setButtonclicked} /> } 
 
        </div>
    </Popup>
  );
}
