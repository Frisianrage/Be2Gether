import React from "react";
import {Col, Row} from 'react-bootstrap'


export default function Usercard(props) {
  const user = props.user
    console.log(user)

  return ( 
    <div className={user && user.status === "pending" ? "pending":"accepted" }>
        <Row>
            <Col md={4}>
                <div className="pic-container">
                    <img className="cardpic" src={user.avatar} alt="Avatar" />
                </div>
            </Col>
            <Col md={7}>
                <h1 className="accounthead">Your Partner <small>{user.status && ("(Status: " + user.status + ")")}</small></h1> 
                <div>Username: {user.username} </div>
                <div>Firstname: {user.first_name}</div>
                <div>Lastname: {user.last_name}</div>
                <div>Age: {user.age}</div> 
            </Col>
        </Row>
    </div> 
    )
}
 