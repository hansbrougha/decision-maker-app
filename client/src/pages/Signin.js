import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import auth from "../components/auth/auth-helper";
import { Redirect } from "react-router-dom";
import { signin } from "../utils/api-auth.js";
import Link from '@material-ui/core/Link';

import Alert from "@material-ui/lab/Alert";


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
  },
  header: {
    backgroundColor: '#009688'
  }
});

class Signin extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    redirectToReferrer: false,
  };

  clickSubmit = () => {
    const user = {
      email: this.state.email || undefined,
      password: this.state.password || undefined,
    };

    signin(user).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        auth.authenticate(data, () => {
          this.setState({ redirectToReferrer: true });
        });
      }
    });
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { from } = this.props.location.state || {
      from: {
        pathname: "/main",
      },
    };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Card className={classes.card}>
        {/* <Alert severity="info" className={classes.header} action={<Button href="/signup">SIGN UP</Button>}>
          Must have an account to view/create polls!
        </Alert> */}
        <CardContent>
          <Typography type="headline" variant="h2" className={classes.title}>
            Login
          </Typography>
          <TextField
            id="email"
            type="email"
            placeholder="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange("email")}
            margin="normal"
          />
          <br />
          <TextField
            id="password"
            type="password"
            placeholder="Password"
            className={classes.textField}
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
            variant="filled"
            onClick={this.clickSubmit}
            className={classes.submit}
            id="submitBtn"
          >
            Log In
          </Button>
        </CardActions>
        <Typography variant="caption" className={classes.root}>Don't have an account? <Link to='/signup' id="link">Sign up here.</Link></Typography>
      </Card>
    );
  }
}

export default withStyles(styles)(Signin);
