import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalComponet = ({ children, modal, title, toggle }) => (
  <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>{title}</ModalHeader>
    <ModalBody>{children}</ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggle}>
        Guardar
      </Button>{' '}
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
);

export default ModalComponet;
