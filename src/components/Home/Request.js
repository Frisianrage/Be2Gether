import React, {useState, useEffect} from "react";
import {Button, Modal} from 'react-bootstrap'
import CoupleId from './coupleid'

export default function Request(props) {
 
  // user/userOne is the person i want to connect with
  const user = props.partner[0]
  const userOne = user.id
  //userTwo = the person who is sending the request / the actual User
  const userTwo = props.authUser.uid
  const [show, setShow] = useState(true);

  const [reciever, setReciever] = useState({})

  useEffect(() => {
    let mounted = true
    props.firebase.db.app.database().ref().child('users/'+ userTwo)
    .once('value')
    .then( async function (snapshot) {
        let newArray = await snapshot.val(); 
        if(mounted) {
            if (newArray){
              setReciever(newArray)
            } else (setReciever([]))
        }
    }) 
    return () => {
    mounted = false
    }
})

  const handleClose = () => setShow(false);

  const handleRequest = () => {
    const coupleId = CoupleId(userOne, userTwo)
    var requestsender = {
      status: "pending",
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      age: user.age,
      sender: true,
      id: user.id,
      avatar: user.avatar,
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
      coupleid: coupleId,
    };
    var requestreciever = {
      status: "pending",
      username: reciever.username,
      first_name: reciever.first_name,
      last_name: reciever.last_name,
      email: reciever.email,
      age: reciever.age, 
      sender: false,
      id: reciever.id, 
<<<<<<< Updated upstream
      avatar: reciever.avatar,                                                                                                                                                                                     id: reciever.id,
=======
      avatar: reciever.avatar,  
      id: reciever.id,      
>>>>>>> Stashed changes
      coupleid: coupleId,
    };

    var updates = {};
    updates['users/' + userTwo + '/friendwith/'] = requestsender;
    updates['users/' + userOne + '/friendwith/'] = requestreciever;
    setShow(false)
    

    return (props.firebase.db.app.database().ref().update(updates),
    window.location.reload())
    
  }
  console.log(user)
    return ( 
        <div>
          <Modal show={show} onHide={handleClose}>
                                                  <Modal.Header closeButton>
<<<<<<< Updated upstream
                                                    <Modal.Title>{user.username}</Modal.Title>
=======

                                                    <Modal.Title>{user.username}</Modal.Title>

                                                    <Modal.Title>New connection</Modal.Title>

>>>>>>> Stashed changes
                                                  </Modal.Header>
                                                  <Modal.Body>
                                                              <p>Firstname: {user.first_name}</p>
                                                              <p>Lastname: {user.last_name}</p>
                                                              <p>Age: {user.age}</p>
                                                  </Modal.Body>
                                                  <Modal.Footer>
                                                    { !user.friendwith ? <div><Button variant="secondary" onClick={handleClose}>
<<<<<<< Updated upstream
=======
                                                    <Button variant="secondary" onClick={handleClose}>
>>>>>>> Stashed changes
                                                      Close
                                                    </Button>
                                                    <Button variant="primary" onClick={handleRequest}>
                                                      Request
                                                    </Button></div> 
                                                    :
                                                     <p> Sorry, no connection possible...</p>  }
                                                    
<<<<<<< Updated upstream
=======
                                                    </Button>
>>>>>>> Stashed changes
                                                  </Modal.Footer>
                                                </Modal>
        </div>
          )
}