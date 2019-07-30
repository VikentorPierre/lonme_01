import React, { Component } from "react";
import SignUp from "../include/signupComponent";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordConfirm: "",
      username: "",
      email: "",
      password: ""
    };
    this.handleFormOnSubmit = this.handleFormOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }
  handleFormOnSubmit(e) {
    e.preventDefault();
    console.log("yes submit");
  }
  render() {
    return (
      <main className="mainContent">
        <div className="mainContent__wrap">
          <div className="mainContent__wrap__content extraContent">
            <SignUp
              onChange={this.handleOnChange}
              onSubmit={this.handleFormOnSubmit}
              email={this.state.email}
              username={this.state.username}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default LoginPage;
