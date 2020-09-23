import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import Chats from './Chats'


function Chatpage(props) {
      return (
            <div>
             {props.authUser && props.authUser.friendwith ?
             <Chats firebase={props.firebase} authUser={props.authUser} />
            :
            <div className="counterpage">
          <h2>You are not connected to someone! <br/> Please find your Contact and come back!!!</h2>
        </div> }
           </div>
          )
        }
 

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chatpage);