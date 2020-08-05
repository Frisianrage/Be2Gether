import React, {useState} from 'react';
import { AuthUserContext, withAuthorization } from '../Session'



const handleChange = (e) => console.log(e)

const error = () => console.log('Error')
const writeError = () => console.log('writeError')
const content = 'content'

const messagesInput = (props) => {
  const [textValue, setTextValue] = useState("") 
  const textAreaRef = React.createRef(); 
  function updateText(e) { e.preventDefault() 
    setTextValue(e.target.value) }

    console.log(props.firebase.currentUser)
    function writeNewMessage(e) {
      e.preventDefault()
      if(!textValue) return
      const newCommentKey = props.firebase.database("/messages/").ref().push().key
      var postData = {
        author: props.firebase.authUser.username,
        uid: props.firebase.authUser.uid,
        body: textAreaRef.current.value,
        createdAt: Date.now(),
      };
      /*
      var updates = {};
      updates['/comments/' + postID +"/"+ newCommentKey] = postData;
      if(authUser.uid !== posterID) {
        updates['/notifications/'+ posterID +"/"+ postID] = true;
        updates['/has-notifications/'+ posterID] = true;
      }*/
  
      setTextValue()
      // return props.firebase.database().ref().update(updates)
    }
    return (
      <form onSubmit={writeNewMessage}>
                       <input ref={textAreaRef} onChange={updateText} value={textValue}></input>
                        {error ? <p>{writeError}</p> : null}
                        <button type="submit">Send</button>
                    </form>
    )
}


const Chat = (props) => {
        
return (
  <AuthUserContext.Consumer>   
        {authUser => (
            
            <div>
                 <h1>Chat: {authUser.first_name} {authUser.last_name}</h1>
                    <div className="chats">
                      
                      "Here should be the chat history!!!"
                    </div>
                        <br/>
                        <messagesInput authUser={authUser} />
                        <div>
                          Login in as: <strong>{authUser.email}</strong>
                        </div>

            </div>
    )}
  </AuthUserContext.Consumer>
)
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(Chat);


/*
 {authUser.chats.map(message => {
                         return <p key={message.timestamp}>{message.content}</p>
                          })}*/
  