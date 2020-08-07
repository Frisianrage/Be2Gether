import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import MessagesInput from './messagesInput'
import History from './history'


/*
const handleChange = (e) => console.log(e)

const error = () => console.log('Error')
const writeError = () => console.log('writeError')
const content = 'content'
*/


function Chat(props) {
    
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

export default withAuthorization(condition)(Chat);


/*
 {authUser.chats.map(message => {
                         return <p key={message.timestamp}>{message.content}</p>
                          })}*/
  