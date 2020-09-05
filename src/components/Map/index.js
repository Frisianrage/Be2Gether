import React from 'react';
import {withAuthorization } from '../Session';
import MyMap from './MyMap'

function Mappage(props) {
      console.log(props.authUser.friendwith) 
      return (
        <div>
         {props.authUser && props.authUser.friendwith ?
         <MyMap firebase={props.firebase} authUser={props.authUser} />
        :
        <div>
          <h1>You are not connected to anyone! Please find your Contact and come back!!!</h1>
        </div> }
       </div>
      )
    }
     
    const condition = authUser => !!authUser;

export default withAuthorization(condition)(Mappage);