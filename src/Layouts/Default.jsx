import React from "react";
import { Route, Switch } from "react-router-dom";
import { defaultRoutes } from "../Routes/routesList";

function Default() {
  return (
    <div>
      <Switch>
        {defaultRoutes.map((route, id) => (
          <Route exact key={id} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default Default;
