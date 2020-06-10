import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './private/PrivateRoute';
import PublicRoute from './public/PublicRoute';
import { UserStore } from 'containers/context/User.context';
import HomeView from 'views/Nave/Nave';
import NavesView from 'views/Naves/Naves';
import NaveView from 'views/Nave/Nave';

function AppRouter() {
  const { auth } = useContext(UserStore);
  return (
    <Router>
      <div className="background-container">
        <Switch>
          <PublicRoute path="/" component={HomeView} auth={auth} exact />
          <PrivateRoute path="/naves" component={NavesView} auth={auth} exact />
          <PrivateRoute path="/naves/:id" component={NaveView} auth={auth} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
