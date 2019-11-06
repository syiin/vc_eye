import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { isUserAuthenticated, forwardToken, logOut } from "../services/api";

import SignUpPage from "../containers/SignUpPage";
import LoginPage from "../containers/LoginPage";
import StartupDashboardPage from "../containers/StartupDashboardPage";
import AdditStartupPage from "./AdditStartupPage";
import { Typography } from "@material-ui/core";

//THEME CONFIG - MATERIAL UI
const theme = createMuiTheme({
  // palette: {
  //   type: "dark"
  // },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});

//ROUTE TEMPLATE DEFINITIONS
const RegularRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...rest} />} />
);

const RouteIfLoggedIn = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isUserAuthenticated() ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  state = {
    currentUser: {
      username: null
    },
    authenticated: false
  };

  toggleAuthenticate = user => {
    if (isUserAuthenticated()) {
      forwardToken();
      this.setState({
        authenticated: true,
        currentUser: {
          username: localStorage.username
        }
      });
    }
  };

  toggleLogOut = () => {
    logOut();
    this.setState({
      authenticated: false,
      currentUser: {
        username: null,
        isAdmin: false
      }
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <div className="topbar">
              <div className="top-bar-left">
                {isUserAuthenticated() ? (
                  <span>
                    Welcome {this.state.currentUser.username}
                    <Link to="/mydashboard">View My Dashboard</Link>
                    <a onClick={this.toggleLogOut}> Logout </a>
                  </span>
                ) : (
                  <span>
                    <Link to="/signup">Sign Up Here</Link>
                    <Link to="/login">Login</Link>
                  </span>
                )}
              </div>
            </div>

            <header className="App-header">
              <Typography
                gutterBottom
                variant="headline"
                component="h1"
                align="center"
              >
                The Portfolio
              </Typography>
            </header>

            {/* ROUTE DEFINITIONS */}
            <RegularRoute
              exact
              path="/signup"
              component={SignUpPage}
              setCurrentUser={this.toggleAuthenticate}
            />
            <RegularRoute
              exact
              path="/login"
              component={LoginPage}
              setCurrentUser={this.toggleAuthenticate}
            />
            <RouteIfLoggedIn
              path="/mydashboard"
              component={StartupDashboardPage}
              user={this.state.currentUser}
            />
            <RouteIfLoggedIn path="/addstartup" component={AdditStartupPage} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
