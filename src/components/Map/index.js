import React from 'react';
import { withAuthorization } from '../Session';
import MyMap from "./mapwindow"

function Mappage(props) {
      return (
        <div>
         {props.authUser && props.authUser.friendwith ?
         <MyMap firebase={props.firebase} authUser={props.authUser} />
        :
        <div className="counterpage">
          <h2>You are not connected to someone! <br/> Please find your Contact and come back!!!</h2>
        </div> }
       </div>
      )
    }
     
    const condition = authUser => !!authUser;

export default withAuthorization(condition)(Mappage);
