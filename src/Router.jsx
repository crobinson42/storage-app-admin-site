import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { LoginScreen } from "./modules/Auth/screens/Login";
import { DashboardRoutes } from "./modules/Dashboard/Routes";

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        {isAuthenticated && <DashboardRoutes />}

        <Route component={LoginScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export { Router };
