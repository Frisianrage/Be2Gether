import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import Userlist from './userlist'

<<<<<<< Updated upstream
function Chats(props) {

return (
    <AuthUserContext.Consumer> 
          {authUser => 
                <Userlist firebase={props.firebase} authUser={authUser} />
          }
    </AuthUserContext.Consumer>  
  )
}
=======
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
         
 
>>>>>>> Stashed changes

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chats);


/*
 {authUser.chats.map(message => {
                         return <p key={message.timestamp}>{message.content}</p>
                          })}*/
  