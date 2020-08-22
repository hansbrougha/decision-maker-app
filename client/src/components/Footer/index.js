import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper"
import BottomNav from "../BottomNav";
import auth from "../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";

import '../index.scss';

const Footer = withRouter(({ history }) =>  (
    <div>
      {!auth.isAuthenticated() && (
        
        <footer className='footer'>

          <Link to='/' className="navLink" id='logo'><p type="title" id='logo'>
            unbiased.io
          </p>
          </Link>
          <Typography variant='caption'>
            Andrew Hansbrough, Jacob Walton, Joe Stutsman & Angel Schultz  
          </Typography>
        </footer>
       
      )}
      {auth.isAuthenticated() && (
        
        <footer className='footer'>
          <BottomNav />
          <Link to='/' className="navLink" id='logo'><p type="title" id='logo'>
            unbiased.io
      </p>
          </Link>
          <Typography variant='caption'>
            Andrew Hansbrough, Jacob Walton, Joe Stutsman & Angel Schultz  
          </Typography>
        </footer>
       
      )}
    </div>
));

export default Footer;