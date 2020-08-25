import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import Userlist from './userlist'


/*
const handleChange = (e) => console.log(e)

const error = () => console.log('Error')
const writeError = () => console.log('writeError')
const content = 'content'
*/


function Chat(props) {
 
    
return (
  <AuthUserContext.Consumer> 
 {authUser => 
      <Userlist firebase={props.firebase} authUser={authUser} />
 }
  </AuthUserContext.Consumer>  
    )}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chat);


/*
 {authUser.chats.map(message => {
                         return <p key={message.timestamp}>{message.content}</p>
                          })}*/
  