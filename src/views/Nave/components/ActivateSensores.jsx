import React from 'react';
import { Container, Row, Col, Label, Input } from 'reactstrap';

const ActivateSensores = () => {
  return (
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
  );
};

export default ActivateSensores;
