import React from 'react';
import InfoSensor from './components/InfoSensor';
import './Nave.css';
import FotoCelda from './components/FotoCelda';
import Dht11Humedad from './components/Dht11Humedad';
import Dht11Temperatura from './components/Dht11Temperatura';

const Nave = ({ location }) => {
  const { nombreNave, descripcionNave, idNave, rutaNave, sensores } = location.state.nave;
  const { sensorDHT11, sensorFotocelda, sensorPresion } = sensores;
  return (
    <div className="D ">
      <div className="datos-n bg-light">
        <div className="titulo">
          <h2>NAVE {nombreNave}</h2>
        </div>
        <h3 className="mb-3">ID: {idNave}</h3>
        <h4 className="mb-3">{descripcionNave}</h4>
        <h5>Ruta: {rutaNave}</h5>
      </div>

      <InfoSensor sensor={sensorDHT11}>
        <Dht11Humedad datos={sensorDHT11.datosSensor} />
        <Dht11Temperatura datos={sensorDHT11.datosSensor} />
      </InfoSensor>
      <InfoSensor sensor={sensorFotocelda}>
        <FotoCelda datos={sensorFotocelda.datosSensor} />
      </InfoSensor>
      {/* <InfoSensor sensor={sensorPresion} /> */}
    </div>
  );
};

export default Nave;
