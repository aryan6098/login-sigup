import React, { Component } from "react";
import "./components/App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Overlay from "./components/Overlay";

class App extends Component {
  constructor() {
    super();
    this.state = {
      rightPanelActive: false,
    };
  }

  handleClickSignUpButton = () =>
    this.setState({
      rightPanelActive: true,
    });

  handleClickSignInButton = () =>
    this.setState({
      rightPanelActive: false,
    });

  render() {
    const { handleClickSignUpButton, handleClickSignInButton } = this;
    const { rightPanelActive } = this.state;
    return (
      <div className="App">
        <div
          className={`container ${
            rightPanelActive ? `right-panel-active` : ``
          }`}
          id="container"
        >
          <SignUp />
          <SignIn />
          <Overlay
            handleClickSignInButton={handleClickSignInButton}
            handleClickSignUpButton={handleClickSignUpButton}
          />
        </div>
      </div>
    );
  }
}

export default App;
