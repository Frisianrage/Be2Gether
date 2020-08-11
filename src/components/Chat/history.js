import React, {useState} from 'react';




function History(props) {
   
    //var userId = props.authUser.uid;
     // var messageKey = props.firebase.db.app.database().ref().child('messages').push().key
  const [chathistory, setchathistory] = useState([])
  props.firebase.db.app.database().ref().child('chats/'+ props.newerId)
     .once('value')
     .then(function(snapshot) {
          let newArray = snapshot.val();
            if(newArray){
        const messages = Object.keys(newArray).map(key => newArray[key])
        setchathistory(messages)
      
        }
        }) 

  return <div className="chatHistory">
            {chathistory.map(message => <li>{message.author}: {message.body}</li>)}
         </div>
}
              
export default History;

