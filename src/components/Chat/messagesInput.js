import React, {useState} from 'react';

export default function MessagesInput(props) {
    const [textValue, setTextValue] = useState("") 
    const textAreaRef = React.createRef(); 
    function updateText(e) { e.preventDefault() 
      setTextValue(e.target.value) }
      console.log(props.firebase.messages)
      console.log(props.firebase.db.app)
      function writeNewMessage(e) {
        e.preventDefault()
        if(!textValue) return
        //const newCommentKey = props.firebase.database("/messages/").ref().push().key
        var postData = {
          author: props.authUser.username,
          uid: props.authUser.uid,
          body: textAreaRef.current.value,
          createdAt: Date.now(),
        };
        props.firebase
        .message(props.authUser.uid)
        .set({
           postData
          });


        /*
        var updates = {};
        updates['/comments/' + postID +"/"+ newCommentKey] = postData;
        if(authUser.uid !== posterID) {
          updates['/notifications/'+ posterID +"/"+ postID] = true;
          updates['/has-notifications/'+ posterID] = true;
        }
    
        setTextValue()
         return (newCommentKey, postData)*/
      }
      return (
        <form onSubmit={writeNewMessage}>
                         <input ref={textAreaRef} onChange={updateText} value={textValue}></input>
                          'Test'
                          <button type="submit">Send</button>
                      </form>
      )
  }
  
  /* {error ? <p>{writeError}</p> : null}
  .user(authUser.user.uid)
          .set({
            username,
            email,
            first_name,
            last_name,
            age,
            roles,
            chat,
          }); */