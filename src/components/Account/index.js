import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import PasswordChangeForm from '../PasswordChange';
import {Container, Row, Col, Button} from 'react-bootstrap';
import addpic from '../../Pics/addpic.png'
import PartnerCard from './PartnerCard'

const AccountPage = (props) => {
  console.log(props)
  const partner = props.authUser.friendwith
  const handleChange = (event) => {
  
      var fileElement = document.getElementById('getpic');
      var file = fileElement.files[0];
    
      var storageRef = props.firebase.store.app.storage().ref();
      var metadata = {
          contentType: 'image/jpeg'
        };
        
      var uploadTask = storageRef.child('images/' + props.authUser.uid + '/account/' + file.name).put(file, metadata);
       
      uploadTask.on(props.firebase.store.app.firebase_.storage.TaskEvent.STATE_CHANGED, 
        function(snapshot) {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
            }, 
        function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL);
            let newavatar = downloadURL
            let updates = {}
            if(props.authUser.friendwith) 
            {
            updates['/users/' + props.authUser.uid + '/avatar/'] = newavatar;
            updates['/users/' +  props.authUser.friendwith.id + '/friendwith/avatar/'] = newavatar}
            else {
            updates['/users/' + props.authUser.uid + '/avatar/'] = newavatar}
            
            return props.firebase.db.app.database().ref().update(updates)
         
        });
      });
  }

  const handleClick = () => {
      document.getElementById("getpic").click()
  }

  const handleAccept = () => {
    var requestsender = "accepted";
    var requestreciever = "accepted"

    var updates = {};
    updates['users/' + props.authUser.friendwith.id + '/friendwith/status/'] = requestsender;
    updates['users/' + props.authUser.uid + '/friendwith/status/'] = requestreciever;
  
    return (props.firebase.db.app.database().ref().update(updates),
    window.location.reload())
  }



  const handleDecline = () => {
    var requestsender = {}
    var requestreciever = {}

    var updates = {};
    updates['users/' + props.authUser.friendwith.id + '/friendwith/'] = requestsender;
    updates['users/' + props.authUser.uid + '/friendwith/'] = requestreciever;
  
    return (props.firebase.db.app.database().ref().update(updates),
    window.location.reload())
  }
  
  return (
  
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="accountpage">
        
          <Container className="account">
              <Row >
               <div>
                 <Row>
                 <Col md={5}>
                 
                    <div className="accountrow">
                      <h1 className="accounthead">Account: {authUser.first_name} {authUser.last_name} <img onClick={handleClick}  src={addpic} alt="test"></img></h1>
                      <p>Username: {authUser.username}</p>
                      <p>Firstname: {authUser.first_name}</p>
                      <p>Lastname: {authUser.last_name}</p>
                      <p>Age: {authUser.age}</p>
                      <p>E-Mail: {authUser.email}</p>
                 
                      <div className="profilpicarea">
                      <input onChange={handleChange} type="file" id="getpic" multiple accept="image/*" style={{display: "none"}}></input>
                      </div>
                 
                    </div>
                </Col>
                <Col md={5}>
                  <div className="accountrow">
                    <Row>
                    <img className="cardpic" src={authUser.avatar} alt="Avatar"></img>
                    </Row>
                   
                 
                  </div>
                </Col>
                <Col md={2}>
                  <Row>
                    <PartnerCard firebase={props.firebase} partner={partner} authUser={authUser} /> 
                  </Row>
                  <Row>
                    { partner && !partner.sender && partner.status === "pending" ? <div>
                          <Button variant="success" onClick={handleAccept}>Accept request</Button>
                          <Button variant="danger" onClick={handleDecline}>Decline request</Button>
                          </div> : "" }
                  
                  </Row>
                
                </Col>
                 </Row>
              
               </div>
                
              
              </Row>
              <Row>
              <div className="accountpassword">
                <h3>Change your Password</h3>
                <PasswordChangeForm />
                </div>
              </Row>
          </Container>     
        
      </div>
    
    )}
  </AuthUserContext.Consumer>
  
);}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);
