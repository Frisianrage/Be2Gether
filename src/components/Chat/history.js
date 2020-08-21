import React,  {useState} from 'react';





function History(props) {
   
    //var userId = props.authUser.uid;
     // var messageKey = props.firebase.db.app.database().ref().child('messages').push().key
  const [chathistory, setchathistory] = useState([])
  
    props.firebase.db.app.database().ref().child('chats/'+ props.newerId)
   .once('value')
   .then( async function (snapshot) {
      let newArray = await snapshot.val() 
      if (newArray){

        const messages = Object.keys(newArray).map(key => newArray[key]);
      
        setchathistory(messages)
      } else (setchathistory([]))
         
   
    }) 
    
 
  return <div className="historyContainer">
          <div className="chatHistory">

            {chathistory.map(message => 
                  <div className={(message.author == props.authUser.username) ? "right" : "left"}>
                    <li className={(message.author == props.authUser.username) ? "chatme" : "chatyou"}>
                      {message.body}
                   </li>
                  </div>
                  
            )} 

          </div>

  </div>
  
}
              
export default History;

