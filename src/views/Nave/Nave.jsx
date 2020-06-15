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

            {nave.sensores.sensorFotocelda?.datosSensor &&
              nave.sensores.sensorDHT11?.datosSensor &&
              nave.sensores.sensorPresion?.datosSensor && <MyCardD nave={nave} />}
          </div>
          {nave.sensores.sensorFotocelda.status && nave.sensores.sensorFotocelda?.datosSensor && (
            <InfoSensor sensor={nave.sensores.sensorFotocelda} name="FotoCelda">
              <FotoCelda datos={nave.sensores.sensorFotocelda.datosSensor} />
            </InfoSensor>
          )}

          {nave.sensores.sensorDHT11.status && nave.sensores.sensorDHT11?.datosSensor && (
            <InfoSensor
              sensor={nave.sensores.sensorDHT11}
              twoValues={true}
              name="DHT11"
              firstValue="humedad"
              secondValue="temperatura"
            >
              <div className="mb-2">
                <Dht11Humedad datos={nave.sensores.sensorDHT11.datosSensor} />
              </div>

              <div>
                <Dht11Temperatura datos={nave.sensores.sensorDHT11.datosSensor} />
              </div>
            </InfoSensor>
          )}

          {nave.sensores.sensorPresion.status && nave.sensores.sensorPresion?.datosSensor && (
            <InfoSensor
              sensor={nave.sensores.sensorPresion}
              twoValues={true}
              name="BMP180"
              firstValue="presion"
              secondValue="altitud"
            >
              <div className="mb-2">
                <SensorPresioPresion datos={nave.sensores.sensorPresion.datosSensor} />
              </div>
              <div>
                <SensorPresionAltitud datos={nave.sensores.sensorPresion.datosSensor} />
              </div>
            </InfoSensor>
          )}
        </>
      )}
    </div>
  );
};

export default Nave;
