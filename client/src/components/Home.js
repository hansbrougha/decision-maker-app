import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

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
          <Grid item xs={false} sm={false} md={1} lg={1} xl={1}></Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardContent align="center">
                  <a href="/polls">
                    <img alt="view-polls" src={pollsImg} />
                  </a>
                  <Typography type="body1" component="h2">
                    Recent Polls
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

                  <a href="/polls">
                    <img alt="create-poll" src={newPollImg} />{" "}
                  </a>
                  <Typography type="body1" component="h2">
                    Create Poll
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={false} sm={false} md={1} lg={1} xl={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
