import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div className="form-container sign-up-container">
        <form className="form" action="#">
          <h1 className="form-title">Hello, Friend!</h1>

          <input type="text" placeholder="name" />
          <input type="email" placeholder="e-mail" />
          <input type="password" placeholder="password" />
          <button className="form-button">sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
