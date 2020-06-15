import React from 'react';
import InfoSensor from './components/InfoSensor';
import './Nave.css';
import FotoCelda from './components/FotoCelda';
import Dht11Humedad from './components/Dht11Humedad';
import Dht11Temperatura from './components/Dht11Temperatura';
import SensorPresionAltitud from './components/SensorPresionAltitud';
import SensorPresioPresion from './components/SensorPresionPresion';
import { Label, Input, Container, Row, Col } from 'reactstrap';
import Tabla from './components/TB';

const Nave = ({ location }) => {
  const { nombreNave, descripcionNave, idNave, rutaNave, sensores } = location.state.nave;
  const { sensorDHT11, sensorFotocelda, sensorPresion } = sensores;

  return (
    <div className="D ">
      <div className="datos-n bg-light">
        <div className="titulo">
          <h2>NAVE {nombreNave}</h2>
        </div>
        <div className="content">
          <div className="sensores">
            <div>
              <h3 className="mb-3">ID: {idNave}</h3>
              <h4 className="mb-3">{descripcionNave}</h4>
              <h5>Ruta: {rutaNave}</h5>
            </div>
          </div>
          <div className="datos">
            <div className="da">
              <h4>ACTIVA LOS SENSORES</h4>
              <div className="container content">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {sensorDHT11.status && sensorDHT11.datosSensor > 0 && (
        <InfoSensor sensor={sensorDHT11}>
          <Dht11Humedad datos={sensorDHT11.datosSensor} />
          <Dht11Temperatura datos={sensorDHT11.datosSensor} />
        </InfoSensor>
      )} 
      {sensorFotocelda.status && sensorFotocelda.datosSensor > 0 && (
        <InfoSensor sensor={sensorFotocelda}>
          <FotoCelda datos={sensorFotocelda.datosSensor} />
        </InfoSensor>
      )} 
      {sensorPresion.status && sensorPresion.datosSensor > 0 && (
        <InfoSensor sensor={sensorPresion}>
          <SensorPresioPresion datos={sensorPresion.datosSensor} />
          <SensorPresionAltitud datos={sensorPresion.datosSensor} />
        </InfoSensor>
      )}  */}

      <InfoSensor sensor={sensorFotocelda} />
      <FotoCelda datos={sensorFotocelda.datosSensor} />

      <Dht11Humedad datos={sensorDHT11.datosSensor} />
      <Dht11Temperatura datos={sensorDHT11.datosSensor} />
      <div>--------------------</div>
      <SensorPresioPresion datos={sensorPresion.datosSensor} />
      <SensorPresionAltitud datos={sensorPresion.datosSensor} />
      <div>--------------------</div>
      <Tabla datos={sensorFotocelda.datosSensor} />
    </div>
  );
};

export default Nave;
