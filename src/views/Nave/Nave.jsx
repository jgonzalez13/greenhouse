import React from 'react';
import InfoSensor from './components/InfoSensor';
import NaveDatos from './components/NaveDatos';
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

      {/* <InfoSensor sensor={sensorFotocelda} name="DHT11">
        <Dht11Humedad datos={sensorDHT11.datosSensor} />
        <Dht11Temperatura datos={sensorDHT11.datosSensor} />
      </InfoSensor> */}
      {/* <FotoCelda datos={sensorFotocelda.datosSensor} />

      <Dht11Humedad datos={sensorDHT11.datosSensor} />
      <Dht11Temperatura datos={sensorDHT11.datosSensor} />
      <div>--------------------</div>
      <SensorPresioPresion datos={sensorPresion.datosSensor} />
      <SensorPresionAltitud datos={sensorPresion.datosSensor} />
      <div>--------------------</div>
      <Tabla datos={sensorFotocelda.datosSensor} /> */}
    </div>
  );
};

export default Nave;
