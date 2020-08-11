import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import MessagesInput from './messagesInput'
import History from './history'
import {newerId} from './userlist'

const Chatwindow = (props) => {
      
return (
    <AuthUserContext.Consumer>   
          {authUser => (
              
              <div>
                   <h1>Chat: {authUser.first_name} {authUser.last_name}</h1>
                      <div className="chats">
                        
                        
                      </div>
                          <br/>
                          <History newerId={newerId} authUser={authUser} firebase={props.firebase} />
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



              