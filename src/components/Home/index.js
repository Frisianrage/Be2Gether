import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';

const HomePage = (props) => (
 <div>
   Here comes the Homepage!
 </div>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);
