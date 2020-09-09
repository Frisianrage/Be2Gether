import React, {useState, useEffect} from 'react';
import Cardlist from './Cardlist'
//import {Card, Button} from 'react-bootstrap';


const AltCountry = (props) => {
    const newerId = props.authUser.friendwith.coupleid
    const [cities, setCities] = useState([])
    const country = props.search.substring(1)
    const placestorageUrl = props.firebase.db.app.database().ref().child('travel/travel-memories/' + newerId + '/' + country)
        
    useEffect(() => {
    let mounted = true
    placestorageUrl.once('value').then( async function (snapshot) {
        let newArray = await snapshot.val();
        if(mounted) {
            if (newArray){
            const memories = Object.keys(newArray);
            setCities(memories)
            }
        }
        })
        return () => {
        mounted = false
        }
    }
    )

    return (
        
    <div>
        <h3> Memories from {country}</h3>
        <hr />
      {cities.map((memo, key) => (
        <div>
            <h5> Memories from {memo}</h5>
            <div key={key}>
                <Cardlist firebase={props.firebase} newerId={newerId} country={country} city={memo} />                 
            </div>
        </div>
        ))}
    </div>  
    )
}


export default AltCountry