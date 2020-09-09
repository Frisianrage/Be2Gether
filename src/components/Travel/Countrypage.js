import React, {useState, useEffect} from 'react';
import Cardlist from './Cardlist'


const Country = (props) => {
  console.log(props)
  const newerId = props.authUser.friendwith.coupleid
  const city = props.hash.substring(1)
  const [thiscountry, setThiscountry] = useState()
  const storageUrl =  props.firebase.db.app.database().ref().child('map/places-together/' + newerId + '/' + city)
    
    useEffect(() => {
    let mounted = true

    storageUrl.once('value').then( async function (snapshot) {
      let newArray = await snapshot.val();
      if(mounted) {
        if (newArray){
          const citydetails = Object.keys(newArray).map(key => newArray[key]);
          const country = citydetails[0].country
          setThiscountry(country)
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
          <h3>Memories from {thiscountry}</h3> 
          <hr />
          <div>
            <h5> Memories from {city}</h5>
            <div>
              <Cardlist firebase={props.firebase} newerId={newerId} country={thiscountry} city={city} />
            </div>
          </div> 
        </div>
      )
}


export default Country
