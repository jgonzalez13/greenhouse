import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody } from 'reactstrap';
import FormNave from './Forms/FormNave';
import Modal from 'shared/FormModal';
import { initialValues, NaveValidations } from './Forms/NaveValidation';
import './Card.css';

const AddNaveCard = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <Card className="mr-3 bg-light border-light card-shadow">
      <CardBody className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
        <button className="btn-disable" onClick={toggleModal}>
          <FontAwesomeIcon color="#182026" icon={faPlus} size="lg" className="mb-2" />
          <h4>Añadir Nave</h4>
        </button>
      </CardBody>
      <Modal
        initialValues={initialValues}
        modal={modal}
        toggle={toggleModal}
        title="Añadir Nave"
        validationSchema={NaveValidations}
      >
        <FormNave />
      </Modal>
    </Card>
  );
};

export default AddNaveCard;
