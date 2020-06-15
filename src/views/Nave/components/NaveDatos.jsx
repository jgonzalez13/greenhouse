import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col, Label, Input } from 'reactstrap';
import FormNave from 'views/Naves/components/Forms/FormNave';
import Modal from 'shared/FormModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { NaveValidations } from 'views/Naves/components/Forms/NaveValidation';

const MyCard = ({ nave }) => {
  const [modal, setModal] = useState(false);
  const { nombreNave, idNave, rutaNave } = nave;

  const toggleModal = () => setModal(!modal);

  return (
    <Card className="mr-3 bg-light border-light card-shadow box-shadooww ">
      <CardBody>
        <div>
          <CardTitle className="h5 ">
            <div className="d-flex align-items-center">
              <h4 className="dinBold">{nombreNave}</h4>
              <h5 className="ml-auto">{idNave}</h5>
            </div>
          </CardTitle>
        </div>
        <CardSubtitle className="border-car mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio culpa natus labore voluptatum odit ullam,
          debitis, consectetur amet ut asperiores eveniet eos assumenda. Ut ratione rem saepe obcaecati ullam
          nihil.
        </CardSubtitle>

        <Container className="mx-auto">
          <Row xs="1">
            <Col>
              <Label check>
                <Input type="checkbox" /> Sensor DHT11
              </Label>
            </Col>
            <Col>
              <Label check>
                <Input type="checkbox" /> Sensor BMP180
              </Label>
            </Col>
            <Col>
              <Label check>
                <Input type="checkbox" /> Sensor Fotocelda
              </Label>
            </Col>
          </Row>
        </Container>

        <CardSubtitle className="p mb-2 text-right ml-auto locate">
          <i>{rutaNave}</i>
        </CardSubtitle>

        <Button className="btn-block text-center" color="info" onClick={toggleModal}>
          <FontAwesomeIcon icon={faPencilAlt} className="mr-2"></FontAwesomeIcon>EDITAR
        </Button>

        <Modal
          initialValues={nave}
          modal={modal}
          toggle={toggleModal}
          title="Editar Nave"
          validationSchema={NaveValidations}
        >
          {({ values }) => <FormNave idNave={values.idNave} edit={true} />}
        </Modal>
      </CardBody>
    </Card>
  );
};

export default MyCard;
