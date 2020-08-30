import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import ChatId from './chatid'

let userOne;
let userTwo;
let userTwoName;
let newerId



function MapUserlist(props) {
  const [userlist, setuserlist] = useState([])
  const storageUrl = props.firebase.db.app.database().ref().child('users/')
  
  useEffect(() => {
    let mounted = true
    storageUrl.once('value')
    .then(function(snapshot) {
         let newArray = snapshot.val();
         if(mounted) {
            if(newArray){
              const messages = Object.keys(newArray).map(key => newArray[key])
              setuserlist(messages)
            }
         }
      }) 
      return () => {
        mounted = false
      }
  })
  
      

  userOne = props.authUser.uid;
       
  const handleclick = (e) => {
    userTwoName = e.currentTarget.title
    userTwo = e.currentTarget.id
  newerId = ChatId(userOne, userTwo)  
  }
 
  return <div className="userList">
                <p>Userlist</p>
                  {userlist.map((user, key) => (
                      <div key={key} title={user.username} id={user.id} onClick={handleclick}>
                          <Link to={{pathname: ROUTES.MAPWINDOW, hash: user.id}}>{user.username}</Link>
                      </div>
                    )
                  )} 
         </div>
}

export {newerId, userTwo, userTwoName}; 
export default MapUserlist;