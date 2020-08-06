import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PollIcon from "@material-ui/icons/Poll";

const useStyles = makeStyles({
  root: {
    width: 500,
    background: "#009688"
  },
  bottomNav: {
    color: "#ffffff"
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.bottomNav}
        label="Recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        className={classes.bottomNav}
        label="My Decisions"
        icon={<PollIcon />}
      />
      <BottomNavigationAction
        className={classes.bottomNav}
        label="Create Decision"
        icon={<AddCircleIcon />}
      />
    </BottomNavigation>
  );
}
