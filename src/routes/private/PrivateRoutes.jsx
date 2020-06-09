import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NavesView from 'views/Naves/Naves';
import NaveView from 'views/Nave/Nave';

const PrivateRoutes = ({ auth }) => (
  <Switch>
    <PrivateRoute path="/naves" component={NavesView} auth={auth} exact />
    <PrivateRoute path="/naves/:id" component={NaveView} auth={auth} exact />
  </Switch>
);

export default PrivateRoutes;
