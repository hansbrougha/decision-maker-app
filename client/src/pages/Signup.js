import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import { FormControl } from '@material-ui/core';
import './index.scss'; 
import { registerUser } from "../utils/api-user.js";

const styles = (theme) => ({
  root: {
    color: '#ffffff'
  },
  card: {
    maxWidth: 600,
    margin: "0 auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    backgroundColor: '#212121'
  },
  error: {
    verticalAlign: "middle",
  },
  title: {
    margin: '0.5em 0 0.5em 0'
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
  input: {
    marginBottom: '1em'
  }
});

class Signup extends Component {
  state = {
    name: "",
    password: "",
    email: "",
    open: false,
    error: "",
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = () => {
    const user = {
      name: this.state.name || undefined,
      email: this.state.email || undefined,
      password: this.state.password || undefined,
    };
    registerUser(user).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ error: "", open: true });
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>  

          <CardContent>
          
            <Typography
              type="headline"
              variant="h2"
              className={classes.title}
            >
              Sign Up
            </Typography>
            <Input
              required
              id="name"
              placeholder="Name"
              className={classes.input}
              value={this.state.name}
              onChange={this.handleChange("name")}
              variant='filled'
            />
            <br />
            <Input
              required
              id="email"
              type="email"
              placeholder="Email"
              className={classes.input}
              value={this.state.email}
              onChange={this.handleChange("email")}
              variant='filled'
            />
            <br />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className={classes.input}
              value={this.state.password}
              onChange={this.handleChange("password")}
              margin="normal"
            />
            <br />{" "}
            {this.state.error && (
              <Typography component="p" color="error">
                <Icon color="error" className={classes.error}>
                  error
                </Icon>
                {this.state.error}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button
              color="#009688"
              variant="contained"
              onClick={this.clickSubmit}
              className={classes.submit}
              id='submitBtn'
            >
              Sign Up
            </Button>
          </CardActions>
        </Card>
        <Dialog open={this.state.open} disableBackdropClick={true}>
          <DialogTitle>New Account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              New account successfully created.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to="/signin">
              <Button color="primary" autoFocus="autoFocus" variant="contained">
                Sign In
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Signup);
