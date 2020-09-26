import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';


export default function Memory(props) {

const city = props.location.hash.substring(1)
const time = props.location.search.split('%').join(' ').substring(1);
const [isloading, setIsloading] =useState(false)
const [memory, setMemory] = useState([])

const storageUrl = props.firebase.db.app.database().ref().child('travel/city-memories/' + props.authUser.friendwith.coupleid + '/' + city + '/' + time)

  storageUrl.once('value')
  .then(async function (snapshot) {
    const newArray = await snapshot.val();
    if(newArray){
        const mymemory = Object.keys(newArray).map(key => newArray[key]);
        setMemory(mymemory)
        setIsloading(true) 
      }
     })
    

return (
    <div>
        <div>
            <h2>{ isloading && memory[0].body.headline}</h2>
        </div> 
        <div>
         { isloading && memory[0].body.text}
        </div>
        <div className="placemodal">
        <Carousel indicators={false}>
              { isloading && memory[0].pictures.map((place, key) => 
               <Carousel.Item key={key} className="carousel-item">
                <img
                  className="d-block w-100"
                  src={place.body}
                  alt={place.file_name}
                />
                <Carousel.Caption>
                  <h3>{ isloading && memory[0].body.headline}</h3>
                 
                </Carousel.Caption>
              </Carousel.Item>
               )}
            </Carousel>
        </div>
        
    </div>
   
  )
}
/*
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chats);

*/
