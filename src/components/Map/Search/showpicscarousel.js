import React, {useState, useEffect} from 'react';
import {Modal, Carousel} from 'react-bootstrap';


function ShowPicCarousel(props) {
   const [placehistory, setPlacehistory] = useState([])
   const city = props.info.raw[0].address.city 
   const country = props.info.raw[0].address.country 
   const storageUrl = props.firebase.db.app.database().ref().child('map/places/' + props.authUser.friendwith.coupleid + '/' + country + '/' + city)
  
  useEffect(() => {
    let mounted = true
  
    storageUrl.once('value')
    .then( async function (snapshot) {
       let newArray = await snapshot.val();
       if(mounted) { 
        if (newArray){
            const places = Object.keys(newArray).map(key => newArray[key]);;
            setPlacehistory(places)
        } 
    }}) 
    return () => {
      mounted = false
    }
  })

  const handleClose = () => props.setShowpicsclicked(false);
    
  return (
    <div className="placemodal">
      <Modal size="xl" show={props.showpicsclicked} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{city}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Carousel indicators={false}>
              {placehistory.map((place, key) => 
               <Carousel.Item key={key} className="carousel-item">
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
            </Carousel>
          </Modal.Body>
      </Modal>
    </div>
  );  
}
               
export default ShowPicCarousel;