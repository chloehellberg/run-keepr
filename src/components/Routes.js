import React from "react";
import { Route, Switch } from "react-router-dom";
import Feed from "./Feed";
import Me from "./Me";
import Log from "./Log";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Feed />
      </Route>
      <Route exact path="/me">
        <Me />
      </Route>
      <Route exact path="/log">
        <Log />
      </Route>
    </Switch>
  );
}
