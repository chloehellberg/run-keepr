import React from "react";
import { Route, Switch } from "react-router-dom";
import Feed from "./FeedSection/Feed";
import Me from "./MeSection/Me";
import Log from "./LogSection/Log";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Feed />
      </Route>
      <Route exact path="/me">
        <Me />
      </Route>
      <Route path="/me/reports">
        <div>REPORTS</div>
      </Route>
      <Route exact path="/log">
        <Log />
      </Route>
    </Switch>
  );
}
