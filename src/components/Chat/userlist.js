import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import ChatId from './chatid'



let userOne;
let userTwo;
let newerId
function Userlist(props) {
  const [userlist, setuserlist] = useState([])
  props.firebase.db.app.database().ref().child('users/')
     .once('value')
     .then(function(snapshot) {
          let newArray = snapshot.val();
            if(newArray){
        const messages = Object.keys(newArray).map(key => newArray[key])
        setuserlist(messages)
      
        }
        }) 
        
       userOne = props.authUser.uid;
       const handleclick = (e) => {
        userTwo = e.currentTarget.id;
        newerId = ChatId(userOne, userTwo)
        }
       
  return <div className="chatHistory">
      <p>Userlist</p>
        {userlist.map(user => 
           
          (<div id={user.id} onClick={handleclick}>
                
                <Link to={ROUTES.CHATWINDOW}>{user.username}</Link>
                
         </div>))} 
         </div>
}
export {newerId}; 
export default Userlist;


