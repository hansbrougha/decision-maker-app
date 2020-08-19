import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signin from "./components/auth/Signin";
import Profile from "./components/user/Profile";
import Signup from "./components/user/Signup";

import Polls from "./components/Polls";
import Recents from "./components/Recents";

class Routes extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/user/edit/:_id" />
          <Route exact path="/users/:_id" component={Profile} />

          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />

          <Route exact path="/create" component={Polls} />
          <Route exact path="/recent" component={Recents} />
        </Switch>
      </div>
    );
  }
}
export default Routes;
