import React from 'react';
 
import { withAuthorization } from '../Session';
 
const Chat = () => (
  <div>
    <h1>Chat</h1>
    <p>The Chat is accessible by every signed in user.</p>
  </div>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Chat);