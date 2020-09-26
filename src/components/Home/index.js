import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
<<<<<<< Updated upstream
import undercon from '../../Pics/undercon.png'

const HomePage = (props) => (
<div className="homepage">
  <img className="homepagepic" src={undercon} alt="test"></img>
</div>
  
 
=======
import MyCard from './MyCard'
import PartnerCard from './PartnerCard'
import giphy from '../../Pics/giphy.gif'
import {Button, Row, Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'


  const HomePage = (props) => {
  const partner = props.authUser.friendwith
  
  const handleClick = (e) => {
    var requestsender = "accepted";
    var requestreciever = "accepted"

    var updates = {};
    updates['users/' + props.authUser.friendwith.id + '/friendwith/status/'] = requestsender;
    updates['users/' + props.authUser.uid + '/friendwith/status/'] = requestreciever;
  
    return (props.firebase.db.app.database().ref().update(updates),
    window.location.reload())
  }

  const handleDecline = (e) => {
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
          {authUser => 
          <div>
            {authUser.friendwith && authUser.friendwith.status ? <h2> Your connection status is {authUser.friendwith.status}</h2> : <h2>You have no connection yet...</h2>}
            <MyCard firebase={props.firebase} authUser={authUser} />
            <PartnerCard firebase={props.firebase} partner={partner} authUser={authUser} />
            { partner && !partner.sender && partner.status === "pending" ? <div>
                    <Button variant="success" onClick={handleClick}>Accept request</Button>
                    <Button variant="danger" onClick={handleDecline}>Decline request</Button>
                    </div> : "" }
          </div>    
          }
    </AuthUserContext.Consumer> 

>>>>>>> Stashed changes
);
  } 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);

=======
    return (props.firebase.db.app.database().ref().update(updates),
    window.location.reload())
  }


  return (
    <div className="accountpage">
      <h1>This is the Homepage</h1>
    </div>
    
);
  } 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);
<<<<<<< Updated upstream
=======
  /*
  <AuthUserContext.Consumer> 
          {authUser => 
          <div className="home">
            <Row>
            {authUser.friendwith && authUser.friendwith.status ? <h1> Your connection status is {authUser.friendwith.status}</h1> : <h1>You have no connection yet...</h1>}
            </Row>
            <div >
            <Row>
            <Col lg={6}>
              <MyCard firebase={props.firebase} authUser={authUser} />
            </Col>
            <Col lg={6}>
              <PartnerCard firebase={props.firebase} partner={partner} authUser={authUser} />
            </Col>
            </Row>
            <Row>
              { partner && !partner.sender && partner.status === "pending" ? <div>
                    <Button variant="success" onClick={handleClick}>Accept request</Button>
                    <Button variant="danger" onClick={handleDecline}>Decline request</Button>
                    </div> : "" }
            </Row>
            </div>
           
            
            
           
          </div>    
          }
    </AuthUserContext.Consumer> 

    */
>>>>>>> Stashed changes
