import React, {useState} from 'react'
import {Popup} from 'react-leaflet'
import {Button} from 'react-bootstrap';
import Newplacemodal from './Newplacemodal'
//import ShowPlaceCarousel from './showplacecarousel'



export default function NewplacePopup(props) {
  const [showpicsclicked, setShowpicsclicked] = useState(false)
  const [buttonclicked, setButtonclicked] = useState(false)
  const [thisplacehistory, setThisPlacehistory] = useState([])
  
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
        <p>You have no Memory at this place yet!</p>
        <p> You want to create a new Memory?</p>
        <Button variant="success" onClick={handleClick}>Yes</Button>
        { buttonclicked && <Newplacemodal position={props.position} firebase={props.firebase} authUser={props.authUser} buttonclicked={buttonclicked} setButtonclicked={setButtonclicked} newerId={props.newerId}/> } 
 
        </div>
    </Popup>
  );
}

/*
        { showpicsclicked && <ShowPlaceCarousel firebase={props.firebase} setThisPlacehistory={setThisPlacehistory} thisplacehistory={thisplacehistory} newerId={props.newerId} placeinfos={props.placeinfos} showpicsclicked={showpicsclicked} setShowpicsclicked={setShowpicsclicked} /> }
     <p></p>
        <Button variant="success" onClick={handleShow}>Gallery</Button>

*/