import React, { useState } from 'react';
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import FormField from 'shared/FormField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import FormTap from './FormTap';
import classnames from 'classnames';

const FormNave = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <div className="mb-4">
        <h4>DATOS DE LA NAVE</h4>
      </div>

      <Row>
        <Col sm="6">
          <FormField name="idNave" placeholder="Ingrese el id" />
        </Col>
        <Col sm="6">
          <div className="d-flex justify-content-center">
            <FontAwesomeIcon color="#4BB543" icon={faCheckCircle} size="lg" className="mr-2" />
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm="6">
          <FormField name="nombreNave" placeholder="Ingrese el nombre" />
        </Col>
        <Col sm="6">
          <FormField name="rutaNave" placeholder="Ingrese la locación" />
        </Col>
      </Row>

      <Row>
        <Col sm="12">
          <FormField name="descripcionNave" placeholder="Ingrese la descripción" component="textarea" rows={3} />
        </Col>
      </Row>

      <div className="mb-1">
        <h4>Sensores</h4>
      </div>
      <Nav tabs>
        <NavItem>
          <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => toggle('1')}>
            DHT11
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => toggle('2')}>
            Fotocelda
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => toggle('3')}>
            BMP180
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <FormTap nameSensor="sensorDHT11" />
        </TabPane>

        <TabPane tabId="2">
          <FormTap nameSensor="sensorFotocelda" />
        </TabPane>

        <TabPane tabId="3">
          <FormTap nameSensor="sensorPresion" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default FormNave;
