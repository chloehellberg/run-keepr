import React from "react";
import { Route, Switch } from "react-router-dom";
import Feed from "./FeedNav/Feed";
import UserTab from "./UserNav/UserTab";
import Log from "./LogNav/Log";
import AddMap from "./UserNav/MapNav/AddMap";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Feed />
      </Route>
      <Route exact path="/user">
        <UserTab />
      </Route>
      <Route path="/new/route">
        <AddMap />
      </Route>
      <Route exact path="/log">
        <Log />
      </Route>
    </Switch>
  );
}
