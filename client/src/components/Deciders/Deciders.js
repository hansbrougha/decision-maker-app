/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  autocomplete: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "10px",
  },
}));

export default function Playground() {
  const classes = useStyles();
  const defaultProps = {
    options: deciders,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: deciders.map((option) => option.title),
  };

  const [value, setValue] = React.useState(null);

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        className={classes.autocomplete}
        {...defaultProps}
        id="Decision Type"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField
            {...params}
            label="Amount of Participants"
            margin="normal"
          />
        )}
      />
    </div>
  );
}

const deciders = [
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
  { title: "5" },
];
