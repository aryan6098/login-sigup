import React, { Component } from "react";

class Overlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClickSignUpButton, handleClickSignInButton } = this.props;
    return (
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p className="overlay-description">
              If you are already a member,
              <br />
              You can use more services after logging in.
            </p>
            <button
              className="ghost form-button"
              id="signIn"
              onClick={handleClickSignInButton}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p className="overlay-description">
              If you are not yet a member,
              <br />
              You can use more services after signing up.
            </p>
            <button
              className="ghost form-button"
              id="signUp"
              onClick={handleClickSignUpButton}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Overlay;
