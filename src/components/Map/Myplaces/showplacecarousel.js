import React, {useState} from 'react';
import {Modal, Carousel} from 'react-bootstrap';

function ShowPlaceCarousel(props) {
   const handleClose = () => props.setShowpicsclicked(false);

   const [thisplacehistory, setThisPlacehistory] = useState([])
   const newerId = "EL2a3ZzudpaEiDverbOyzQUVep5H"

   const thiscity = props.placeinfos.city
   
   
   props.firebase.db.app.database().ref().child('/places/' + newerId )
  .once('value')
  .then( async function (snapshot) {
     let newArray = await snapshot.val(); 
     if (newArray){
      const places = Object.keys(newArray).map(key => newArray[key]);;
      setThisPlacehistory(places)
     } else (setThisPlacehistory([]))
   })
    
  return (
    <div className="placemodal">
<Modal size="xl" show={props.showpicsclicked} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{thiscity}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Carousel indicators={false}>
            {thisplacehistory.map(place => {
              if(place.city === thiscity) {
                return (
                <Carousel.Item className="carousel-item">
                <img
                  className="d-block w-100"
                  src={place.body}
                  alt={place.file_name}
                />
                <Carousel.Caption>
                  <h3>Our trip to {thiscity}</h3>
                  <p>Our trip to {thiscity}. We've been here... (Time)!!</p>
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
               
export default ShowPlaceCarousel;


/* 

const city = props.placeinfos.city
   
   
     props.firebase.db.app.database().ref().child('/places/' + newerId )
    .once('value')
    .then( async function (snapshot) {
       let newArray = await snapshot.val(); 
       if (newArray){
           const places = Object.keys(newArray).map(key => newArray[key]);;
        
           setPlacehistory(places)
       } else (setPlacehistory([]))
     })

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
    */