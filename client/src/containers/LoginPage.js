import React from "react";
import LoginForm from "../components/LoginForm";
import { apiCall, authenticateUser, forwardToken } from "../services/api";
import { loginPath } from "../services/paths";

class LoginPage extends React.Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  };

  onSubmit = event => {
    event.preventDefault();
    const method = "POST";
    const path = loginPath;
    const user = this.state.user;
    apiCall(method, path, user).then(res => {
      authenticateUser(res.username, res.token, res._id);
      forwardToken();
      this.props.setCurrentUser(res);
      this.props.history.push({
        pathname: "/mydashboard",
        state: {
          currentUser: { username: this.state.user.username }
        }
      });
    });
  };

  onChange = event => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({
      user
    });
  };

  render() {
    return <LoginForm onChange={this.onChange} onSubmit={this.onSubmit} />;
  }
}

export default LoginPage;
