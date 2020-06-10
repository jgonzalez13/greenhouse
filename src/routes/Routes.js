import React, { useContext, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './private/PrivateRoute';
import PublicRoute from './public/PublicRoute';
import { UserStore } from 'containers/context/User.context';
import Spin from 'shared/Spin';

const HomeView = lazy(() => import('views/Nave/Nave'));
const NavesView = lazy(() => import('views/Naves/Naves'));
const NaveView = lazy(() => import('views/Nave/Nave'));

function AppRouter() {
  const { auth } = useContext(UserStore);
  return (
    <Router>
      <Suspense fallback={<Spin />}>
        <div className="background-container">
          <Switch>
            <PublicRoute path="/" component={HomeView} auth={auth} exact />
            <PrivateRoute path="/naves" component={NavesView} auth={auth} exact />
            <PrivateRoute path="/naves/:id" component={NaveView} auth={auth} exact />
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default AppRouter;
