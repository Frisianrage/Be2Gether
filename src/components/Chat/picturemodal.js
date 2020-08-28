import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';

function PictureModal(props) {
   const handleClose = () => props.setImageWasClicked(false);

  return (
    
      <Modal className="modalbody" show={props.imageWasClicked} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.messagebody.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img className="bigpic" src={props.messagebody.src} alt="Pic"></img></Modal.Body>

      </Modal>
  
  );
 
  
}
               
export default PictureModal;