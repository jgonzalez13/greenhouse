import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

const Login = () => {
  return (
    <button className="btn login-btn">
      <FontAwesomeIcon color="#182026" icon={faUserCircle} size="lg" className="mr-2" />
      Login
    </button>
  );
};

export default Login;
