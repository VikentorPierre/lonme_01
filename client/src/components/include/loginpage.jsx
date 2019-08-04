import React, { Component } from "react";
import { connect } from "react-redux";
import LoginComponent from "../include/loginComponent";
import { login } from "../../actions/authAction";
import PropTypes from "prop-types";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };
    this.handleFormOnSubmit = this.handleFormOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  static propTypes = {
    auth: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.error) {
      this.setState({
        error: nextProps.error.msg
      });
    } else {
      this.setState({ error: null });
    }
  }
  handleOnChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }
  handleFormOnSubmit(e) {
    e.preventDefault();
    const { password, email } = this.state;
    const user = {
      email,
      password
    };
    this.props.login(user, this.props.history);
  }
  render() {
    return (
      <main className="mainContent">
        <div className="mainContent__wrap">
          <div className="mainContent__wrap__content extraContent">
            {this.state.error != null && <div>{this.state.error.password}</div>}
            {this.state.error != null && <div>{this.state.error.email}</div>}
            <LoginComponent
              onChange={this.handleOnChange}
              onSubmit={this.handleFormOnSubmit}
            />
          </div>
        </div>
      </main>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth, //state.auth.isAuthenticated,
  error: state.error // state.error the error is coming from the main reducer
});
export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
