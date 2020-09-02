import React, {useState, useEffect} from 'react';
import Cardlist from './Cardlist'


const Country = (props) => {
  const city = props.hash.substring(1)
  const [thiscountry, setThiscountry] = useState()
  const storageUrl =  props.firebase.db.app.database().ref().child('map/places-together/' + props.newerId + '/' + city)
    
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
            <Cardlist firebase={props.firebase} newerId={props.newerId} country={thiscountry} city={city} />
        </div>
         
      )
}


export default Country


/*
{memo.pictures.map(pic => <img className="bigpic" src={pic.body} alt="alttext"></img> )} 




*/