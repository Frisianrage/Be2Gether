import React, {useState} from 'react';
import Picturemessages from './Picturemessages'

export default function MessagesInput(props) {
    const [textValue, setTextValue] = useState("") 
    var date = new Date();
    const timestamp = date.toTimeString().slice(0, 5)
    //const textAreaRef = React.createRef(); 

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
          body: textValue,
          timestamp,
          createdAt: Date.now(),
        };
       
          var updates = {};
          updates['chat/chats/' + props.authUser.friendwith.coupleid + '/' + newMessageKey] = postData
          updates['chat/messages/' + newMessageKey] = postData;
          updates['chat/user-message/' + props.authUser.uid + '/' + newMessageKey] = postData;

          document.getElementById("chat-picture-input").reset();
          setTextValue("")
          return props.firebase.db.app.database().ref().update(updates);
      }
    
  return (
    <div className="inputContainer">
      <div className="messageContainer">
        <form id="chat-picture-input" onSubmit={writeNewMessage}>
          <input value={textValue} onChange={updateText} ></input>
          <Picturemessages firebase={props.firebase} authUser={props.authUser} />
          <br />
          <button id="messageSubmit" type="submit">Send</button>
        </form>
      </div>
    </div>
        
       )
  }
  