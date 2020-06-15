import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const MyCardD = ({ nave }) => {
  const { idNave, sensores } = nave;
  const { sensorFotocelda, sensorPresion, sensorDHT11 } = sensores;

  const fotoCeldaValores = sensorFotocelda.datosSensor;
  const fotoCeldaValor = fotoCeldaValores[fotoCeldaValores.length - 1].datoSensor;

  const presionValores = sensorPresion.datosSensor;
  const altitudValor = presionValores[presionValores.length - 1].datoSensor.altitud;
  const presionValor = presionValores[presionValores.length - 1].datoSensor.Presion;

  const DHT11Valores = sensorDHT11.datosSensor;
  const humedadValor = DHT11Valores[DHT11Valores.length - 1].datoSensor.humedad;
  const temperaturaValor = DHT11Valores[DHT11Valores.length - 1].datoSensor.temperatura;

  return (
    <Card className="bb2 bg-light border-light card-shadow box-shadooww">
      <CardBody>
        <div>
          <CardTitle className="h5  ">
            <div className="d-flex align-items-center">
              <h4 className="dinBold">Datos Actuales.</h4>
              <h5 className="ml-auto">{idNave}</h5>
            </div>
          </CardTitle>
        </div>
        <CardSubtitle className="border-car mb-5">
          <div className="n">
            <h5>Humedad: {humedadValor}</h5>
            <h5>Temperatura: {temperaturaValor}</h5>
          </div>

          <div className="n">
            <h5>Nivel de Luz: {fotoCeldaValor}</h5>
          </div>

          <div className="n">
            <h5>Altitud: {altitudValor}</h5>
            <h5>Presion: {presionValor}</h5>
          </div>
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default MyCardD;
