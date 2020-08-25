import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';

const Map = (props) => (
 <div>
   Here comes the Map!
 </div>
  
           
    
  
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Map);