import React, {useState} from 'react';
import {Modal, Button, Container, Row, Col, Form, Image} from 'react-bootstrap';
import addpic from '../../../Pics/addpic.png';
import loading from  '../../../Pics/loading.gif'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function Newplacemodal(props) {
    const coupleId = props.authUser.friendwith.coupleid
    const [isloading, setIsLoading] = useState(false)
    const [preview, setPreview] = useState([])
    const [headValue, setheadValue] = useState("")
    const [textValue, setTextValue] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleClose = () => props.setButtonclicked(false);

   
    const [location, setLocation] = useState({
                                            address: "",
                                            city: "", 
                                            country: ""
                                          })
    const {city, address, country} = location

    function updateText(e) { 
      e.preventDefault() 
      setTextValue(e.target.value) 
    }
    
    function updateHeadline(e) {
      e.preventDefault() 
      setheadValue(e.target.value) 
    }
      
    function writeNewMessage(e) {
      const start = startDate.toDateString();
      const end = endDate.toDateString()
      const time = start + end
      e.preventDefault()
      if(!textValue) return
      const newMessageKey = props.firebase.db.app.database().ref().child('travel').push().key;
      var blogData = {
        type: "text",
        author: props.authUser.username,
        uid: props.authUser.uid,
        body: {
          headline: headValue, 
          text: textValue,
        },
        address:location,
        coordinates: props.position ,
        traveldate: {
          time,
          start,
          end
        },
        pictures: preview,
        titlepicture: preview[0],
        createdAt: Date.now(),
        placeid: newMessageKey
      };
      console.log(city)
      var updates = {};
      updates['map/places-together/' + coupleId + '/' + city] = blogData
      updates['travel/memories/' + coupleId + '/' + country + '/' + city + '/' + time + '/' + newMessageKey] = blogData
      updates['travel/city-memories/' + coupleId + '/' + city + '/' + time + '/' + newMessageKey] = blogData
      updates['travel/travel-memories/'+ coupleId + '/' + country + '/' + city + '/' + newMessageKey] = blogData;
      updates['travel/user-travel-memories/' + props.authUser.uid + '/' + newMessageKey] = blogData;

      return (props.firebase.db.app.database().ref().update(updates),
        handleClose())
    }
  
    const HandleChange = (e) => {
        let loadedpictures = []
        const start = startDate.toDateString();
        const end = endDate.toDateString()
        const time = start + end
        var fileElement = document.getElementById('placepic');
        var allfiles = fileElement.files 
        const filesarray = Object.values(allfiles)

        filesarray.map((file) => {
            var storageRef = props.firebase.store.app.storage().ref();
            var metadata = {
                contentType: 'image/jpeg'
              };
         
              var uploadTask = storageRef.child('images/' + coupleId + '/' + city + '/' + time + '/' + file.name).put(file, metadata);
        
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
                    address: location,
                    coordinates: props.position ,
                    traveldate: {
                      time,
                      start,
                      end
                    },
                    placeid: newPlaceKey,
                    };
           
                  var updates = {};
                    //places-together für Markerposition
                    updates['map/places-together/' + coupleId + '/' + city] = postData
                    //places für Bilder
                    updates['map/places/' + coupleId + '/' + country + '/' + city + '/' + newPlaceKey] = postData;
                    updates['map/places/' + coupleId + '/' + country + '/' + city + '/' + time + '/' + newPlaceKey] = postData;
                    updates['map/user-places/' + props.authUser.uid + '/' + country + '/' + city + '/' + newPlaceKey] = postData;
                    setIsLoading(false)
                    loadedpictures.push(postData)
                    return props.firebase.db.app.database().ref().update(updates)
                });
              }
            )
        })
        setPreview(loadedpictures)
    } 
    const handleClick = (e) => {
      document.getElementById("placepic").click()
    }
    const handleLocationChange = (e) => {
      const key = e.target.name
      const value = e.target.value
      setLocation({...location, [key]:value})
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
                          <input value={city} name="city" onChange={handleLocationChange} id="cityinput" required></input>
                      </Col>
                      <Col xs={1} md={1}>
                          Address:
                      </Col>
                      <Col xs={5} md={5}>
                          <input value={address} name="address" onChange={handleLocationChange} id="addressinput"></input>
                      </Col>
                  </Row>
                  <br />
                  <Row>
                      <Col xs={1} md={1}>
                          Country:
                      </Col>
                      <Col xs={5} md={5}>
                          <input value={country} name="country" onChange={handleLocationChange} id="countryinput"></input>
                      </Col>
                  </Row>
                  <br />
                  <Row>
                      <Col xs={1} md={1}>
                          From:
                      </Col>
                      <Col xs={5} md={5}>
                      <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="yyyy/MM/dd" peekNextMonth showMonthDropdown showYearDropdown dropdownMode="select" />
                      </Col>
                      <Col xs={1} md={1}>
                          To:
                      </Col>
                      <Col xs={5} md={5}>
                      <DatePicker selected={endDate} onChange={date => setEndDate(date)} dateFormat="yyyy/MM/dd" peekNextMonth showMonthDropdown showYearDropdown dropdownMode="select" />
                      </Col>
                  </Row>
                  <br />
                  <Form onSubmit={writeNewMessage}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Memory</Form.Label>
                        <Form.Control type="text" placeholder="Headline" value={headValue} onChange={updateHeadline} />
                        <br />
                        <Form.Control as="textarea" placeholder="The story..." rows="3" value={textValue} onChange={updateText} />
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
                          <input multiple accept="image/*" onChange={HandleChange} type="file" id="placepic" style={{display: "none"}}></input>
                          {isloading && <img src={loading} alt="loading"></img>}
                      </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit" id="memorySubmit" onClick={writeNewMessage}>
                    Save Memory
                  </Button> 
              </Modal.Footer>
        
                  
            <p><small>*Pflichtfeld</small></p>
        </Modal>
    );
}