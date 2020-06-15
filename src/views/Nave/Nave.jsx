import React from 'react';
import InfoSensor from './components/InfoSensor';
import NaveDatos from './components/NaveDatos';
import Dht11Humedad from './components/sensores/Dht11Humedad';
import Dht11Temperatura from './components/sensores/Dht11Temperatura';
import SensorPresioPresion from './components/sensores/SensorPresionPresion';
import SensorPresionAltitud from './components/sensores/SensorPresionAltitud';
import './Nave.css';
import FotoCelda from './components/sensores/FotoCelda';

const Nave = ({ location }) => {
  const { sensorDHT11, sensorFotocelda, sensorPresion } = location.state.nave.sensores;

  return (
    <div className="D">
      <NaveDatos nave={location.state.nave} />

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

      <InfoSensor sensor={sensorFotocelda} name="FotoCelda">
        <FotoCelda datos={sensorFotocelda.datosSensor} />
      </InfoSensor>

      <InfoSensor sensor={sensorFotocelda} name="DHT11">
        <Dht11Humedad datos={sensorDHT11.datosSensor} />
        <Dht11Temperatura datos={sensorDHT11.datosSensor} />
      </InfoSensor>

      <InfoSensor sensor={sensorFotocelda} name="BMP180">
        <SensorPresioPresion datos={sensorPresion.datosSensor} />
        <SensorPresionAltitud datos={sensorPresion.datosSensor} />
      </InfoSensor>
    </div>
  );
};

export default Nave;
