import React from "react";
import "../../css/auth.css";
const loginComponent = props => {
  return (
    <div className="inner--auth--form" onSubmit={props.onSubmit}>
      <form action="" className="auth--form ">
        <span>
          <h2 className>Login</h2>
        </span>
        <input
          type="email"
          name="email"
          id="loginEmail"
          placeholder="E-mail"
          className="auth--form__input"
          onChange={props.onChange}
        />
        {/* {errors.email && <span className="formError"> {errors.email}</span>} */}
        <input
          type="password"
          name="password"
          id="loginPassword"
          placeholder="Password"
          className="auth--form__input"
          onChange={props.onChange}
        />
        {/* {errors.password && <span className="formError"> {errors.password}</span>} */}
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

export default loginComponent;
