import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import Userlist from './userlist'

function Chats(props) {

return (
    <AuthUserContext.Consumer> 
          {authUser => 
                <Userlist firebase={props.firebase} authUser={authUser} />
          }
    </AuthUserContext.Consumer>  
  )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chats);


/*
 {authUser.chats.map(message => {
                         return <p key={message.timestamp}>{message.content}</p>
                          })}*/
  