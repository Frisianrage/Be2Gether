import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {Card, Button, Row, Col} from 'react-bootstrap';
import * as ROUTES from '../../constants/routes';



const Cardlist = (props) => {

  const [ourmemories, setOurmemories] = useState([])
  const placestorageUrl = props.firebase.db.app.database().ref().child('travel/travel-memories/' + props.newerId + '/' + props.country + '/' + props.city)
    
  useEffect(() => {
  let mounted = true
  placestorageUrl.once('value').then( async function (snapshot) {
      let newArray = await snapshot.val();
      if(mounted) {
        if (newArray){
          const memories = Object.keys(newArray).map(key => newArray[key]);
          setOurmemories(memories)
        }
      }
    })
    return () => {
      mounted = false
    }
  })
  
  return (
    <div className="container">
      
      <Row>
      
      {ourmemories.map((memo, key) => (
        <Col md={4} key={key}> 
            <Card className="travelcontainer">
              <Card.Img className="cardpic" variant="top" src={memo.titlepicture.body} />
                <Card.Body>
                    <Card.Title>{memo.body.headline}</Card.Title>
                    <div>
                      <Link to={{pathname: ROUTES.MEMORY, hash: memo.address.city, search: memo.traveldate.time}}><Button variant="primary">To your memory</Button></Link>
                    </div> 
                </Card.Body>
            </Card>
          </Col>
        ))}
        
      </Row>
     
    </div>
  )
}


export default Cardlist
