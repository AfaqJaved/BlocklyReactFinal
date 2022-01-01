import React from "react";
import PropTypes from "prop-types";
import * as Blockly from "blockly";
import { INITIAL_TOOLBOX_JSON_EN } from "../../modules/Blockly/toolbox/en/toolbox";
import { WorkspaceSearch } from "@blockly/plugin-workspace-search";
import { BLOCKLY_OPTIONS, CONSTANTS } from "../../utils/constants";
import axiosInstance from "../../axios";
import { useSelector } from "react-redux";

function BlocklyComponent(props) {
  const blocklyDiv = React.useRef();

  let primaryWorkspace = null;

  const onResize = (blocklyArea) => {
    let element = blocklyArea;
    let x = 0;
    let y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.current.style.left = x + "px";
    blocklyDiv.current.style.top = y + "px";
    blocklyDiv.current.style.width = blocklyArea.offsetWidth + "px";
    blocklyDiv.current.style.height = blocklyArea.offsetHeight + "px";
    Blockly.svgResize(primaryWorkspace);
  };

  React.useEffect(() => {
    initBlockly();
  }, []);

  React.useEffect(() => {
    if (primaryWorkspace != null) {
      console.log("options :" + props.options);
      primaryWorkspace = Blockly.inject(blocklyDiv.current, props.options);
    }
  }, [props.options]);

  const initBlockly = () => {
    if (primaryWorkspace == null) {
      primaryWorkspace = Blockly.inject(blocklyDiv.current, props.options);
      setSearchFuncBlockly();
    }
    console.log("this is toolbox" + props.toolbox);
    primaryWorkspace.updateToolbox(props.toolbox);
    // render start block xml
    if (props.initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(props.initialXml),
        primaryWorkspace
      );
    }
    window.addEventListener("resize", onResize(props.blocklyArea), false);
    onResize(props.blocklyArea);
    Blockly.svgResize(primaryWorkspace);
    primaryWorkspace.addChangeListener(props.onChange);
  };

  const setSearchFuncBlockly = () => {
    const workspaceSearch = new WorkspaceSearch(primaryWorkspace);
    workspaceSearch.init();
  };

  return (
    <React.Fragment>
      <div
        className="w-full bottom-0 md:pb-20 lg:pb-0 pb-20  top-0 absolute  h-screen lg:h-full md:h-screen"
        ref={blocklyDiv}
        id="blocklyDiv"
      >
        <xml
          xmlns="https://developers.google.com/blockly/xml"
          is="blockly"
          style={{ display: "none" }}
        >
          {props.children}
        </xml>
      </div>
    </React.Fragment>
  );
}

BlocklyComponent.propTypes = {};

export default BlocklyComponent;
