import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const MyCardD = ({ nave }) => {
  const { sensores } = nave;
  const { sensorFotocelda, sensorPresion, sensorDHT11 } = sensores;

  const fotoCeldaValores = sensorFotocelda.datosSensor;
  const fotoCeldaValor = fotoCeldaValores[fotoCeldaValores.length - 1].datoSensor;

  const presionValores = sensorPresion.datosSensor;
  const altitudValor = presionValores[presionValores.length - 1].datoSensor.altitud;
  const presionValor = presionValores[presionValores.length - 1].datoSensor.Presion;

  const DHT11Valores = sensorDHT11.datosSensor;
  const humedadValor = DHT11Valores[DHT11Valores.length - 1]?.datoSensor.humedad;
  const temperaturaValor = DHT11Valores[DHT11Valores.length - 1]?.datoSensor.temperatura;

  const imgRandom = `https://source.unsplash.com/1600x900/?nature,water`;

  return (
    <Card className="bb2 bg-light border-light card-shadow box-shadooww">
      <CardBody>
        <div className="d-flex">
          <CardTitle className="h5  ">
            <div className="d-flex align-items-center">
              <h4 className="dinBold">Datos Actuales</h4>
            </div>
          </CardTitle>
        </div>
        <CardSubtitle className="border-car d-flex">
          <div className="w-40 h-100 d-flex flex-column justify-content-center">
            <div className="n">
              <h5>Humedad: {humedadValor}</h5>
            </div>

            <div className="n">
              <h5>Temperatura: {temperaturaValor}</h5>
            </div>

            <div className="n">
              <h5>Nivel de Luz: {fotoCeldaValor}</h5>
            </div>

            <div className="n">
              <h5>Altitud: {altitudValor}</h5>
            </div>
            <div className="n">
              <h5>Presion: {presionValor}</h5>
            </div>
          </div>
          <CardImg top className="imgCard-banner" src={imgRandom} alt="Card image cap" />
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default MyCardD;
