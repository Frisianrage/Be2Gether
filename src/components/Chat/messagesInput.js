import React, {useState} from 'react';
import {newerId} from './userlist'
import Picturemessages from '../Picturemessages/Picturemessages'



export default function MessagesInput(props) {
    const [textValue, setTextValue] = useState("Test") 
    const textAreaRef = React.createRef(); 
    function updateText(e) { e.preventDefault() 
      setTextValue(e.target.value) }
      
      
      function writeNewMessage(e) {
        e.preventDefault()
        if(!textValue) return
        const newMessageKey = props.firebase.db.app.database().ref().child('messages').push().key;
        var postData = {
          type: "text",
          author: props.authUser.username,
          uid: props.authUser.uid,
          body: textAreaRef.current.value,
          createdAt: Date.now(),
        };
       
        
          var updates = {};
          updates['/chats/' + newerId + '/' + newMessageKey] = postData
          updates['/messages/' + newMessageKey] = postData;
          updates['/user-message/' + props.authUser.uid + '/' + newMessageKey] = postData;


          document.getElementById("test").reset();

          return props.firebase.db.app.database().ref().update(updates);
          
      }
    
      return (
        <div className="historyContainer">
          <div className="messageContainer">
          <form id="test" onSubmit={writeNewMessage}>
            <input id="ttt" ref={textAreaRef} onChange={updateText} >
           
          </input>
          <Picturemessages firebase={props.firebase} authUser={props.authUser} />
            <br />
            <button id="messageSubmit" type="submit">Send</button>
            
          </form>

          
          </div>
          
          
        </div>
        
      )
  }
  