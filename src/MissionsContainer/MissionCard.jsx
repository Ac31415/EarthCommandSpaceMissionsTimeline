import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Timeline } from '../Timeline/Timeline'

export const MissionCard = ({ name, icon}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const imageLocation = `${process.env.PUBLIC_URL}/missions/${icon}`
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imageLocation} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Go somewhere
            </Button>
          </Card.Body>
        </Card>

        <Modal size="lg" show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{<Timeline />}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}