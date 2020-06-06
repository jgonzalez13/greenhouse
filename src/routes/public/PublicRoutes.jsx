import React from "react";
import { Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import HomeView from "views/Home/Home";

const PrivateRoutes = ({ auth }) => (
  <Switch>
    <PublicRoute path="/" component={HomeView} auth={auth} exact />
  </Switch>
);

export default PrivateRoutes;
