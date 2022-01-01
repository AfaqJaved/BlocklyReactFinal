import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import LoginComponent from "../modules/LoginModule/LoginComponent";
import BlocklySingleMode from "../BlocklyPages/BlocklySingleMode";
import DevicesComponent from "../modules/Devices/DevicesComponent";
import SignupComponent from "../modules/SingupModule/SignupComponent";
import BlocklyComponent from "../modules/Blockly";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import BlocklyMultipleMode from "../BlocklyPages/BlocklyMultipleMode";
import { CONSTANTS } from "../utils/constants";
import i18next from "i18next";
import BlocklyPage from "../Pages/BlocklyPage/BlocklyPage";
import BlocklyParamsPage from "../Pages/blocklyParamsPage/BlocklyParamsPage";
import BlocklyToolBoxPage from "../Pages/blocklyToolboxPage/BlocklyToolBoxPage";
import ProductPage from "../Pages/product-page/ProductPage";
import ToolboxCategoriesPage from "../Pages/categories/ToolboxCategories";
import BlocksPage from "../Pages/blocksPage/BlocksPage";
import BlockDefinationPage from "../Pages/block-defination-page/BlockDefinationsPage";
import TranslationsPage from "../Pages/translations-page/TranslationsPage";

class RouterComponent extends Component {
  componentDidMount() {
    i18next.changeLanguage(this.props.language);
  }

  componentDidUpdate() {
    i18next.changeLanguage(this.props.language);
  }
  render() {
    return (
      <main>
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={LoginComponent} />
          <Route
            path={CONSTANTS.ROUTING.LOGIN_PAGE}
            component={LoginComponent}
          />
          <Route
            path={CONSTANTS.ROUTING.REGISTER_PAGE}
            component={SignupComponent}
          />
          <PrivateRoute
            authed={this.props.authenticated}
            path={CONSTANTS.ROUTING.BLOCKY_PAGE}
            component={BlocklyPage}
          />
          <PrivateRoute
            authed={this.props.authenticated}
            path={CONSTANTS.ROUTING.BLOCKLY_PARAMS_PAGE}
            component={BlocklyParamsPage}
          />
          <PrivateRoute
            authed={this.props.authenticated}
            path={CONSTANTS.ROUTING.BLOCKY_TOOLBOX_PAGE}
            component={BlocklyToolBoxPage}
          />
          <PrivateRoute
            authed={this.props.authenticated}
            path={CONSTANTS.ROUTING.PRODUCT_PAGE}
            component={ProductPage}
          />
          <PrivateRoute
            authed={this.props.authenticated}
            path={CONSTANTS.ROUTING.TOOLBOX_CATEGORIES}
            component={ToolboxCategoriesPage}
          />
          <PrivateRoute
            authed={this.props.authenticated}
            path={CONSTANTS.ROUTING.BLOCKS_PAGE}
            component={BlocksPage}
          />
          <PrivateRoute
            authed={this.props.authenticated}
            path={CONSTANTS.ROUTING.BLOCK_DEFINATIONS}
            component={BlockDefinationPage}
          />
          <PrivateRoute
            authed={this.props.authenticated}
            path={CONSTANTS.ROUTING.TRANSLATIONS_PAGE}
            component={TranslationsPage}
          />
          <PrivateRoute
            authed={this.props.authenticated}
            path={CONSTANTS.ROUTING.DEVICES_PAGE}
            component={DevicesComponent}
          />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    authenticated: state.auth.authenticated,
    language: state.language.language,
  };
};

export default connect(mapStateToProps)(RouterComponent);
