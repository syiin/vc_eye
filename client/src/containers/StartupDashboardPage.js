import React from "react";
import { Link } from "react-router-dom";
import { getStartupString } from "../services/paths";
import { apiCall } from "../services/api";

class StartupDashboardPage extends React.Component {
  state = {};

  componentDidMount() {
    const currentUser = this.props.user;
    const method = "POST";
    const path = getStartupString(localStorage.getItem("userid"));

    apiCall(method, path, currentUser).then(res => {
      this.setState({
        ...this.state,
        startups: res
      });
    });
  }

  render() {
    return (
      <div>
        Welcome to your Dashboard
        <Link to="/addstartup">Add A Startup</Link>
        <ul>
          {this.state.startups &&
            this.state.startups.map((name, index) => {
              return <li key={index}>{name.startupName}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export default StartupDashboardPage;
