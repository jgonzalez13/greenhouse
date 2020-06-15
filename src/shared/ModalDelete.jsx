import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Firebase from 'services/firebase';

const ModalDelete = ({ modal, toggle, title, idNave }) => {
  const onDeleteNave = () => {
    Firebase.removeNave(idNave);
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody className="pb-0">
        <p>Estas seguro que deseas eliminar esta nave ?</p>
      </ModalBody>
      <ModalFooter>
        <Button type="submit" color="info" onClick={onDeleteNave}>
          Guardar
        </Button>
        <Button color="transparent" className="RojoCoqueto" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDelete;
