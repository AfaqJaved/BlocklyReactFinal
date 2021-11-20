import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginComponent from "../modules/LoginModule/LoginComponent";
import App from "../App";

export default class RouterComponent extends Component {
  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<LoginComponent />} exact />
          <Route path="/blockly" element={<App />} />
          <Route component={Error} />
        </Routes>
      </main>
    );
  }
}
