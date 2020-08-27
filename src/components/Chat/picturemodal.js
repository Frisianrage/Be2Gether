import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';

function PictureModal(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
 
  return (
    
      <Modal className="modalbody" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.messagebody.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img className="bigpic" src={props.messagebody.src} alt="Pic"></img></Modal.Body>

      </Modal>
  
  );
 
  
}
               
export default PictureModal;