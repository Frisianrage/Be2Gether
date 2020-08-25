import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import MessagesInput from './messagesInput'
import History from './history'
import {newerId, userTwoName} from './userlist'


const Chatwindow = (props) => {   
return (
    <AuthUserContext.Consumer>   
          {authUser => (
              
              <div>
                   <h1 className="chatwindowhead">You are chatting with {userTwoName}</h1> 
                   
                      <div className="chats">
                        
                        
                      </div>
                          <br/>
                          
                          <History newerId={newerId} authUser={authUser} firebase={props.firebase} />
                          <MessagesInput authUser={authUser} firebase={props.firebase} />
                          
                          <div>
                            Login in as: <strong>{authUser.username}</strong>
                          </div>
  
              </div>
      )}
    </AuthUserContext.Consumer>
  )
}
   

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chatwindow);



              