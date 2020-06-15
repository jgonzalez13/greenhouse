import React from 'react';
import { Container, Row, Col, Label, Input } from 'reactstrap';
import Firebase from 'services/firebase';

const ActivateSensores = ({ idNave, reset, sensores }) => {
  const { sensorFotocelda, sensorPresion, sensorDHT11 } = sensores;

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.checked;
    Firebase.updateSensor(idNave, name, value, !reset);
  }

  return (
    <Container className="mx-auto">
      <Row xs="1">
        <Col>
          <Label check>
            <Input type="checkbox" name="sensorFotocelda" checked={sensorFotocelda.status} onChange={onChange} />
            Sensor Fotocelda
          </Label>
        </Col>
        <Col>
          <Label check>
            <Input type="checkbox" name="sensorDHT11" checked={sensorDHT11.status} onChange={onChange} />
            Sensor DHT11
          </Label>
        </Col>
        <Col>
          <Label check>
            <Input type="checkbox" name="sensorPresion" checked={sensorPresion.status} onChange={onChange} />
            Sensor BMP180
          </Label>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivateSensores;
