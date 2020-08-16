import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import BottomNav from "../BottomNav/BottomNav";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6, 0),
    background: theme.palette.primary.dark,
    color: theme.palette.primary.light,
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer>
      <BottomNav className={classes.footer} />
    </footer>
  );
}
