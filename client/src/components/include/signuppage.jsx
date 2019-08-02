import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerNewUser } from "../../actions/authAction";
import { clearErrors } from "../../actions/errorAction";
import SignUp from "../include/signupComponent";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordConfirm: "",
      username: "",
      email: "",
      password: "",
      error: null
    };
    this.handleFormOnSubmit = this.handleFormOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    // check if we have some newer error
    if (error !== prevProps.error) {
      // Check for register error
      //if set it to the state
      // else null msg
      if (error.id === "REGISTER_FAIL") {
        console.log(error);
        this.setState({ error: error.msg.msg });
      } else {
        this.setState({ error: null });
      }
    }
  }
  handleOnChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    //console.log(this.state);
  }
  handleFormOnSubmit(e) {
    e.preventDefault();
    const { username, email, password, passwordConfirm } = this.state;
    // new user
    const newUser = {
      username: username,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm
    };
    // console.log(
    //   `username is: ${username}.. password is: ${password}  email is: ${email}`
    // );
    console.log(newUser);
    //console.log("the new user is object " + newUser);
    // attempt to register new user
    this.props.registerNewUser(newUser);
  }
  // componentDidMount() {
  //   //axios.get("/api/allpost").then(res => console.log(res.data));
  // }
  render() {
    return (
      <main className="mainContent">
        <div className="mainContent__wrap">
          <div className="mainContent__wrap__content extraContent">
            {this.state.error != null && <div> {this.state.error}</div>}
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error // state.error the error is coming from the main reducer
});

export default connect(
  mapStateToProps,
  { registerNewUser }
)(LoginPage);
