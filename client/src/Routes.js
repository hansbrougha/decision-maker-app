import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import PrivateRoutes from "./components/auth/PrivateRoutes";
import Signin from "./components/auth/Signin";
import Profile from "./components/user/Profile";
import Signup from "./components/user/Signup";

import Polls from "./components/Polls";
import NewPoll from "./components/NewPoll";
import PollChart from "./components/PollChart/PollChart";
import Recents from "./components/Recents";

import PollDisplay from "./components/PollDisplay";
class Routes extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoutes exact path="/user/edit/:_id" />
          <Route exact path="/users/:_id" component={Profile} />

          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />

          <PrivateRoutes exact path="/addOptions" component={NewPoll} />

          <PrivateRoutes exact path="/create" component={Polls} />
          <PrivateRoutes exact path="/recent" component={Recents} />

          {/* <Route path="/:pollId" component={TakePoll} /> */}
          <Route exact path="/:pollId" component={PollChart} />

          <Route exact path="/:pollId/pollDisplay" component={PollDisplay} />
        </Switch>
      </div>
    );
  }
}
export default Routes;
