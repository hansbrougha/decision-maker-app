import React, { Component, Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import CircularProgress from "@material-ui/core/CircularProgress";

// import Home from "./components/Home";
// import Signin from "./components/auth/Signin";
// import Profile from "./components/user/Profile";
// import Signup from "./components/user/Signup";
// import Polls from "./components/Polls";
// import NewPoll from "./components/NewPoll";
// import TakePoll from "./components/TakePoll/TakePoll";
// import PollChart from "./components/PollChart/PollChart";

const Home = lazy(() => import("./components/Home"));
const Profile = lazy(() => import("./components/user/Profile"));
const Polls = lazy(() => import("./components/Polls"));
const NewPoll = lazy(() => import("./components/NewPoll"));
const TakePoll = lazy(() => import("./components/TakePoll/TakePoll"));
const PollChart = lazy(() => import("./components/PollChart/PollChart"));
const Signup = lazy(() => import("./components/user/Signup"));
const Signin = lazy(() => import("./components/auth/Signin"));

class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Suspense fallback={<CircularProgress className="loading" />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoutes path="/user/edit/:userId" />
            <Route path="/user/:userId" component={Profile} />
            <Route path="/polls" component={Polls} />
            <Route path="/newpoll" component={NewPoll} />
            <Route path="/:pollId" component={TakePoll} />
            <Route path="/:pollId" component={PollChart} />

            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default Routes;
