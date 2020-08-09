import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import Deciders from "../Deciders/Deciders";
// import Types from "../Types/Types";
import Options from "../Options/Options";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    background: theme.palette.secondary.main,
    margin: "auto"
  },
  title: {
    fontSize: 35,
    textAlign: "Center"
  },
  button: {
    margin: "auto",
    marginTop: "10px",
    color: theme.palette.secondary.main
  }
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          You created a Poll!
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          href="/Polls"
        >
          View Polls
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          href="/home"
        >
          Home
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          href="/newpoll"
        >
          Create a New Poll
        </Button>
        {/* <Deciders />
            <Types /> */}
      </CardContent>
    </Card>
  );
}
