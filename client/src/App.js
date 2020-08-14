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


library.add(fab, fas, fad); 
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#e0e0e0",
//       main: "#212121",
//       dark: "#303030",
//       contrastText: "#fff"
//     },
//     danger: {
//       light: "#f56985",
//       main: "#8C1D34",
//       dark: "#580415",
//       contrastText: "#000"
//     },
//     openTitle: "#1D8B75",
//     protectTitle: "#1D8B50",
//     type: "dark"
//   }
// });
class App extends Component {
  render() {
    return (
      <div id='container'>
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
