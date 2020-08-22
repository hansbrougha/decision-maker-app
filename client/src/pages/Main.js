import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../components/index.scss";
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

  const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "#009688" };
    else return { color: "#ffffff" };
  };

class Authorized extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className='container'>
                  <Grid container className={classes.grid} spacing={3}> 
          <Grid item>
              <Card className={classes.card}>
                <CardContent align="center">
                  <a href="/create">
                    <FontAwesomeIcon
                      title="Create"
                      icon={['fad', 'plus']}
                      className={classes.icon}
                    />
                  </a>

                  <Typography  component="h2">
                    Create
                  </Typography>
                </CardContent>
              </Card>

          </Grid>
          <Grid item >

              <Card className={classes.card}>
                <CardContent>
                  <a href="/results/:_id">
                  <FontAwesomeIcon
                      title="Results"
                      icon={['fad', 'poll-people']}
                      className={classes.icon}
                      onClick={isActive}
                    />
                  </a>

                  <Typography  component="h2">
                   Results
                  </Typography>
                </CardContent>
              </Card>

          </Grid>
          <Grid item >

              <Card className={classes.card}>
                <CardContent>
                  <a href="/recent">
                  <FontAwesomeIcon
                      title="Recents"
                      icon={['fad', 'redo-alt']}
                      className={classes.icon}
                    />
                  </a>

                  <Typography  component="h2">
                    Recent
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

export default withStyles(styles)(Authorized)