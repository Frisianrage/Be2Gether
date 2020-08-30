import React, {useState, useEffect} from 'react';
import {Modal, Carousel} from 'react-bootstrap';

function ShowPlaceCarousel(props) {
  const handleClose = () => {
    props.setShowpicsclicked(false);
  }

  const newerId = props.newerId
  const thiscity = props.placeinfos.address.city 
  const storageUrl =  props.firebase.db.app.database().ref().child('/places/' + newerId + '/' + thiscity)
  
  useEffect(() => {
    let mounted = true
  
    storageUrl.once('value')
    .then( async function (snapshot) {
      let newArray = await snapshot.val(); 
      if(mounted) {
        if (newArray){
          const places = Object.keys(newArray).map(key => newArray[key]);;
          props.setThisPlacehistory(places)
        }
      }
    })
    return () => {
     mounted = false
    }
  })
  
  return (
    <div className="placemodal">
      <Modal size="xl" show={props.showpicsclicked} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{thiscity}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Carousel indicators={false}>
                  {props.thisplacehistory.map((place, key) => 
                  <Carousel.Item key={key} className="carousel-item">
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
                    ) 
                  }
                </Carousel>
             </Modal.Body>
        </Modal>
    </div>
    );
}
               
export default ShowPlaceCarousel;