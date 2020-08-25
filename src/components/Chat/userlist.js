import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import ChatId from './chatid'

let userOne;
let userTwo;
let userTwoName;
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
    userTwoName = e.currentTarget.title
    userTwo = e.currentTarget.id
  newerId = ChatId(userOne, userTwo)  
  ;
  
  
  const content = document.getElementById("test")
    
  if (content) {
        content.reset();
    }
  }
        
    

  return <div className="userList">
      <p>Userlist</p>
        {userlist.map(user => 
           
          (<div title={user.username} id={user.id} onClick={handleclick}>
                
                <Link to={{pathname: ROUTES.CHATWINDOW, hash: user.id}}>{user.username}</Link>
                
         </div>))} 
         </div>
}

export {newerId, userTwo, userTwoName}; 
export default Userlist;


