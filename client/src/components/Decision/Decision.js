/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textfield: {
    background: theme.palette.secondary,
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
  const [value, setValue] = useState({
    pollTitle: "",
    deciders: "",
    option1Title: "",
    option2Title: "",
    option3Title: "",
    option4Title: "",
  });
  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    axios.post("/api/polls", value);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <center>
        <div style={{ width: 300 }}>
          <TextField
            onChange={handleChange}
            className={classes.textfield}
            label="What Would You Like To Decide?"
            name="pollTitle"
          />
          <TextField
            onChange={handleChange}
            className={classes.textfield}
            label="How Many Deciders?"
            name="deciders"
          />
          <TextField
            onChange={handleChange}
            className={classes.textfield}
            label="Option 1"
            name="option1Title"
          />
          <TextField
            onChange={handleChange}
            className={classes.textfield}
            label="Option 2"
            name="option2Title"
          />
          <TextField
            onChange={handleChange}
            className={classes.textfield}
            label="Option 3"
            name="option3Title"
          />
          <TextField
            onChange={handleChange}
            className={classes.textfield}
            label="Option 4"
            name="option4Title"
          />
        </div>
      </center>
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.button}
        type="submit"
      >
        Create
      </Button>
    </form>
  );
}
