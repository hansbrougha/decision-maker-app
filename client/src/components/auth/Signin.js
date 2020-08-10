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
import auth from "./auth-helper";
import { Redirect } from "react-router-dom";
import { signin } from "../../utils/api-auth.js";
import Alert from "@material-ui/lab/Alert";

const styles = (theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  error: {
    verticalAlign: "middle",
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
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
        pathname: "/",
      },
    };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Card className={classes.card}>
        <Alert severity="info" action={<Button href="/signup">SIGN UP</Button>}>
          Must have an account to view/create polls!
        </Alert>
        <CardContent>
          <Typography type="headline" component="h2" className={classes.title}>
            Sign In
          </Typography>
          <TextField
            id="email"
            type="email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange("email")}
            margin="normal"
          />
          <br />
          <TextField
            id="password"
            type="password"
            label="Password"
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
            color="primary"
            variant="outlined"
            onClick={this.clickSubmit}
            className={classes.submit}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Signin);
