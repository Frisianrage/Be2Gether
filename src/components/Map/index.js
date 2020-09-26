import React from 'react';
<<<<<<< Updated upstream
import { withAuthorization } from '../Session';
import MyMap from "./mapwindow"

function Mappage(props) {
=======
import {withAuthorization } from '../Session';
import MyMap from './MyMap'

const Map = (props) => (
 <div>
   Here comes the Map!
 </div>
  
           
    
  
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Map);

function Mappage(props) {

function Mappage(props) {
      console.log(props.authUser.friendwith) 

>>>>>>> Stashed changes
      return (
        <div>
         {props.authUser && props.authUser.friendwith ?
         <MyMap firebase={props.firebase} authUser={props.authUser} />
        :
<<<<<<< Updated upstream
        <div className="counterpage">
          <h2>You are not connected to someone! <br/> Please find your Contact and come back!!!</h2>
=======

        <div className="counterpage">
          <h2>You are not connected to someone! <br/> Please find your Contact and come back!!!</h2>

        <div>
          <h1>You are not connected to anyone! Please find your Contact and come back!!!</h1>

>>>>>>> Stashed changes
        </div> }
       </div>
      )
    }
     
    const condition = authUser => !!authUser;

<<<<<<< Updated upstream
export default withAuthorization(condition)(Mappage);
=======

export default withAuthorization(condition)(Mappage);

export default withAuthorization(condition)(Mappage);

>>>>>>> Stashed changes
