import React from 'react';
import { withAuthorization } from '../Session'
import MyTravel from './MyTravel'

const Travelpage = (props) => { 
  return (
    <div>
     {props.authUser && props.authUser.friendwith ?
     <MyTravel firebase={props.firebase} authUser={props.authUser} />
    :
    <div>
      <div className="counterpage">
          <h2>You are not connected to someone! <br/> Please find your Contact and come back!!!</h2>
        </div>
    </div> }
   </div>
  )
}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Travelpage);