import React from 'react';
import {Button} from 'react-bootstrap'
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (
  <Button className="signoutbtn" size="lg" variant="danger" onClick={firebase.doSignOut}>Log Out!</Button>
);
 
export default withFirebase(SignOutButton);