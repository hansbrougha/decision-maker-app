/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function Playground() {
  const defaultProps = {
    options: deciders,
    getOptionLabel: (option) => option.title
  };

  const flatProps = {
    options: deciders.map((option) => option.title)
  };

  const [value, setValue] = React.useState(null);

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
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
  { title: "5" }
];
