import React from 'react';

const InfoSensor = ({ children, sensor, name }) => {
  const {
    idSensor,
    msgValorMaximoSensor,
    msgValorMinimoSensor,
    tipoSensor,
    valorMaximoSensor,
    valorMinimoSensor,
  } = sensor;

  return (
    <div className="datos-n bg-light">
      <div className="titulo text-center">
        <h2>{name}</h2>
      </div>
      <div className="sectionDATEs">
        <div className="pl-5 text-left mt-r pt-3 max-width-30">
          <h5>ID: {idSensor}</h5>
          <h5>Tipo: {tipoSensor}</h5>
          <h3>Valor Maximo: {valorMaximoSensor}</h3>
          <h3 className="pb-4">Valor Maximo: {valorMinimoSensor}</h3>
          <h5>mensaje: {msgValorMaximoSensor}</h5>
          <h5>mensaje: {msgValorMinimoSensor}</h5>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default InfoSensor;
