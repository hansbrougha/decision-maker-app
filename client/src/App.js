import React, { Component } from "react";
// import {
//   ThemeProvider as MuiThemeProvider,
//   createMuiTheme
// } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import BottomNav from "./components/BottomNav";
import './App.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import Helmet from 'react-helmet'

library.add(fab, fas, fad); 

class App extends Component {
  render() {
    return (
      <div id='container'>
        <Helmet>
          <title>unbiased.io</title>
        </Helmet>
      <BrowserRouter>
        {/* <MuiThemeProvider theme={theme}> */}
          {/* <CssBaseline /> */}
          <Routes />
          <BottomNav />
        {/* </MuiThemeProvider> */}
      </BrowserRouter>
      </div>
    );
  }
}
export default App;
