import React from "react";
import "../../css/base.css";
import "../../css/auth.css";

const signupComponent = props => {
  return (
    <div className="inner--auth--form">
      <form className="auth--form" onSubmit={props.onSubmit}>
        <span>
          <h2 className>Sign Up</h2>
        </span>
        <input
          type="text"
          name="username"
          id="signup--username"
          placeholder="Username"
          value={props.username}
          className="auth--form__input"
          onChange={props.onChange}
        />
        <input
          type="email"
          name="email"
          id="sifnup--email"
          placeholder="E-mail"
          className="auth--form__input"
          value={props.email}
          onChange={props.onChange}
        />
        {/* Password */}
        <input
          type="password"
          name="password"
          id="signup--password"
          placeholder="Password"
          className="auth--form__input"
          onChange={props.onChange}
        />

        {/* passwordConfirm */}
        <input
          type="password"
          name="passwordConfirm"
          id=""
          className="auth--form__input"
          placeholder="Passwor Cornfirm"
          onChange={props.onChange}
        />
        <div className="auth--form__submit">
          <button
          //disabled={this.state.isLoading}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default signupComponent;
