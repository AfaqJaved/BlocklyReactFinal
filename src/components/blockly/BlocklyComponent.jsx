import React from "react";
import PropTypes from "prop-types";
import * as Blockly from "blockly";
import { INITIAL_TOOLBOX_JSON_EN } from "../../modules/Blockly/toolbox/en/toolbox";
import { WorkspaceSearch } from "@blockly/plugin-workspace-search";
import { BLOCKLY_OPTIONS, CONSTANTS } from "../../utils/constants";
import axiosInstance from "../../axios";

function BlocklyComponent(props) {
  const blocklyDiv = React.useRef();
  const toolbox = React.useRef();
  const [blocklyOptions, setBlocklyOptions] = React.useState(null);
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

  const getBlocklyParams = () => {
    axiosInstance
      .get(CONSTANTS.API.GET_BLOCKLY_PARAMS)
      .then((res) => {
        let options = JSON.parse(res.data.data.str_blockly_json);
        setBlocklyOptions(options);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  React.useEffect(() => {
    initBlockly();
  }, [blocklyOptions]);

  React.useEffect(() => {
    getBlocklyParams();
  }, []);

  const initBlockly = () => {
    if (blocklyOptions != null) {
      primaryWorkspace = Blockly.inject(blocklyDiv.current, blocklyOptions);
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
      setSearchFuncBlockly();
    }
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
      />
      <xml
        xmlns="https://developers.google.com/blockly/xml"
        is="blockly"
        style={{ display: "none" }}
        ref={toolbox}
      >
        {props.children}
      </xml>
    </React.Fragment>
  );
}

BlocklyComponent.propTypes = {};

export default BlocklyComponent;
