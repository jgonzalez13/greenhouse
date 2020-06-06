import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const PrivateRoutes = ({ auth }) => (
  <Switch>
    <PrivateRoute
      path="/files"
      component={() => <div>loogged</div>}
      auth={auth}
      exact
    />
  </Switch>
);

export default PrivateRoutes;
