import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faPencilAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const InfoSensor = ({ sensor, idNave }) => {
  const history = useHistory();
  const {
    idSensor,
    msgValorMaximoSensor,
    msgValorMinimoSensor,
    tipoSensor,
    valorMaximoSensor,
    valorMinimoSensor,
  } = sensor;

  function goToDatos() {
    history.push({ pathname: `${idNave}/datos/${idSensor}`, state: { sensor: sensor } });
  }
  return (
    <div className="datos-n">
      <div className="titulo text-center">
        <h2>Datos Sensor</h2>
      </div>
      <div className="titulo2">
        <div className="item">
          <h1>Opciones</h1>
        </div>
        <div className="item">
          <h1>Presentacion Grafica</h1>
        </div>
        <div className="item">
          <h1>Datos</h1>
        </div>
      </div>
      <div className="sectionDATEs ">
        <div className="pl-5 text-left mt">
          <h5>ID: {idSensor}</h5>
          <h5>Tipo: {tipoSensor}</h5>
          <h3>Valor Maximo: {valorMaximoSensor}</h3>
          <h3 className="pb-4">Valor Maximo: {valorMinimoSensor}</h3>
          <h5>mensaje: {msgValorMaximoSensor}</h5>
          <h5>mensaje: {msgValorMinimoSensor}</h5>
        </div>
        <div className="p-5 mt"></div>
        <div className="p-5 mx-auto ">
          <div className="msw">
            <div className="mx-auto">
              <Button color="danger" className="mr-5">
                <FontAwesomeIcon icon={faBan} size="sm" className="mr-2" />
              </Button>
              <Button color="info" className="mr-5">
                <FontAwesomeIcon icon={faPencilAlt} size="sm" className="mr-2" />
              </Button>
              <Button onClick={goToDatos} color="success">
                <FontAwesomeIcon icon={faEye} size="sm" className="mr-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoSensor;
