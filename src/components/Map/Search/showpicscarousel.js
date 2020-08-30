import React, {useState} from 'react';
import {Modal, Carousel} from 'react-bootstrap';
import newerId from '../mapuserlist'

function ShowPicCarousel(props) {
   const handleClose = () => props.setShowpicsclicked(false);

   const [placehistory, setPlacehistory] = useState([])
   
   const city = props.info.raw[0].address.city
   //props.info.raw[0].address.city
   
   
     props.firebase.db.app.database().ref().child('/places/' + newerId + '/' + city )
    .once('value')
    .then( async function (snapshot) {
       let newArray = await snapshot.val(); 
       if (newArray){
           const places = Object.keys(newArray).map(key => newArray[key]);;
          setPlacehistory(places)
       } else (setPlacehistory([]))
     }) 
    
  return (
    <div className="placemodal">
<Modal size="xl" show={props.showpicsclicked} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{city}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Carousel indicators={false}>
            {placehistory.map(place => {
              if(place.city === city) {
                return (
                <Carousel.Item className="carousel-item">
                <img
                  className="d-block w-100"
                  src={place.body}
                  alt={place.file_name}
                />
                <Carousel.Caption>
                  <h3>Our trip to {city}</h3>
                  <p>Our trip to {city}. We've been here... (Time)!!</p>
                </Carousel.Caption>
              </Carousel.Item>
                )} 
              } ) }
            </Carousel>
          </Modal.Body>
      </Modal>
    </div>
      
  
  );
 
  
}
               
export default ShowPicCarousel;

