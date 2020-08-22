import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from './components/Footer'
import PrivateRoutes from "./components/auth/PrivateRoutes";
import Signin from "./pages/Signin";
import Results from "./pages/Results";
import Signup from "./pages/Signup";
import Authorized from './pages/Main'
import Polls from "./pages/Polls";
import NewPoll from "./pages/NewPoll";
import PollChart from "./components/PollChart";
import Recents from "./pages/Recents";
import Profile from './pages/Profile'; 
import BottomNav from './components/BottomNav'; 


// import PollDisplay from "./pages/PollDisplay";
class Routes extends Component {
  render() {
    return (
      <div className='container'>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />

          <PrivateRoutes path="/user/edit/:_id" />
          <Route path="/results/:_id" component={Results} />
          <Route path="/profile/:_id" component={Profile} />


          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />


          <PrivateRoutes path="/main" component={Authorized} />
          <PrivateRoutes path="/addOptions" component={NewPoll} />

          <PrivateRoutes path="/create" component={Polls} />
          <PrivateRoutes path="/recent" component={Recents} />


          {/* <Route path="/:pollId/pollDisplay" component={PollDisplay} />
        */}
        </Switch>
      
      </div>
    );
  }
}
export default Routes;
