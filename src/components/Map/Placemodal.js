import React, {useState} from 'react';
import {Modal, Button, Container, Row, Col, Form, Image} from 'react-bootstrap';
import addpic from '../../Pics/addpic.png';

export default function Placemodal(props) {
    console.log(props)
    
    const handleClose = () => props.setButtonclicked(false);

    const handleSave = (e) => console.log(e)

    const handleChange = (e) => {
        var fileElement = document.getElementById('placepic');
        var file = fileElement.files[0];
        var allfiles = fileElement.files
        
        const filesarray = Object.values(allfiles)
        const city = props.placeinfos.raw[0].address.city
        const newerId = "EL2a3ZzudpaEiDverbOyzQUVep5H"
        console.log(file)
        console.log(allfiles)
        filesarray.map(file => console.log(file))
        console.log(typeof(filesarray))
        console.log(city)


        
        filesarray.map((file) => {
        var storageRef = props.firebase.store.app.storage().ref();
        var metadata = {
            contentType: 'image/jpeg'
          };
     
          var uploadTask = storageRef.child('images/' + city + '/' + file.name).put(file, metadata);
    
          
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
              const newPlaceKey = props.firebase.db.app.database().ref().child('places').push().key;
            var postData = {
                author: props.authUser.username,
                uid: props.authUser.uid,
                type: "image",
                body: downloadURL,
                file_name: file.name,
                createdAt: Date.now(),
                address: props.placeinfos.raw[0].address,
                coordinates: [props.placeinfos.raw[0].lat, props.placeinfos.raw[0].lon],
                placeid: props.placeinfos.raw[0].place_id
                };
       
                
    
                var updates = {};
                updates['/places-together/' + newerId + '/' + city] = postData
                updates['/places/' + city + '/' + newerId + '/' + newPlaceKey] = postData;
                updates['/user-places/' + props.authUser.uid + '/' + city + '/' + newPlaceKey] = postData;
    
                return props.firebase.db.app.database().ref().update(updates); 
            });
          })
          })
    }

    const handleClick = () => {
        document.getElementById("placepic").click()
            }

    return (
      
  
        <Modal show={props.buttonclicked} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          New Memory
        </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={6}>
                City: {props.placeinfos.raw[0].address.city}
            </Col>
            <Col xs={6} md={6}>
                Country: {props.placeinfos.raw[0].address.country}
            </Col>
          </Row>
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Story</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
        </Form>
        <Row>
            <Col xs={6} md={4}>
                <Image onClick={handleClick} src={addpic} thumbnail />
                <input multiple accept="image/*" onChange={handleChange} type="file" id="placepic" style={{display: "none"}}></input>
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
        </Modal>
      
    );
  }
  