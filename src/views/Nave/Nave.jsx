import React, { useContext, useState } from 'react';
import { UserStore } from 'containers/context/User.context';
import InfoSensor from './components/InfoSensor';
import NaveDatos from './components/NaveDatos';
import Dht11Humedad from './components/sensores/Dht11Humedad';
import Dht11Temperatura from './components/sensores/Dht11Temperatura';
import SensorPresioPresion from './components/sensores/SensorPresionPresion';
import SensorPresionAltitud from './components/sensores/SensorPresionAltitud';
import './Nave.css';
import FotoCelda from './components/sensores/FotoCelda';
import { useEffect } from 'react';

const Nave = ({ location }) => {
  const [nave, setNave] = useState();
  const { naves } = useContext(UserStore);
  const { id } = location.state;

  useEffect(() => {
    setNave(naves.filter((nave) => nave.idNave === id)[0]);
  }, [id, naves]);

  //sensorDHT11, sensorFotocelda, sensorPresion

  return (
    <div className="D">
      {nave && (
        <>
          <NaveDatos nave={nave} />

          <InfoSensor sensor={nave.sensores.sensorFotocelda} name="FotoCelda">
            <FotoCelda datos={nave.sensores.sensorFotocelda.datosSensor} />
          </InfoSensor>

          <InfoSensor sensor={nave.sensores.sensorFotocelda} name="DHT11">
            <Dht11Humedad datos={nave.sensores.sensorDHT11.datosSensor} />
            <Dht11Temperatura datos={nave.sensores.sensorDHT11.datosSensor} />
          </InfoSensor>

          <InfoSensor sensor={nave.sensores.sensorFotocelda} name="BMP180">
            <SensorPresioPresion datos={nave.sensores.sensorPresion.datosSensor} />
            <SensorPresionAltitud datos={nave.sensores.sensorPresion.datosSensor} />
          </InfoSensor>
        </>
      )}
    </div>
  );
};

export default Nave;
