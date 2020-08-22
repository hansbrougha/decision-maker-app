import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PollIcon from "@material-ui/icons/Poll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Divider from '@material-ui/core/Divider'; 

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: '#212121',
    margin: 'auto',
    paddingBottom: '1em',
    borderBottom: '#303030 1px solid',
    borderWidth: '100%',
    height: 'fit-content'
  },
  bottomNav: {
    color: theme.palette.primary.contrastText,
    width: "100%",
   
  },
  footer: {
    background: '#212121'
  },
  icon: {
    fontSize: '4em',
    color: '#009688',
    textAlign: 'center', 
    margin: '0.25em',
  },
  divider: {
    backgroundColor: '#009688',
    opacity: '0.35'
  }
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  return (
    <div className='container'>
      <center>
        <BottomNavigation
          className={(classes.stickToBottom, classes.root)}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <Link to="/create">
          <FontAwesomeIcon
                      title="Create"
                      icon={['fad', 'plus']}
                      className={classes.icon}
                    />
          </Link>
          <Divider orientation="vertical" flexItem className={classes.divider}/>
          <Link to="/results/:_id">
          <FontAwesomeIcon
                      title="Create"
                      icon={['fad', 'poll-people']}
                      className={classes.icon}
                    />
          </Link>
          <Divider orientation="vertical" flexItem className={classes.divider}/>
          <Link to="/recent">
          <FontAwesomeIcon
                      title="Recent"
                      icon={['fad', 'redo-alt']}
                      className={classes.icon}
                    />
          </Link>
          
        </BottomNavigation>
      </center>
    </div>
  );
}
