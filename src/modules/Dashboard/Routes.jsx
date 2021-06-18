import React from "react";
import { Route, Switch } from "react-router";
import { Navbar } from "./components/Navbar";
import { DashboardScreen } from "./screens/Dashboard";

const DashboardRoutes = () => {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route component={DashboardScreen} />
      </Switch>
    </div>
  );
};

export { DashboardRoutes };
