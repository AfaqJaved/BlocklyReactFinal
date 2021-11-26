import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import LoginComponent from "../modules/LoginModule/LoginComponent";
import BlocklySingleMode from "../BlocklySingleMode";
import DevicesComponent from "../modules/Devices/DevicesComponent";
import SignupComponent from "../modules/SingupModule/SignupComponent";

export default class RouterComponent extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact>
            <LoginComponent></LoginComponent>
          </Route>
          <Route path="/signup" exact>
            <SignupComponent></SignupComponent>
          </Route>
          <Route path="/devices" exact>
            <DevicesComponent></DevicesComponent>
          </Route>
          <Route path="/blockly">
            <BlocklySingleMode></BlocklySingleMode>
          </Route>
        </Switch>
      </main>
    );
  }
}
