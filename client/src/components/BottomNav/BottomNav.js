import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PollIcon from "@material-ui/icons/Poll";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: theme.palette.primary.main,
    marginTop: "10px"
  },
  bottomNav: {
    color: theme.palette.primary.contrastText,
    width: "100%"
  },
  footer: {
    background: theme.palette.primary.main
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  return (
    <footer className={classes.stickToBottom}>
      <center>
        <BottomNavigation
          className={(classes.stickToBottom, classes.root)}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction
            className={classes.bottomNav}
            label="Recents"
            icon={<RestoreIcon />}
            href="/recent"
            size="large"
          />
          <BottomNavigationAction
            className={classes.bottomNav}
            label="My Decisions"
            icon={<PollIcon />}
            href="/users/:_id"
          />
          <BottomNavigationAction
            className={classes.bottomNav}
            label="Create Decision"
            icon={<AddCircleIcon />}
            href="/create"
            size="large"
          />
        </BottomNavigation>
      </center>
    </footer>
  );
}
