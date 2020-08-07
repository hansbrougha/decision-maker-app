/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },
  autocomplete: {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "10px"
  }
}));

export default function Playground() {
  const classes = useStyles();
  const defaultProps = {
    options: decisionTypes,
    getOptionLabel: (option) => option.title
  };

  const flatProps = {
    options: decisionTypes.map((option) => option.title)
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
            label="How Do You Want To Decide?"
            margin="normal"
          />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const decisionTypes = [
  { title: "Create Poll" },
  { title: "Rock Scissors Paper" },
  { title: "Randomizer" }
];
