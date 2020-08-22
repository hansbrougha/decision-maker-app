import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Decision from "../Decision/Decision";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    background: theme.palette.secondary,
    margin: "auto",
  },
  title: {
    fontSize: 35,
    textAlign: "Center",
  },
  button: {
    margin: "auto",
    marginTop: "10px",
    color: theme.palette.secondary.main,
  },
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className="card">
      <CardContent className="cardContent">
        <Typography className="cardBody" gutterBottom>
          <h2>Create a Decision</h2>
        </Typography>

        <Decision />
        {/* <Deciders />
            <Types /> */}
      </CardContent>
    </Card>
  );
}
