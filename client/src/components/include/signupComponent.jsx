import React from "react";
import "../../css/auth.css";
const signupComponent = props => {
  return (
    <div className="inner--auth--form" onSubmit={props.onSubmit}>
      <form action="" className="auth--form ">
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
          required
        />

        {/* passwordConfirm */}
        <input
          type="password"
          name="passwordConfirm"
          id=""
          className="auth--form__input"
          placeholder="Passwor Cornfirm"
          onChange={props.onChange}
          required
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

{
  /* <form
action=""
className="generic-form"
onSubmit={this.handleFormSubmit}
> */
}

{
  /* username */
}
{
  /* <input
  type="text"
  name="username"
  id="username-auth"
  placeholder="Username"
  value={this.state.username}
  required
  className={
    ("generic-form-input",
    errors.username ? "form-input-error" : "generic-form-input")
  }
  // className="generic-form-input"
  onChange={this.onChange}
  // value="value"
/>
{errors.username && (
  <span className="formError"> {errors.username}</span>
)} */
}

{
  /* email */
}
{
  /* <input
  type="email"
  name="email"
  id="email-signup"
  placeholder="email"
  className="generic-form-input"
  value={this.state.email}
  onChange={this.onChange}
  required
  // value="email"
/>

{errors.email && (
  <span className="formError"> {errors.email}</span>
)} */
}

{
  /* Password */
}
{
  /* <input
  type="password"
  name="password"
  id=""
  placeholder="Password"
  className="generic-form-input"
  onChange={this.onChange}
  required
/> */
}

{
  /* {formErrors.password.length > 0 && (
  <span className="formError"> {formErrors.password}</span>
)} */
}

{
  /* passwordConfirm */
}
{
  /* <input
  type="password"
  name="passwordConfirm"
  id=""
  className="generic-form-input"
  placeholder="Passwor Cornfirm"
  onChange={this.onChange}
  required
/>

{errors.password && (
  <span className="formError"> {errors.password}</span>
)} */
}

{
  /* signup button */
}
{
  /* <button
  style={{
    color: "white",
    backgroundColor: "blue"
  }}
  id="submit-auth-form"
  type="submit"
  disabled={this.state.isLoading}
>
  Sign Up
</button>
</form> */
}
