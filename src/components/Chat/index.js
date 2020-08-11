import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';



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
                 <h1>Coming soon!!!</h1>
                    <p>Here will be an overview of all Chats from {authUser.first_name} {authUser.last_name}, also known as {authUser.username} </p>

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
  