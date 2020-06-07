import React from 'react';
import MyTemperature from './components/temperature';
import InfoSensor from './components/InfoSensor';
import './Nave.css';

const Nave = ({ location }) => {
  const { nombreNave, descripcionNave, idNave, rutaNave, sensores } = location.state.nave;
  const { sensorDHT11, sensorFotocelda, sensorPresion } = sensores;
  return (
    <div className="D">
      <div className="datos-n">
        <div className="titulo">
          <h2>{nombreNave}</h2>
        </div>
        <h3 className="mb-3">ID: {idNave}</h3>
        <h4 className="mb-3">{descripcionNave}</h4>
        <h5>Ruta: {rutaNave}</h5>
      </div>

      <InfoSensor sensor={sensorDHT11} />
      <InfoSensor sensor={sensorFotocelda} />
      <InfoSensor sensor={sensorPresion} />
    </div>
  );
};

export default Nave;
