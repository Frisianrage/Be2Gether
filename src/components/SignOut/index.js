import React from 'react';
 
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => (
<<<<<<< Updated upstream
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
=======
  <Button className="signoutbtn" size="lg" variant="danger" onClick={firebase.doSignOut}>Log Out!</Button>
>>>>>>> Stashed changes
);
 
export default withFirebase(SignOutButton);