import React, {useState, useEffect} from 'react';
import {Modal, Carousel} from 'react-bootstrap';

function ShowPlaceCarousel(props) {
  const [thisplacehistory, setThisPlacehistory] = useState([])
  //const newerId = props.authUser.friendwith.coupleid
  const thiscity = props.placeinfos.address.city
  const thiscountry = props.placeinfos.address.country
  const storageUrl =  props.firebase.db.app.database().ref().child('map/places/' + props.authUser.friendwith.coupleid + '/' + thiscountry + '/' + thiscity)

  const handleClose = () => {
    props.setShowpicsclicked(false);
  }
 
  useEffect(() => {
    let mounted = true
  
    storageUrl.once('value')
    .then( async function (snapshot) {
      let newArray = await snapshot.val(); 
      if(mounted) {
        if (newArray){
          const places = Object.keys(newArray).map(key => newArray[key]);;
          setThisPlacehistory(places)
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
                  {thisplacehistory.map((place, key) => 
                  <Carousel.Item key={key} className="carousel-item">
                      <img 
                        className="d-block w-100"
                        src={place.body}
                        alt={place.file_name}
                      />
                      <Carousel.Caption>
                        <h3>Our memories from {thiscity}</h3>
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