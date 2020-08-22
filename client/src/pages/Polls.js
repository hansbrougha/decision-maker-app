import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import BottomNav from '../components/BottomNav'; 
import CreateDecision from "../components/CreateDecision";

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
        <Card className={classes.card} align="center">
          <CreateDecision />
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Polls);
