import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const MyCardD = ({ nave, datos }) => {
  const { idNave } = nave;
  const fotoCeldaValores = nave.sensores.sensorFotoCelda?.datosSensor;
  const fotoCeldaValor = nave.sensores.sensorFotoCelda?.datosSensor[fotoCeldaValores.lenght - 1];

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
          <div>
            <h5 className="borderp">
              Datos Actuales SENSOR DHT11
              <div className="n">
                <h5>Humedad: 12</h5>
                <h5>Temperatura: 123</h5>
              </div>
            </h5>
          </div>
          <div>
            <h5 className="borderp">
              Datos Actuales SENSOR FOTOCELDA
              <h5 className="n">Nivel de Luz: {fotoCeldaValor}</h5>
            </h5>
          </div>
          <div>
            <h5 className="borderp ">
              Datos Actuales SENSOR PRESION
              <div className="n">
                <h5>Altitud: 213</h5>
                <h5>Presion: 1323</h5>
              </div>
            </h5>
          </div>
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default MyCardD;
