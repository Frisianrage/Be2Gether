import React, {useState} from 'react';
import {Modal, Button, Container, Row, Col, Form, Image} from 'react-bootstrap';
import addpic from '../../../Pics/addpic.png';
import loading from  '../../../Pics/loading.gif'

export default function Newplacemodal(props) {
    const [isloading, setIsLoading] = useState(false)
    const [preview, setPreview] = useState([])

    const handleClose = () => props.setButtonclicked(false);

    const handleSave = () => console.log(test)

    const handleChange = (e) => {
        let loadedpictures = []
        var fileElement = document.getElementById('placepic');
        var allfiles = fileElement.files 
        const filesarray = Object.values(allfiles)
        const city = document.getElementById("cityinput").value
        const address = document.getElementById("addressinput").value
        const country = document.getElementById("countryinput").value
        const coupleId = props.newerId

        filesarray.map((file) => {
            var storageRef = props.firebase.store.app.storage().ref();
            var metadata = {
                contentType: 'image/jpeg'
              };
         
              var uploadTask = storageRef.child('images/' + coupleId + '/' + city + '/' + file.name).put(file, metadata);
        
              uploadTask.on(props.firebase.store.app.firebase_.storage.TaskEvent.STATE_CHANGED, 
                function(snapshot) {
                  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  setIsLoading(true)
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
                  const newPlaceKey = props.firebase.db.app.database().ref().child('places').push().key;
                var postData = {
                    author: props.authUser.username,
                    uid: props.authUser.uid,
                    type: "image",
                    body: downloadURL,
                    file_name: file.name,
                    createdAt: Date.now(),
                    city: city,
                    address: {address: address,
                      city: city, 
                      country: country},
                    coordinates: props.position ,
                    placeid: newPlaceKey,
                    };
           
                    var updates = {};
                    //places-together für Markerposition
                    updates['/places-together/' + coupleId + '/' + city] = postData
                    //places für Bilder
                    updates['/places/' + coupleId + '/' + city + '/' + newPlaceKey] = postData;
                    updates['/user-places/' + props.authUser.uid + '/' + city + '/' + newPlaceKey] = postData;
                    setIsLoading(false)
                    
                    return (props.firebase.db.app.database().ref().update(updates),
                    loadedpictures.push(postData))
                    
                    
                  });
              })
        })
        setPreview(loadedpictures)
    } 
    const handleClick = () => {
        document.getElementById("placepic").click()
            }

    return (
       <Modal size="lg" show={props.buttonclicked} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                 New Memory
             </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                  <Row>
                      <Col xs={1} md={1}>
                          City*: 
                      </Col>
                      <Col xs={5} md={5}>
                          <input id="cityinput" required></input>
                      </Col>
                      <Col xs={1} md={1}>
                          Address:
                      </Col>
                      <Col xs={5} md={5}>
                          <input id="addressinput"></input>
                      </Col>
                  </Row>
                  <br />
                  <Row>
                      <Col xs={1} md={1}>
                          Country:
                      </Col>
                      <Col xs={5} md={5}>
                          <input id="countryinput"></input>
                      </Col>
                  </Row>
                  <br />
                  <Form>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Story</Form.Label>
                          <Form.Control as="textarea" rows="3" />
                      </Form.Group>
                  </Form>
                  <Row>
                      <Col xs={2} md={2}>
                          Pictures:
                      </Col>
                      <Col xs={10} md={10}>
                          { preview && preview.map((pic, key) => <div key={key} className="previewpic">
                            <Image src={pic.body} alt="preview" thumbnail />
                            </div>)}
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={6} md={4}>
                          <Image onClick={handleClick} src={addpic} thumbnail />
                          <input multiple accept="image/*" onChange={handleChange} type="file" id="placepic" style={{display: "none"}}></input>
                          {isloading && <img src={loading} alt="loading"></img>}
                      </Col>
                  </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                Save Memory
                </Button> 
            </Modal.Footer>
            <p><small>*Pflichtfeld</small></p>
        </Modal>
    );
}