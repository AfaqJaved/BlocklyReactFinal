import React from "react";

import Blockly from "blockly/core";
import locale from "blockly/msg/en";
import "blockly/blocks";
import "./BlocklyComponent.css";
import { INITIAL_TOOLBOX_JSON } from "./toolbox/toolbox";

Blockly.setLocale(locale);

class BlocklyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.blocklyDiv = React.createRef();
    this.toolbox = React.createRef();
    this.blocklyArea = this.props.blocklyArea;
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
    const { initialXml, children, blocklyArea, ...rest } = this.props;
    Blockly.Scrollbar.scrollbarThickness = 5;
    this.primaryWorkspace = Blockly.inject(this.blocklyDiv.current, {
      toolbox: INITIAL_TOOLBOX_JSON,
      ...rest,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), this.primaryWorkspace);
    }
    window.addEventListener("resize", this.onResize(blocklyArea), false);
    this.onResize(blocklyArea);
    Blockly.svgResize(this.primaryWorkspace);
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

export default BlocklyComponent;
