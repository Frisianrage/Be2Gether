import React from "react";
import Usercard from './Usercard'

export default function MyCard(props) {
  const user = props.authUser
  
  return ( 
  <div>
    <Usercard user={user} />
  </div>
    )
}
