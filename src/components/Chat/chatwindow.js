import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import MessagesInput from './messagesInput'
import History from './history'

const Chatwindow = (props) => { 
 
  return (<AuthUserContext.Consumer>   
              {authUser => (
                  <div className="chatwindow">
                      <h1 className="chatwindowhead">You are chatting with {authUser.friendwith.first_name}</h1> 
                      <div>
                        <div>
                          <History authUser={authUser} firebase={props.firebase} />
                          <MessagesInput authUser={authUser} firebase={props.firebase} />
                          Login in as: <strong>{authUser.username}</strong>
                        </div>
                      </div>
                  </div> 
              )}
          </AuthUserContext.Consumer>
  )
}
   
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chatwindow);              