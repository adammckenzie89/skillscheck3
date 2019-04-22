import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import Axios from "axios";

class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      loggedInUser: {},
      notAUser: ""
    };
  }
  async signup() {
    let { username, password } = this.state;
    let response = await Axios.post("/auth/signup", {
      username,
      password
    });
    this.setState({
      loggedInUser: response.data,
      username: "",
      password: ""
    });
  }
  login = () => {
    let { username, password } = this.state;
    Axios.post("/auth/login", {
      username,
      password
    }).then(response => {
      this.setState({
        loggedInUser: response.data,
        notAUser: "not a user"
      });
    });
  };
  logout() {
    Axios.get("/auth/logout");
    this.setState({ loggedInUser: {} });
  }

  render() {
    let { username, password, loggedInUser } = this.state;
    return (
      <div>
        {/* <Link to="/Dashboard">
          <h1>Dashboard</h1>
        </Link> */}
        <form className="loginform">
          <section>
            <input
              placeholder="username"
              onChange={e => this.setState({ username: e.target.value })}
            />
            <input
              placeholder="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </section>
          <div>
            {loggedInUser.username ? (
              <button onClick={() => this.logout()}>Logout</button>
            ) : (
              <button onClick={() => this.login()}>Login</button>
            )}
            <button
              className="signup"
              onClick={e => {
                this.signup();
              }}
            >
              Sign up
            </button>
          </div>
          <br />
          {this.state.loggedInUser.username ? (
            <Redirect from="/" to="/Dashboard" />
          ) : (
            console.log("not logged in")
          )}
          {this.state.notAUser === "not a user" ? (
            <h4>Please sign up</h4>
          ) : (
            console.log("hello")
          )}
        </form>
      </div>
    );
  }
}

export default Homepage;
