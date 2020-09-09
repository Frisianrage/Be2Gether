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
    <Popup className="Clickpopup">
      <div>
        <h3 className="clickpopup-head">You have no Memory at this place yet!</h3>
        <h3 className="clickpopup-head"> You want to create a new Memory?</h3>
        <div className="popupbuttons">
          <div className="popupbtn">
            <button  className="popupbtn" variant="success" onClick={handleClick}>Yes</button>
          </div>
          </div>
        { buttonclicked && <Newplacemodal position={props.position} firebase={props.firebase} authUser={props.authUser} buttonclicked={buttonclicked} setButtonclicked={setButtonclicked} /> } 

        </div>
    </Popup>
  );
}
