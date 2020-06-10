import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Firebase from 'services/firebase';

const FormModal = ({ children, initialValues, modal, title, toggle, validations }) => {
  const onLoggin = (values) => {
    Firebase.createNave(values.idNave, values);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <Formik validationSchema={validations} initialValues={initialValues} onSubmit={onLoggin}>
        <Form>
          <ModalHeader toggle={toggle}>{title}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary" onClick={toggle}>
              Guardar
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Formik>
    </Modal>
  );
};

export default FormModal;
