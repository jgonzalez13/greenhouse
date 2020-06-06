import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRoutes from "./public/PublicRoutes";
import PrivateRoutes from "./private/PrivateRoutes";
import { UserStore } from "containers/context/User.context";

function AppRouter() {
  const { auth } = useContext(UserStore);
  return (
    <Router>
      <PublicRoutes auth={auth} />
      <PrivateRoutes auth={auth} />
    </Router>
  );
}

export default AppRouter;
