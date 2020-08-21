import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import PrivateRoutes from "./components/auth/PrivateRoutes";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Authorized from './pages/Authorized'
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
          <Route exact path="." component={Home} />

          <PrivateRoutes path="/user/edit/:_id" />
          <Route path="/users/:_id" component={Profile} />


          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />


          <PrivateRoutes path="/main" component={Authorized} />
          <PrivateRoutes path="/addOptions" component={NewPoll} />

          <PrivateRoutes path="/create" component={Polls} />
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
