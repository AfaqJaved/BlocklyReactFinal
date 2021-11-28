import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import LoginComponent from "../modules/LoginModule/LoginComponent";
import BlocklySingleMode from "../BlocklySingleMode";
import DevicesComponent from "../modules/Devices/DevicesComponent";
import SignupComponent from "../modules/SingupModule/SignupComponent";
import BlocklyComponent from "../modules/Blockly";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

class RouterComponent extends Component {
  render() {
    return (
      <main>
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={LoginComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/register" component={SignupComponent} />
          <PrivateRoute authed={this.props.authenticated} path="/blockly" component={BlocklySingleMode} />
          <PrivateRoute authed={this.props.authenticated} path="/devices" component={DevicesComponent} />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(RouterComponent);
