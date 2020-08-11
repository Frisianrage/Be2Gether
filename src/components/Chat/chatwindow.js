import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import MessagesInput from './messagesInput'
import History from './history'

const Chatwindow = (props) => {
//var userId = props.authUser.uid;
         
return (
    <AuthUserContext.Consumer>   
          {authUser => (
              
              <div>
                   <h1>Chat: {authUser.first_name} {authUser.last_name}</h1>
                      <div className="chats">
                        
                        
                      </div>
                          <br/>
                          <History authUser={authUser} firebase={props.firebase} />
                          <MessagesInput authUser={authUser} firebase={props.firebase} />
                          
                          <div>
                            Login in as: <strong>{authUser.email}</strong>
                          </div>
  
              </div>
      )}
    </AuthUserContext.Consumer>
  )
}
   

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chatwindow);



              