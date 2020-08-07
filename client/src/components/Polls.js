import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import logo from "../logo.svg";

const styles = (theme) => ({
  card: {
    maxWidth: 700,
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.text.secondary,
    fontSize: 24,
  },
  media: {
    minHeight: 450,
  },
});

class Polls extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <Typography type="headline" component="h2" className={classes.title}>
            Welcome to the MERN APP
          </Typography>

          <CardContent align="center">
            <Typography type="body1" component="p">
              Make a poll, or a decision, or....something. <br />
              <a href="/polls">
                <img src="https://img.icons8.com/windows/96/000000/poll-horizontal.png" />{" "}
              </a>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Polls);
