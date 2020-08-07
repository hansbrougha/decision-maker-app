import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
// import green from "@material-ui/core/colors/green";
// import red from "@material-ui/core/colors/red";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#7ef1da",
      main: "#1D8B75",
      dark: "#135245",
      contrastText: "#fff",
    },
    secondary: {
      light: "#999999",
      main: "#212121",
      dark: "#090909",
      contrastText: "#000",
    },
    danger: {
      light: "#f56985",
      main: "#8C1D34",
      dark: "#580415",
      contrastText: "#000",
    },
    openTitle: "#1D8B75",
    protectTitle: "#1D8B75",
    type: "dark",
  },
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
