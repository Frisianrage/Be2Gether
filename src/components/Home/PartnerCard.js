import React from "react";
import Usercard from './Usercard'
import Search from './Search'

export default function PartnerCard(props) {
<<<<<<< Updated upstream
    console.log(props)
    return ( 
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
  const user = props.partner
  console.log(user)

  return ( 
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
  const user = props.partner

  return ( 
>>>>>>> Stashed changes
        <div>
        { props.partner && <Usercard user={user} /> }
        { !props.partner && <Search firebase={props.firebase} authUser={props.authUser}  /> }
        </div>
  )
}