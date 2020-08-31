import React, {useState} from 'react';
import {Modal, Button, Container, Row, Col, Form, Image} from 'react-bootstrap';
import addpic from '../../../Pics/addpic.png';
import loading from  '../../../Pics/loading.gif'

export default function Placemodal(props) {
    const [isloading, setIsLoading] = useState(false)
    const [preview, setPreview] = useState([])
    const [textValue, setTextValue] = useState("")
    const coupleId = props.newerId
    const handleClose = () => props.setButtonclicked(false);

    function updateText(e) { 
      e.preventDefault() 
      setTextValue(e.target.value) 
    }
      
    function writeNewMessage(e) {
      e.preventDefault()
      if(!textValue) return
      const newPlaceKey = props.firebase.db.app.database().ref().child('travel').push().key;
      var blogData = {
        type: "text",
        author: props.authUser.username,
        uid: props.authUser.uid,
        body: textValue,
        address: props.info.raw[0].address,
        coordinates: [props.info.raw[0].lat, props.info.raw[0].lon],
        pictures: preview,
        createdAt: Date.now(),
        placeid: newPlaceKey
      };
      
      var updates = {};
      updates['map/places-together/' + coupleId + '/' + props.info.raw[0].address.city] = blogData
      updates['travel/memories/' + coupleId + '/' + newPlaceKey] = blogData
      updates['travel/travel-memories/'+ coupleId + '/' + props.info.raw[0].address.city + '/' + newPlaceKey] = blogData;
      updates['travel/user-travel-memories/' + props.authUser.uid + '/' + newPlaceKey] = blogData;
  
      return (props.firebase.db.app.database().ref().update(updates),
      handleClose())
    }
  

    const handleChange = (e) => {
        let loadedpictures = []
        var fileElement = document.getElementById('placepic');
        var allfiles = fileElement.files 
        const filesarray = Object.values(allfiles)
        const city = props.info.raw[0].address.city
        

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
                  const newPlaceKey = props.firebase.db.app.database().ref().child('map').push().key;
                var postData = {
                    author: props.authUser.username,
                    uid: props.authUser.uid,
                    type: "image",
                    body: downloadURL,
                    file_name: file.name,
                    createdAt: Date.now(),
                    address: props.info.raw[0].address,
                    coordinates: [props.info.raw[0].lat, props.info.raw[0].lon],
                    placeid: newPlaceKey
                    };
           
                    var updates = {};
                    //places-together für Markerposition
                    updates['map/places-together/' + coupleId + '/' + city] = postData
                    //places für Bilder
                    updates['map/places/' + coupleId + '/' + city + '/' + newPlaceKey] = postData;
                    updates['map/user-places/' + props.authUser.uid + '/' + city + '/' + newPlaceKey] = postData;
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
                        City: 
                    </Col>
                    <Col xs={6} md={6}>
                        Country: 
                    </Col>
                </Row>
                <Form onSubmit={writeNewMessage}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Story</Form.Label>
                        <Form.Control as="textarea" rows="3" value={textValue} onChange={updateText} />
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
                <Button variant="primary" onClick={writeNewMessage}>
                Save Memory
                </Button>  
            </Modal.Footer>
        </Modal> 
    );
}