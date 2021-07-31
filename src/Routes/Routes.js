import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { defaultRoutes } from "./routesList";
import Default from "../Layouts/Default";
import ScrollToTop from "../ScrollToTop";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          {defaultRoutes.map((route, id) => (
            <Route exact path={route.path} key={id} component={Default} />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
