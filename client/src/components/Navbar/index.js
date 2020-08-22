import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import auth from "../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";

import "../index.scss";

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "#009688" };
  else return { color: "#ffffff" };
};
const Menu = withRouter(({ history }) => (
  <AppBar position="static" className="nav">
    <Link to="/" className="nav" id="logo">
      <p type="title" id="logo">
        unbiased.io
      </p>
    </Link>
    <Toolbar className="nav">
      <br />
      {!auth.isAuthenticated() && (
        <span className="navbar">
          <Link to="/" className="navItem">
            <IconButton aria-label="Home" style={isActive(history, "/")}>
              <Home />
            </IconButton>
          </Link>
          <Link to="/signup" className="navItem">
            <Button style={isActive(history, "/signup")}>Sign up</Button>
          </Link>
          <Link to="/signin" className="navItem">
            <Button style={isActive(history, "/signin")}>Sign In</Button>
          </Link>
        </span>
      )}
      {auth.isAuthenticated() && (
        <span>
          Welcome <strong>{auth.isAuthenticated().user.name}!</strong>
          <Link to={"/users/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/profile/:_id")}>
              Poll results
            </Button>
          </Link>
          <Link to="/" className="navItem">
            <Button
              color="inherit"
              onClick={() => {
                auth.signout(() => history.push("/"));
              }}
            >
              Sign out
            </Button>
          </Link>
        </span>
      )}
    </Toolbar>
  </AppBar>
));

export default Menu;
