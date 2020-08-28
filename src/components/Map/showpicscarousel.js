import React, {useState} from 'react';
import {Modal, Carousel} from 'react-bootstrap';

function ShowPicCarousel(props) {
   const handleClose = () => props.setShowpicsclicked(false);

   const [placehistory, setPlacehistory] = useState([])
   const newerId = "EL2a3ZzudpaEiDverbOyzQUVep5H"
   const city = props.placeinfos.raw[0].address.city
   
   
     props.firebase.db.app.database().ref().child('/places/' + city + '/' + newerId )
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
            {placehistory.map(place => 
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
              </Carousel.Item>)}
  
</Carousel>

        </Modal.Body>

      </Modal>
    </div>
      
  
  );
 
  
}
               
export default ShowPicCarousel;

/*


  {placehistory.map((message, key) => 
                           <Carousel.Item>
                           <img
                             className="d-block w-100"
                             src="holder.js/800x400?text=First slide&bg=373940"
                             alt="First slide"
                           />
                           <Carousel.Caption>
                             <h3>First slide label</h3>
                             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                           </Carousel.Caption>
                         </Carousel.Item>
                    )} */