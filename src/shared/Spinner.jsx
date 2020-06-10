import React from 'react';

const Spinner = () => (
  <>
    <div>
      <Spinner animation="border" role="status">
        <span className="sr-only">Cargando</span>
      </Spinner>
    </div>
  </>
);

export default Spinner;
