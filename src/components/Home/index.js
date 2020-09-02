import React from 'react';
import { withAuthorization } from '../Session';
import MyCard from './MyCard'

const HomePage = (props) => (
 <div>
   <MyCard props={props}/>
 </div>

);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);