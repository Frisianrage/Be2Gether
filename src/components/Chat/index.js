import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import Chatwindow from './chatwindow'

function Chats(props) {

return (
    <AuthUserContext.Consumer> 
          {authUser =>  
                <Chatwindow firebase={props.firebase} authUser={authUser} />
          }
    </AuthUserContext.Consumer>  
  )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chats);
  