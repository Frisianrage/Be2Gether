import React, {useState, useEffect} from 'react';
import { withAuthorization } from '../Session';
import {Image} from 'react-bootstrap';

const Travel = (props) => {
    const urlhash = props.history.location.hash
    const city = urlhash.substring(1)

    const [thisplacehistory, setThisPlacehistory] = useState([])
    const [placepictures, setPlacepictures] = useState([])
    const newerId = "Hy5UQEqX1FNhYsverbOyzQUVep5H"
    
    const storageUrl =  props.firebase.db.app.database().ref().child('map/places-together/' + newerId + '/' + city)
    
  useEffect(() => {
    let mounted = true
    storageUrl.once('value').then( async function (snapshot) {
      let newArray = await snapshot.val();
      if(mounted) {
        if (newArray){
          const places = Object.keys(newArray).map(key => newArray[key]);
          const pictures = places[5]
          setPlacepictures(pictures)
          setThisPlacehistory(places)
        }
      }
    })
    return () => {
        
     mounted = false
    }
  })
 
   return (
 <div>
     <p>{thisplacehistory[2]}</p>
     {placepictures.map((pic, key) => <Image className="bigpic" key={key} src={pic.body} alt="preview"/> )}
 </div>
 );
}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Travel);

//      
  
