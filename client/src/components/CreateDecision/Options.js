import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Enter Up to 5 options:"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddCircleIcon />
            </InputAdornment>
          )
        }}
      />
    </div>
  );
}
