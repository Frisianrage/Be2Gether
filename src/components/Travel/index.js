import React from 'react';
import { withAuthorization } from '../Session'
import MyTravel from './MyTravel'
<<<<<<< Updated upstream

const Travelpage = (props) => { 
=======
 

const Travelpage = (props) => {
  console.log(props.authUser.friendwith) 

>>>>>>> Stashed changes
  return (
    <div>
     {props.authUser && props.authUser.friendwith ?
     <MyTravel firebase={props.firebase} authUser={props.authUser} />
    :
    <div>
      <div className="counterpage">
          <h2>You are not connected to someone! <br/> Please find your Contact and come back!!!</h2>
        </div>
<<<<<<< Updated upstream
=======

      <h1>You are not connected to anyone! Please find your Contact and come back!!!</h1>

>>>>>>> Stashed changes
    </div> }
   </div>
  )
}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Travelpage);