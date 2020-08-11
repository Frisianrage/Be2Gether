import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

//let userIdB;
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
        
       

  return <div className="chatHistory">
      <p>Userlist</p>
        {userlist.map(user => (<div>

                <Link to={ROUTES.CHATWINDOW} id={user.id}>{user.username}</Link>
                
         </div>))} 
         </div>
}
             
export default Userlist;

