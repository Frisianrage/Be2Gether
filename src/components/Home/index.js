import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import undercon from '../../Pics/undercon.png'

const HomePage = (props) => (
<div className="homepage">
  <img className="homepagepic" src={undercon} alt="test"></img>
</div>
  
 
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);
