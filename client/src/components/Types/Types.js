import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "#424242",
    color: "#ffffff"
  },

  title: {
    fontSize: 25
  },
  button: {
    background: "#009688",
    color: "#ffffff",
    margin: "10px 0 auto"
  },
  card: {
    background: "#000000"
  }
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="#000000" gutterBottom>
          Make a Decision!
        </Typography>

        <Typography className={classes.pos} color="#ffffff">
          Options
        </Typography>
        <Typography variant="body2" component="p">
          <Button className={classes.button} size="large">
            Take a Poll
          </Button>
          <br />
          <Button className={classes.button} size="large">
            Rock Scissors paper
          </Button>
          <br />
          <Button className={classes.button} size="large">
            Randomizer
          </Button>
        </Typography>
      </CardContent>
      <CardActions />
    </Card>
  );
}
