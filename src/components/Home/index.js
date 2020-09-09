import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import MyCard from './MyCard';
import PartnerCard from './PartnerCard'
<<<<<<< Updated upstream
import giphy from '../../Pics/giphy.gif'
=======
import {Button, Row, Col} from 'react-bootstrap'
>>>>>>> Stashed changes


 
const HomePage = (props) => (
 <div>
   Here comes the Homepage!
 </div>
  
           
    
  
<<<<<<< Updated upstream
);
 
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
