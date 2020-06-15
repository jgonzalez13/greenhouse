import React from 'react';

const InfoSensor = ({ children, sensor, name, twoValues, firstValue, secondValue }) => {
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
          <div className="mb-4">
            <h5>ID: {idSensor}</h5>
            <h5>Tipo de Sensor: {tipoSensor}</h5>
          </div>
          {!twoValues && (
            <div className="">
              <div className="  mb-5 pl-2">
                <h3>Maximo</h3>
                <h4>Valor Maximo: {valorMaximoSensor}</h4>
                <h5>mensaje: {msgValorMaximoSensor}</h5>
              </div>
              <div className="">
                <h3>Minimo</h3>
                <h4>Valor Minimo: {valorMinimoSensor}</h4>
                <h5>mensaje: {msgValorMinimoSensor}</h5>
              </div>
            </div>
          )}
          {twoValues && (
            <div className="">
              <div className="  mb-5 pl-2">
                <h3>Maximo</h3>
                <h4>Valor Maximo: {valorMaximoSensor[firstValue]}</h4>
                <h5>mensaje: {msgValorMaximoSensor[firstValue]}</h5>
              </div>
              <div className="">
                <h3>Minimo</h3>
                <h4>Valor Minimo: {valorMinimoSensor[firstValue]}</h4>
                <h5>mensaje: {msgValorMinimoSensor[firstValue]}</h5>
              </div>
            </div>
          )}
          {twoValues && (
            <div className="mt-5">
              <div className="  mb-5 pl-2">
                <h3>Maximo</h3>
                <h4>Valor Maximo: {valorMaximoSensor[secondValue]}</h4>
                <h5>mensaje: {msgValorMaximoSensor[secondValue]}</h5>
              </div>
              <div className="">
                <h3>Minimo</h3>
                <h4>Valor Minimo: {valorMinimoSensor[secondValue]}</h4>
                <h5>mensaje: {valorMinimoSensor[secondValue]}</h5>
              </div>
            </div>
          )}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default InfoSensor;
