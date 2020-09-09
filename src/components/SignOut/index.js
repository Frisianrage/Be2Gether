import React from 'react';
import {Button} from 'react-bootstrap'
 
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
  <Button className="signoutbtn" size="lg" variant="danger" onClick={firebase.doSignOut}>Log Out!</Button>

  <Button size="sm" variant="danger" onClick={firebase.doSignOut}>Log Out!</Button>

);
 
export default withFirebase(SignOutButton);