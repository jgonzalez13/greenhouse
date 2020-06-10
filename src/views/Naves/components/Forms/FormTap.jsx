import React from 'react';
import { Row, Col } from 'reactstrap';
import FormField from 'shared/FormField';

const FormTap = ({ nameSensor, twoValues, firstValue, secondValue }) => (
  <div className="p-2">
    <Row>
      <Col sm="6">
        <FormField name={`sensores.${nameSensor}.idSensor`} placeholder="Ingrese el id del sensor" />
      </Col>
      <Col sm="6">
        <FormField name={`sensores.${nameSensor}.tipoSensor`} placeholder="Ingrese el tipo de sensor" />
      </Col>
    </Row>

    <div className="mb-3">
      <h6>UMBRALES</h6>
    </div>
    {!twoValues && (
      <>
        <Row>
          <Col sm="8">
            <FormField
              name={`sensores.${nameSensor}.msgValorMinimoSensor`}
              placeholder="Ingrese el mensaje de valor minimo"
            />
          </Col>
          <Col sm="4">
            <FormField name={`sensores.${nameSensor}.valorMinimoSensor`} placeholder="Valor minimo" />
          </Col>
        </Row>

        <Row>
          <Col sm="8">
            <FormField
              name={`sensores.${nameSensor}.msgValorMaximoSensor`}
              placeholder="Ingrese el mensaje de valor Maximo"
            />
          </Col>
          <Col sm="4">
            <FormField name={`sensores.${nameSensor}.valorMaximoSensor`} placeholder="Valor Maximo" />
          </Col>
        </Row>
      </>
    )}

    {twoValues && (
      <>
        <div className="mb-3">
          <h6 className="text-uppercase">{firstValue}</h6>
        </div>

        <Row>
          <Col sm="8">
            <FormField
              name={`sensores.${nameSensor}.msgValorMinimoSensor.${firstValue}`}
              placeholder="Ingrese el mensaje de valor minimo"
            />
          </Col>
          <Col sm="4">
            <FormField
              name={`sensores.${nameSensor}.valorMinimoSensor.${firstValue}`}
              placeholder="Valor minimo"
            />
          </Col>
        </Row>

        <Row>
          <Col sm="8">
            <FormField
              name={`sensores.${nameSensor}.msgValorMaximoSensor.${firstValue}`}
              placeholder="Ingrese el mensaje de valor Maximo"
            />
          </Col>
          <Col sm="4">
            <FormField
              name={`sensores.${nameSensor}.valorMaximoSensor.${firstValue}`}
              placeholder="Valor Maximo"
            />
          </Col>
        </Row>

        <div className="mb-3">
          <h6 className="text-uppercase">{secondValue}</h6>
        </div>

        <Row>
          <Col sm="8">
            <FormField
              name={`sensores.${nameSensor}.msgValorMinimoSensor.${secondValue}`}
              placeholder="Ingrese el mensaje de valor minimo"
            />
          </Col>
          <Col sm="4">
            <FormField
              name={`sensores.${nameSensor}.valorMinimoSensor.${secondValue}`}
              placeholder="Valor minimo"
            />
          </Col>
        </Row>

        <Row>
          <Col sm="8">
            <FormField
              name={`sensores.${nameSensor}.msgValorMaximoSensor.${secondValue}`}
              placeholder="Ingrese el mensaje de valor Maximo"
            />
          </Col>
          <Col sm="4">
            <FormField
              name={`sensores.${nameSensor}.valorMaximoSensor.${secondValue}`}
              placeholder="Valor Maximo"
            />
          </Col>
        </Row>
      </>
    )}
  </div>
);

export default FormTap;
