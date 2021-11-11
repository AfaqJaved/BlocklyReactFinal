import React, { Component } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import BlocklyComponent, { Block, Value, Field, Shadow } from "./modules/Blockly";
import BlocklyJS from "blockly/javascript";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
    this.blocklyArea = React.createRef();
  }
  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(this.simpleWorkspace.current.workspace);
    console.log(code);
  };

  getBlocklyArea() {
    return this.blocklyArea;
  }
  render() {
    return (
      <div className="grid grid-cols-2 gap-2 w-full h-full">
        <div ref={this.blocklyArea}>
          <BlocklyComponent
            ref={this.simpleWorkspace}
            readOnly={false}
            blocklyArea={this.getBlocklyArea}
            trashcan={true}
            media={"media/"}
            move={{
              scrollbars: true,
              drag: true,
              wheel: true,
            }}
            initialXml={`
                <xml xmlns="http://www.w3.org/1999/xhtml">
                <block type="controls_ifelse" x="10" y="10"></block>
                </xml>
          `}
          ></BlocklyComponent>
        </div>
        <div>Simulator</div>
      </div>
    );
  }
}
