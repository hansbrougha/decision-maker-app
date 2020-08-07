import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import logo from "../logo.svg";
import CreateDecision from "./CreateDecision/CreateDecision";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = (theme) => ({
  card: {
    maxWidth: 700,
    margin: "auto",
    marginTop: theme.spacing(5)
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.text.secondary,
    fontSize: 24
  },
  media: {
    minHeight: 450
  }
});

class Polls extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <CssBaseline />
        <Card className={classes.card}>
          <CardContent align="center">
            <CreateDecision />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Polls);
