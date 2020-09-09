import React, {useState, useEffect} from "react";
import Request from './Request'

export default function Search(props) {
    const [partnermail, setPartnermail] = useState("")
    const [partner, setPartner] = useState({})
    const [showRequest, setShowRequest] = useState(false)
    
    useEffect(() => {
      let mounted = true
      props.firebase.db.app.database().ref().child('users/')
      .once('value')
      .then( async function (snapshot) {
          let newArray = await snapshot.val(); 
          if(mounted) {
              if (newArray){
                const usersarray = Object.keys(newArray).map(key => newArray[key])
                const maillist = usersarray.filter(user => user.email === partnermail)
                setPartner(maillist)
              } else (setPartner([]))
          }
      }) 
      return () => {
      mounted = false
      }
  })

  const handleClick = (e) => {
    setShowRequest(true)
  }
  
  const handleChange = (e) => {
    const value = e.target.value;
    setPartnermail(value)
    
    }

    return ( 
        <div>
            { showRequest && <Request firebase={props.firebase} authUser={props.authUser} partner={partner} /> }
            <input type="text" placeholder="Look for your partner" onChange={handleChange} name="partner" ></input><br /><button onClick={handleClick}>Search</button> 
        </div>
          )
}