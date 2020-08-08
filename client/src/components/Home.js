import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import logo from "../logo.svg";
//https://undraw.co/illustrations

import pollsImg from "../imgs/Polls.svg";
import newPollImg from "../imgs/newPollImg.svg";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  card: {
    margin: "auto",
    marginTop: theme.spacing(5),
    height: 300
  },

  media: {
    minHeight: 450,
    maxHeight: 550,
    maxWidth: 300
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardContent align="center">
                  <Typography type="body1" component="p">
                    <a href="/polls">
                      <img alt="view-polls" src={pollsImg} />
                    </a>
                    <div>Recent Polls</div>
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardContent align="center">
                  <br />
                  <br />
                  <Typography type="body1" component="p">
                    <a href="/polls">
                      <img alt="create-poll" src={newPollImg} />{" "}
                    </a>
                    <div>Create Poll</div>
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item s={0} sm={0} md={1} lg={1} xl={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
