import React from 'react';
import { Spinner } from 'reactstrap';

const Spin = () => (
  <>
    <Spinner animation="border" role="status"></Spinner>
    <span className="sr-only">Loading...</span>
  </>
);

export default Spin;
