import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper"
import BottomNav from "../BottomNav";

import '../index.scss'; 

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     width: '100%',
//     height: '3em', 
//     padding: theme.spacing(6, 0),
//     background: '#212121',
//     position: 
//   }
// }));

export default function Footer() {


  return (
    <footer className='footer'>
       <Link to='/' className="navLink" id='logo'><p type="title" id='logo'>
        unbiased.io
      </p></Link>
    </footer>
  );
}
