import React from "react";
import {Card} from 'react-bootstrap'
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
export default function Usercard(props) {
  const user = props.user


  return ( 
    
        <Card className={user.friendwith && user.friendwith.status === "pending" ? "pending":"accepted" }>
            <Card.Img className="cardpic" variant="top" src={user.avatar} alt="Avatar" />
<<<<<<< Updated upstream
=======

    <div>
        <Card style={{ width: '18rem' }} className={user.friendwith && user.friendwith.status === "pending" ? "accepted":"no-friends" }>
            <Card.Img className="cardpic" variant="top" src="" alt="Avatar" />

>>>>>>> Stashed changes
            <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <div>
                    <div>Firstname: {user.first_name}</div>
                    <div>Lastname: {user.last_name}</div>
                    <div>Age: {user.age}</div>
                </div>
            </Card.Body>
<<<<<<< Updated upstream
        </Card>    
   
=======
        </Card> 
    </div>

>>>>>>> Stashed changes
    )
}

