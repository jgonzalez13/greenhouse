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
        <div className="pl-5 text-left mt-r pt-3 max-width-30 pr-5">
          <div className="mb-4">
            <h5>ID: {idSensor}</h5>
            <h5>Tipo de Sensor: {tipoSensor}</h5>
          </div>
          {!twoValues && (
            <>
              <div className="bordecuadro">
                <div className="  mb-2 pl-2">
                  <div className="titlo">
                    <h3>Maximo</h3>
                  </div>
                  <h4>Valor Maximo: {valorMaximoSensor}</h4>
                  <h5>mensaje: {msgValorMaximoSensor}</h5>
                </div>
              </div>
              <div className="bordecuadro">
                <div className=" mb-2 pl-2">
                  <div className="titlo">
                    <h3>Minimo</h3>
                  </div>
                  <h4>Valor Minimo: {valorMinimoSensor}</h4>
                  <h5>mensaje: {msgValorMinimoSensor}</h5>
                </div>
              </div>{' '}
            </>
          )}
          {twoValues && (
            <>
              <div className="mt-3 bordecuadro">
                <div className="titlo">
                  <h3>Maximo</h3>
                </div>
                <div className=" mb-2 pl-2">
                  <h5>Valor Maximo: {valorMaximoSensor[firstValue]}</h5>
                  <h5>Mensaje: {msgValorMaximoSensor[firstValue]}</h5>
                </div>
              </div>
              <div className=" bordecuadro mb-5">
                <div className="titlo">
                  <h3>Minimo</h3>
                </div>
                <div className="mb-2 pl-2">
                  <h5>Valor Minimo: {valorMinimoSensor[firstValue]}</h5>
                  <h5>Mensaje: {msgValorMinimoSensor[firstValue]}</h5>
                </div>
              </div>
            </>
          )}
          {twoValues && (
            <>
              <div className=" mt-1 bordecuadro">
                <div className="titlo">
                  <h3>Maximo</h3>
                </div>
                <div className=" mb-2 pl-2">
                  <h5>Valor Maximo: {valorMaximoSensor[secondValue]}</h5>
                  <h5>Mensaje: {msgValorMaximoSensor[secondValue]}</h5>
                </div>
              </div>
              <div className="bordecuadro">
                <div className="titlo">
                  <h3>Minimo</h3>
                </div>
                <div className="  mb-2 pl-2">
                  <h5>Valor Minimo: {valorMinimoSensor[secondValue]}</h5>
                  <h5>Mensaje: {msgValorMinimoSensor[secondValue]}</h5>
                </div>
              </div>
            </>
          )}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default InfoSensor;
