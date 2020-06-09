import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody } from 'reactstrap';
import Modal from 'shared/Modal';
import './Card.css';

const AddNaveCard = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <Card className="mr-3 bg-light border-light card-shadow">
      <CardBody className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
        <button className="btn-disable" onClick={toggleModal}>
          <FontAwesomeIcon color="#182026" icon={faPlus} size="lg" className="mb-2" />
          <h4>Ańadir Nave</h4>
        </button>
      </CardBody>
      <Modal modal={modal} toggle={toggleModal} title="Añadir Nave"></Modal>
    </Card>
  );
};

export default AddNaveCard;