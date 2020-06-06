import React from 'react';

const Nave = ({ location }) => {
  const { nombreNave, descripcionNave, idNave } = location.state.nave;
  return (
    <div>
      <h1>Hola nave</h1>
      {nombreNave}
    </div>
  );
};

export default Nave;
