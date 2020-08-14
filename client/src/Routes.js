import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import PrivateRoutes from "./components/auth/PrivateRoutes";
import Signin from "./components/auth/Signin";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

import Polls from "./pages/Polls";
import NewPoll from "./pages/NewPoll";
import PollChart from "./components/PollChart";
import Recents from "./pages/Recents";

import PollDisplay from "./pages/PollDisplay";
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
