/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function Playground() {
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
        {...defaultProps}
        id="Decision Type"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Type" margin="normal" />
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
