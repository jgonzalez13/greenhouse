import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NavesView from 'views/Naves/Naves';

const PrivateRoutes = ({ auth }) => (
  <Switch>
    <PrivateRoute path="/naves" component={NavesView} auth={auth} exact />
  </Switch>
);

export default PrivateRoutes;
