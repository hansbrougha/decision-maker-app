import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../components/index.scss";
import BottomNav from '../components/BottomNav';

const styles = (theme) => ({
    grid: {
      margin: '0 auto',
      width: 'fit-content'
    },
    card: {
      margin: "0 auto",
      marginTop: theme.spacing(5),
      backgroundColor: '#212121',
      width: 'fit-content',
      color: 'white',
      textAlign: 'center'
    },
    icon: {
      fontSize: '5em',
      color: '#009688',
      margin: '0.25em'
    },
  
  });

class Authorized extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                  <Grid container className={classes.grid} spacing={3}> 
          <Grid item>
              <Card className={classes.card}>
                <CardContent className="card" align="center">
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
                <CardContent className="card">
                  <a href="/users/:_id">
                  <FontAwesomeIcon
                      title="My Profile"
                      icon={['fad', 'file-user']}
                      className={classes.icon}
                    />
                  </a>

                  <Typography  component="h2">
                   My Profile
                  </Typography>
                </CardContent>
              </Card>

          </Grid>
          <Grid item >

              <Card className={classes.card}>
                <CardContent className="card">
                  <a href="/recent">
                  <FontAwesomeIcon
                      title="Recents"
                      icon={['fad', 'folder-open']}
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