import React from 'react';
import { Spinner } from 'reactstrap';

const Spinners = () => (
  <>
    <div>
      <Spinner animation="border" role="status"></Spinner>
      <div>CARGANDO</div>
    </div>
  </>
);

export default Spinners;
