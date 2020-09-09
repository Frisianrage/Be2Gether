import React from 'react';
import { withAuthorization } from '../Session';
import Chats from './Chats'

function Chatpage(props) {
      return (
            <div>
             {props.authUser && props.authUser.friendwith ?
             <Chats firebase={props.firebase} authUser={props.authUser} />
            :
            <div>
              <h1>You are not connected to anyone! Please find your Contact and come back!!!</h1>
            </div> }
           </div>
          )
        }
         
 

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chatpage);
  