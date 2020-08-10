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
// import TakePoll from "./components/TakePoll/TakePoll";
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
          <PrivateRoutes path="/user/edit/:_id" />
          <Route path="/users/:_id" component={Profile} />
          <PrivateRoutes path="/polls" component={Polls} />
          <Route path="/newpoll" component={NewPoll} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <PrivateRoutes path="/recent" component={Recents} />

          {/* <Route path="/:pollId" component={TakePoll} /> */}
          <Route path="/:pollId" component={PollChart} />

          <Route path="/:pollId/pollDisplay" component={PollDisplay} />
        </Switch>
      </div>
    );
  }
}
export default Routes;
