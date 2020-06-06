import React from 'react';
import MyTemperature from './components/temperature';

const Nave = ({ location }) => {
  const { nombreNave, descripcionNave, idNave, rutaNave } = location.state.nave;
  return (
    <div>
      <h1>Hola nave</h1>
      <div>
        {nombreNave}
        <br />
        {descripcionNave}
        <br />
        {idNave}
        <br />
        {rutaNave}
      </div>
      <div className="section"></div>
      <MyTemperature />
    </div>
  );
};

export default Nave;
