import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Firebase from 'services/firebase';

const FormModal = ({ children, initialValues, modal, title, toggle, validationSchema }) => {
  const onCompletForm = (values) => {
    Firebase.createNave(values.idNave, values);
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onCompletForm}>
        {(props) => (
          <Form>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody className="pb-0">{children(props)}</ModalBody>
            <ModalFooter>
              <Button type="submit" color="info">
                Guardar
              </Button>
              <Button color="transparent" className="RojoCoqueto" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default FormModal;
