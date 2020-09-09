import React from "react";
import Usercard from './Usercard'
import Search from './Search'

export default function PartnerCard(props) {
    console.log(props)
    return ( 
  const user = props.partner
  console.log(user)

  return ( 
  const user = props.partner

  return ( 
        <div>
        { props.partner && <Usercard user={user} /> }
        { !props.partner && <Search firebase={props.firebase} authUser={props.authUser}  /> }
        </div>
  )
}