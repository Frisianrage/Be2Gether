import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import Userlist from '../Chat/userlist'


 
const HomePage = (props) => (
  <AuthUserContext.Consumer> 
 {authUser => 
      <Userlist firebase={props.firebase} authUser={authUser} />
 }
  </AuthUserContext.Consumer>  
       
                        

           
    
  
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);