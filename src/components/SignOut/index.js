import React from 'react';
import {Button} from 'react-bootstrap'
<<<<<<< Updated upstream
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (
  <Button className="signoutbtn" size="lg" variant="danger" onClick={firebase.doSignOut}>Log Out!</Button>
=======
 
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (
  <div>
<button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
  <Button className="signoutbtn" size="lg" variant="danger" onClick={firebase.doSignOut}>Log Out!</Button>

  <Button size="sm" variant="danger" onClick={firebase.doSignOut}>Log Out!</Button>
  </div>
  

>>>>>>> Stashed changes
);
 
export default withFirebase(SignOutButton);