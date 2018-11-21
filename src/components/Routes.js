import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import MemberList from "./MemberList";
import Edit from "./Edit";
import NotFound from "./NotFound";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/MemberList" component={MemberList} />
    <Route exact path="/Edit" component={Edit} />
    <Route component={NotFound} />
  </Switch>
);
