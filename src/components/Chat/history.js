import React,  {useState} from 'react';
import PictureModal from './picturemodal'

function History(props) {
  
   
  const [chathistory, setchathistory] = useState([])
  const [selectedImage, setSelectedImage] = useState(false)
  const [imageWasClicked, setImageWasClicked] = useState(false)
  
<<<<<<< Updated upstream
  
    props.firebase.db.app.database().ref().child('chat/chats/'+ props.authUser.friendwith.coupleid)
   .once('value')
   .then( async function (snapshot) {
      let newArray = await snapshot.val(); 
      if (newArray){
        const messages = Object.keys(newArray).map(key => newArray[key]);
        setchathistory(messages)
      } else (setchathistory([]))
    }) 

    const handleClick = (e) => {
      setSelectedImage(e.target)
      if(!imageWasClicked) {
      setImageWasClicked(true);
=======
  props.firebase.db.app.database().ref().child('chat/chats/'+ props.authUser.friendwith.coupleid)
  .once('value')
  .then( async function (snapshot) {
    let newArray = await snapshot.val(); 
    if (newArray){
      const messages = Object.keys(newArray).map(key => newArray[key]);
      setchathistory(messages)
    } else (setchathistory([]))
  }) 
   
  const handleClick = (e) => {
    setSelectedImage(e.target)
    if(!imageWasClicked) {
    setImageWasClicked(true);
>>>>>>> Stashed changes
    } else setImageWasClicked(false)
  }

  return <div className="test">
            <div className="historyContainer">
                  <div className="chatHistory">
                    {chathistory.map((message, key) => 
                          <div key={key} className={(message.author === props.authUser.username) ? "right" : "left"}>
                            <li id={chathistory.length}>
                              {(message.type === "image") ?
<<<<<<< Updated upstream
                              <div className={(message.author === props.authUser.username) ? "chatme" : "chatyou"}>
                                  <img onClick={handleClick} id={message.name} className={(message.author === props.authUser.username) ? "chatme picme" : " chatyou picyou"} src={message.body} alt="Something is wrong" ></img>
                                  <small className="timestamp">{message.timestamp}</small>
                              </div>
                                
                                  : 
                                <p className={(message.author === props.authUser.username) ? "chatme" : "chatyou"}>{message.body}<small className="timestamp">{message.timestamp}</small></p> }
=======
                              <div>
                                <img onClick={handleClick} id={message.name} className={(message.author === props.authUser.username) ? "picme" : "picyou"} src={message.body} alt="Something is wrong" ></img>
                                <small>{message.timestamp}</small>
                              </div>
                                  :
                                <div className={(message.author === props.authUser.username) ? "chatme" : "chatyou"}>
                                  <span className="messagebody">{message.body}</span>
                                  <small className="timestamp">{message.timestamp}</small>
                                </div>}
>>>>>>> Stashed changes
                            </li>
                          </div> 
                    )} 
                  </div> 
              </div>
             { imageWasClicked && <PictureModal messagebody={selectedImage} imageWasClicked={imageWasClicked} setImageWasClicked={setImageWasClicked} /> } 
        </div>
}

export default History;