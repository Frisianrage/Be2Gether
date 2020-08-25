import React from 'react';
import addpic from '../../Pics/addpic.png';
import {newerId} from '../Chat/userlist'


export default function Picturemessages(props) {
    const handleChange = (event) => {
        var fileElement = document.getElementById('getpic');
        var file = fileElement.files[0];
        console.log(file)
        console.log(props.firebase.store.app.firebase_.storage.TaskEvent)

        var storageRef = props.firebase.store.app.storage().ref();
        var metadata = {
            contentType: 'image/jpeg'
          };
          
          var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

          
          uploadTask.on(props.firebase.store.app.firebase_.storage.TaskEvent.STATE_CHANGED, 
            function(snapshot) {
              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case props.firebase.store.app.firebase_.storage.TaskState.PAUSED: // or 'paused'
                  console.log('Upload is paused');
                  break;
                case props.firebase.store.app.firebase_.storage.TaskState.RUNNING: // or 'running'
                  console.log('Upload is running');
                  break;
                
                default:
                    console.log("Something went wrong??")
                    break;
              }
            }, function(error) {   
            switch (error.code) {
              case 'storage/unauthorized':
                break;
          
              case 'storage/canceled':
                break;
          
              case 'storage/unknown':
                break;
            
                default:
                    console.log("Something went wrong??")
                    break;
            }
          }, function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL);
              const newMessageKey = props.firebase.db.app.database().ref().child('messages').push().key;
            var postData = {
                author: props.authUser.username,
                uid: props.authUser.uid,
                type: "image",
                body: downloadURL,
                createdAt: Date.now(),
                };
       
        
                var updates = {};
                updates['/chats/' + newerId + '/' + newMessageKey] = postData
                updates['/messages/' + newMessageKey] = postData;
                updates['/user-message/' + props.authUser.uid + '/' + newMessageKey] = postData;

                return props.firebase.db.app.database().ref().update(updates);
            });
          });
          
          


    }
    const handleClick = () => {
        document.getElementById("getpic").click()
            }
    return (
        <div>
            <img onClick={handleClick}  src={addpic} alt="test"></img>
            <input onChange={handleChange} type="file" id="getpic" style={{display: "none"}}></input>
        </div>
    )

}