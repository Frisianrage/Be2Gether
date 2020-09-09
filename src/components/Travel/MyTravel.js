import React, {useState, useEffect} from 'react';
import { withAuthorization } from '../Session';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const MyTravel = (props) => {
  const [countries, setCountries] = useState([])
  const newerId = props.authUser.friendwith.coupleid
  const storageUrl = props.firebase.db.app.database().ref().child('travel/travel-memories/' + newerId)

  useEffect(() => {
    let mounted = true
    storageUrl.once('value')
    .then(async function (snapshot) {
       const newArray = await snapshot.val();
       if(mounted){
        if(newArray){
          const places = Object.keys(newArray).map(key => key);
          setCountries(places)
        } 
       }     
    })
    return () => {
      mounted = false
    }
  }
  )    
  return (
    <div className="Travel-blog">
    <h2>
     You have been to these countries:
    </h2> 
    {countries.map((place, key) => (<div key={key} ><br /><h1><Link to={{pathname: ROUTES.ALTTRAVEL, search: place}}>{place}</Link></h1></div>))}

    <div>
    <h2>
     You have been to these countries:
    </h2> 
    {countries.map(place => (<div><br /><Link to={{pathname: ROUTES.ALTTRAVEL, search: place}}>{place}</Link></div>))}

   </div>
  )
}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(MyTravel);