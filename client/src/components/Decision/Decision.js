/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },
  textfield: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "10px",
    width: 270
  }
}));

export default function Playground() {
  const classes = useStyles();

  return (
    <div style={{ width: 300 }}>
      <TextField
        className={classes.textfield}
        label="What Would You Like To Decide?"
      />
    </div>
  );
}
