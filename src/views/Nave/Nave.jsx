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

import MyCardD from './components/DatosAct';

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
          <div className="bb">
            <NaveDatos className="bb1" nave={nave} />

            <MyCardD nave={nave} />
          </div>
          {nave.sensores.sensorFotocelda.status && (
            <InfoSensor sensor={nave.sensores.sensorFotocelda} name="FotoCelda">
              <FotoCelda datos={nave.sensores.sensorFotocelda.datosSensor} />
            </InfoSensor>
          )}

          {nave.sensores.sensorDHT11.status && (
            <InfoSensor
              sensor={nave.sensores.sensorDHT11}
              twoValues={true}
              name="DHT11"
              firstValue="humedad"
              secondValue="temperatura"
            >
              <Dht11Humedad datos={nave.sensores.sensorDHT11.datosSensor} />
              <Dht11Temperatura datos={nave.sensores.sensorDHT11.datosSensor} />
            </InfoSensor>
          )}

          {nave.sensores.sensorPresion.status && (
            <InfoSensor
              sensor={nave.sensores.sensorPresion}
              twoValues={true}
              name="BMP180"
              firstValue="presion"
              secondValue="altitud"
            >
              <SensorPresioPresion datos={nave.sensores.sensorPresion.datosSensor} />
              <SensorPresionAltitud datos={nave.sensores.sensorPresion.datosSensor} />
            </InfoSensor>
          )}
        </>
      )}
    </div>
  );
};

export default Nave;
