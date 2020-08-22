import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import auth from "../components/auth/auth-helper";
import { findUserProfile } from "../utils/api-user.js";
import { Redirect } from "react-router-dom";
import Charts from '../components/Charts'; 

import RecentPolls from "../components/RecentPolls";
import BottomNav from '../components/BottomNav'; 
import DeleteUser from "./DeleteUser";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: "0 auto",
    padding: theme.spacing(3),
    marginTop: theme.spacing(5),
  },
  title: {
    color: theme.palette.protectedTitle,
  },
});

class Result extends Component {
  constructor({ match }) {
    super();
    this.state = {
      user: "",
      redirectToSignin: false,
    };
    this.match = match;
  }
  init = (userId) => {
    const jwt = auth.isAuthenticated();
    findUserProfile(
      {
        userId: userId,
      },
      { t: jwt.token }
    ).then((data) => {
      if (data.error) {
        this.setState({ redirectToSignin: false });
      } else {
        this.setState({ user: data });
      }
    });
  };
  componentDidUpdate = (props) => {
    this.init(props.match.params.userId);
  };
  componentDidMount = () => {
    this.init(this.match.params._id);
  };
  render() {
    const { classes } = this.props;
    const redirectToSignin = this.state.redirectToSignin;
    if (redirectToSignin) {
      return <Redirect to="/signin" />;
    }
    return (
      <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          Poll Charts
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary={this.state.user.name}
              secondary={this.state.user.email}
            />{" "}
            {auth.isAuthenticated().user &&
              auth.isAuthenticated().user._id === this.state.user._id && (
                <ListItemSecondaryAction>
                  <DeleteUser userId={this.state.user._id} />
                </ListItemSecondaryAction>
              )}
          </ListItem>
          <Divider />
        </List>
        <Charts />
      </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Result);
