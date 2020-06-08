import React from 'react';
import Tabla from './components/tabla';
import './Datos.css';

const Datos = () => {
  const card = function () {
    this.rank = 'rank';
    this.suit = 'suit';
  };
  return (
    <div className="z">
      <Tabla />
    </div>
  );
};

export default Datos;
