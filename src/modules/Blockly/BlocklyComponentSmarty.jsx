import React from "react";
import { connect } from "react-redux";
import Blockly from "blockly/core";
import en from "blockly/msg/en";
import ru from "blockly/msg/ru";
import "blockly/blocks";
import "./BlocklyComponent.css";
import { INITIAL_TOOLBOX_JSON_EN } from "./toolbox/en/toolbox";
import { INITIAL_TOOLBOX_JSON_RU } from "./toolbox/ru/toolbox";
import { CONSTANTS } from "../../utils/constants";
import { WorkspaceSearch } from "@blockly/plugin-workspace-search";
import { Modal } from "./blocklyModal";
import { BLE } from "../../utils/bleConstants";
import { withTranslation } from "react-i18next";

// importing blocks
import "./blocks-en";
import "./blocks-ru";
import "./generators";

class BlocklyComponentSimple extends React.Component {
  constructor(props) {
    super(props);
    this.blocklyDiv = React.createRef();
    this.toolbox = React.createRef();
    this.blocklyArea = this.props.blocklyArea;
    this.modal = null;
    this.currentLanguage = "";
    this.bleState = BLE.BLE_DISCONNECTED;
  }

  setLanguage() {
    if (this.props.language === CONSTANTS.LANGUAGE.ENGLISH) {
      Blockly.setLocale(en);
    } else if (this.props.language === CONSTANTS.LANGUAGE.RUSSIAN) {
      Blockly.setLocale(ru);
    }
  }

  setCategoryLang() {
    if (this.props.language === CONSTANTS.LANGUAGE.ENGLISH) {
      Blockly.Msg.LOGIC_CATEGORY_NAME = CONSTANTS.CATERGORIES.LOGIC_CATEGORY.ENGLISH;
    } else if (this.props.language === CONSTANTS.LANGUAGE.RUSSIAN) {
      Blockly.Msg.LOGIC_CATEGORY_NAME = CONSTANTS.CATERGORIES.LOGIC_CATEGORY.RUSSIAN;
    }
  }

  componentDidUpdate() {
    if (this.currentLanguage !== this.props.language) {
      this.setLanguage();
      if (this.props.language === CONSTANTS.LANGUAGE.ENGLISH) {
        this.primaryWorkspace.updateToolbox(INITIAL_TOOLBOX_JSON_EN);
      } else if (this.props.language === CONSTANTS.LANGUAGE.RUSSIAN) {
        console.log(INITIAL_TOOLBOX_JSON_RU);
        this.primaryWorkspace.updateToolbox(INITIAL_TOOLBOX_JSON_RU);
      }
      this.currentLanguage = this.props.language;
    }

    if (this.bleState !== this.props.bleState) {
      const { t } = this.props;
      if (this.props.bleState === BLE.BLE_CONNECTED) {
        this.modal = new Modal(t("SMARTY_CONNECTION_SUCESS"), t("OK"), this.primaryWorkspace);
        this.modal.init();
        this.modal.show();
      } else {
        this.modal = new Modal(t("SMARTY_CONNECTION_FAILED"), t("TRY_AGAIN"), this.primaryWorkspace);
        this.modal.init();
        this.modal.show();
      }
      this.bleState = this.props.bleState;
    }
  }

  onResize(blocklyArea) {
    console.log("fucntion callled");
    let element = blocklyArea;
    let x = 0;
    let y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    this.blocklyDiv.current.style.left = x + "px";
    this.blocklyDiv.current.style.top = y + "px";
    this.blocklyDiv.current.style.width = this.blocklyArea.offsetWidth + "px";
    this.blocklyDiv.current.style.height = this.blocklyArea.offsetHeight + "px";
    Blockly.svgResize(this.primaryWorkspace);
  }

  componentDidMount() {
    this.initBlockly();
  }

  initBlockly() {
    const { initialXml, children, blocklyArea, ...rest } = this.props;
    Blockly.Scrollbar.scrollbarThickness = 0;
    Blockly.Scrollbar.DEFAULT_SCROLLBAR_MARGIN = 0;
    Blockly.Toolbox.height = 30;
    this.primaryWorkspace = Blockly.inject(this.blocklyDiv.current, {
      toolbox: INITIAL_TOOLBOX_JSON_EN,
      ...rest,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), this.primaryWorkspace);
    }
    window.addEventListener("resize", this.onResize(blocklyArea), false);
    this.onResize(blocklyArea);
    Blockly.svgResize(this.primaryWorkspace);
    this.primaryWorkspace.addChangeListener(this.props.onChange);
    this.setSearchFuncBlockly();
  }

  setSearchFuncBlockly() {
    const workspaceSearch = new WorkspaceSearch(this.primaryWorkspace);
    workspaceSearch.init();
  }

  get workspace() {
    return this.primaryWorkspace;
  }

  setXml(xml) {
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), this.primaryWorkspace);
  }

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <div className="w-full bottom-0 md:pb-20 lg:pb-0 pb-20  top-0 absolute  h-screen lg:h-full md:h-screen" ref={this.blocklyDiv} id="blocklyDiv" />
        <xml xmlns="https://developers.google.com/blockly/xml" is="blockly" style={{ display: "none" }} ref={this.toolbox}>
          {children}
        </xml>
      </React.Fragment>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    language: state.language.language,
    bleState: state.ble.status,
  };
};

export default connect(mapStateToProps)(withTranslation()(BlocklyComponentSimple));
