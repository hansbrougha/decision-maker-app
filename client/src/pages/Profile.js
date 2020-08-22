import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import auth from "../components/auth/auth-helper";
import { findUserProfile } from "../utils/api-user.js";
import { Redirect } from "react-router-dom";
import Charts from '../components/Charts';
import './index.scss'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from "@material-ui/core";
import { Paper } from '@material-ui/core';
const styles = (theme) => ({
  root: {
    margin: "0 auto",
    color: 'black'
  },
  title: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
    color: '#303030'
  },
});

class Profile extends Component {
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
      <div className='container'>
        <Typography>
          <h1>{auth.isAuthenticated().user.name}'s Profile</h1>
        </Typography>
        <TableContainer component={Paper} className='profile-root'>
          <Table className='profile-root' elevation={4}>
            <TableHead>
              <TableRow>
                <TableCell>Email </TableCell>
                <TableCell>{auth.isAuthenticated().user.email}</TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow>
                <TableCell># of Polls Participated In </TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            </TableHead>
            

            {/* <ListItem>
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
          </ListItem> */}




          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
