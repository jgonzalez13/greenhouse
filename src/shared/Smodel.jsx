import React from 'react';
import { Spinner } from 'reactstrap';

const Spin = () => (
  <>
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
    ;
  </>
);

export default Spin;
