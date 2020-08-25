import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import MyCard from './MyCard';
import PartnerCard from './PartnerCard'
import giphy from '../../Pics/giphy.gif'


 
const HomePage = (props) => (
 <div>
   Here comes the Homepage!
 </div>
  
           
    
  
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);