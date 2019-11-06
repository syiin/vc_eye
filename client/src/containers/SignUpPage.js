import React from "react";
import SignUpForm from "../components/SignUpForm";
import { apiCall, authenticateUser, forwardToken } from "../services/api";
import { signUpPath } from "../services/paths";

class SignUpPage extends React.Component {
  state = {
    user: {
      email: "",
      username: "",
      company: "",
      password: "",
      isStartup: false,
      isInvestor: false
    }
  };

  onSubmit = event => {
    event.preventDefault();
    const method = "POST";
    const path = signUpPath;
    const user = this.state.user;
    apiCall(method, path, user).then(res => {
      authenticateUser(res.username, res.token);
      forwardToken();
      this.props.setCurrentUser(res);
      this.props.history.push({
        pathname: "/",
        state: { currentUser: { username: this.state.user.username } }
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

  onCheck = event => {
    const user = this.state.user;
    user[event.target.name] = event.target.checked;
    this.setState({
      user
    });
  };

  render() {
    return (
      <SignUpForm
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        onCheck={this.onCheck}
      />
    );
  }
}

export default SignUpPage;
