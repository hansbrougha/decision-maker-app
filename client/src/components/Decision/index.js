import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";
import "../index.scss";

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   textfield: {
//     background: theme.palette.secondary,
//     color: theme.palette.primary.dark,
//     paddingLeft: "15px",
//     paddingRight: "15px",
//     paddingBottom: "10px",
//     width: 270,
//   },
//   button: {
//     margin: "auto",
//     marginTop: "10px",
//     color: theme.palette.secondary.main,
//   },
// }));

export default function Playground() {
  const [open, setOpen] = React.useState(false);
  // const classes = useStyles();
  const [value, setValue] = useState({
    pollTitle: "",
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
    console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/polls", value);
    setOpen(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <center>
        <div style={{ width: 300 }}>
          <Collapse in={open}>
            <Alert
              variant="filled"
              severity="info"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <Typography>
                Poll successfully created! <a href="/recent" className='links'>Check it out!</a>
              </Typography>
            </Alert>
          </Collapse>
          <TextField
            onChange={handleChange}
            className='input'
            label="What Would You Like To Decide?"
            name="pollTitle"
          />
          {/* <TextField
            onChange={handleChange}
            className='input'
            label="How Many Deciders?"
            name="deciders"
          /> */}
          <TextField
            onChange={handleChange}
            className='input'
            label="Option 1"
            name="option1Title"
          />
          <TextField
            onChange={handleChange}
            className='input'
            label="Option 2"
            name="option2Title"
          />
          <TextField
            onChange={handleChange}
            className='input'
            label="Option 3"
            name="option3Title"
          />
          <TextField
            onChange={handleChange}
            className='input'
            label="Option 4"
            name="option4Title"
          />
        </div>
      </center>
      <Button
        variant="contained"
        size="large"
        className='button'
        type="submit"
        disabled={open}
      >
        Create
      </Button>
    </form>
  );
}
