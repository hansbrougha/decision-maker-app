/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textfield: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "10px",
    width: 270,
  },
  button: {
    margin: "auto",
    marginTop: "10px",
    color: theme.palette.secondary.main,
  },
}));

export default function Playground() {
  const classes = useStyles();

  return (
    <form>
      <center>
        <div style={{ width: 300 }}>
          <TextField className={classes.textfield} label="Option 1" />
          <br />
          <br />
          <br />
          <TextField className={classes.textfield} label="Option 2" />
          <br />
          <br />
          <br />
          <TextField className={classes.textfield} label="Option 3" />
        </div>
      </center>
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.button}
        href="/"
        //change href to direct to '/:pollId' (once working)
      >
        Add Options
      </Button>
    </form>
  );
}
