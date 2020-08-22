import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./index.scss";
import PollIcon from "@material-ui/icons/Poll";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
  grid: {
    margin: '0 auto',
    padding: '1em', 
    width: 'fit-content'
  },
  card: {
    margin: "0 auto",
    backgroundColor: '#212121',
    color: 'white',
    width: '100%',
    textAlign: 'center'
  },
  icon: {
    fontSize: '5em',
    color: '#009688',
    textAlign: 'center', 
    margin: '0.25em'
  },

});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className='container'>
        <Typography variant='h1'>
          Welcome! <br />
        </Typography>
        <Grid container className={classes.grid} spacing={1}> 
          <Grid item>
              <Card className={classes.card}>
                <CardContent align="center">
                  <a href="/signup">
                    <FontAwesomeIcon
                      title="Sign Up"
                      icon={['fad', 'plus']}
                      className={classes.icon}
                    />
                  </a>

                  <Typography  component="h2">
                    Sign Up
                  </Typography>
                </CardContent>
              </Card>

          </Grid>
          <Grid item >

              <Card className={classes.card}>
                <CardContent >
                  <a href="/signin">
                  <FontAwesomeIcon
                      title="Sign Up"
                      icon={['fad', 'sign-in']}
                      className={classes.icon}
                    />
                  </a>

                  <Typography  component="h2">
                    Log In
                  </Typography>
                </CardContent>
              </Card>

          </Grid>
          <Grid item xs={false} sm={false} md={1} lg={1} xl={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
