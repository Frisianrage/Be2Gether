import React, {useState} from 'react';

export default function MessagesInput(props) {
    const [textValue, setTextValue] = useState("") 
    const textAreaRef = React.createRef(); 
    function updateText(e) { e.preventDefault() 
      setTextValue(e.target.value) }
      
      console.log(props.firebase.db.app.database().ref().child("messages"))
      function writeNewMessage(e) {
        e.preventDefault()
        if(!textValue) return
        const newMessageKey = props.firebase.db.app.database().ref().child('messages').push().key;
        var postData = {
          author: props.authUser.username,
          uid: props.authUser.uid,
          body: textAreaRef.current.value,
          createdAt: Date.now(),
        };
        
          var updates = {};
          updates['/messages/' + newMessageKey] = postData;
          updates['/user-message/' + props.authUser.uid + '/' + newMessageKey] = postData;
        
          return props.firebase.db.app.database().ref().update(updates);

        
      }
      return (
        <form onSubmit={writeNewMessage}>
            <input ref={textAreaRef} onChange={updateText} value={textValue}></input>
            <br />
            <button type="submit">Send</button>
        </form>
      )
  }
  