import React, { Component } from "react";
import "./App.css";
import BlocklyComponent from "./modules/Blockly";
import BlocklyJS from "blockly/javascript";
import { connect } from "react-redux";
import { BLE } from "./utils/bleConstants";
//importing blocks
import "./modules/Blockly/blocks";
//importing generators
import "./modules/Blockly/generators";

import NavBar from "./components/NavBar";
import "./modules/Blockly/toolbox/customToolBox";
import { BLOCKLY_THEME } from "./utils/blocklyTheme";
import { RUNCODE } from "./utils/smartyConstants";

class App extends Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
    this.blocklyArea = React.createRef();
    this.myButton = React.createRef();
    this.code = "";
    this.initInterpreter = null;
  }
  generateCode = () => {
    this.code = BlocklyJS.workspaceToCode(this.simpleWorkspace.current);
    console.log(this.code);
    this.excecuteCode();
  };

  excecuteCode() {
    RUNCODE(this.code);
  }

  getBlocklyArea() {
    return this.blocklyArea;
  }
  render() {
    return (
      <div className="h-screen w-screen overflow-hidden ">
        <div>
          <NavBar></NavBar>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full h-full">
          <div style={{ height: "90%" }} className="relative col-span-3 md:col-span-3 lg:col-span-2 bg-red-500 w-full">
            <div ref={this.blocklyArea}>
              <BlocklyComponent
                ref={this.simpleWorkspace}
                readOnly={false}
                blocklyArea={this.getBlocklyArea}
                trashcan={true}
                toolboxPosition="start"
                media={process.env.PUBLIC_URL + "media/"}
                theme={BLOCKLY_THEME.THEME}
                move={{
                  scrollbars: true,
                  drag: true,
                  wheel: true,
                }}
                grid={{ spacing: 20, length: 3, colour: "#000000", snap: true }}
                zoom={{ controls: true, wheel: true, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2, pinch: true }}
                initialXml={`
                <xml xmlns="http://www.w3.org/1999/xhtml">
                <block type="start_block" x="200" y= "200"></block>
                </xml>
          `}
              ></BlocklyComponent>
            </div>
          </div>

          <div className="relative  md:invisible lg:visible invisible ">
            <div className="flex justify-center items-center">
              <button
                style={{ fontFamily: "Finger Paint", fontWeight: 2, fontSize: 30 }}
                onClick={this.generateCode}
                className="bg-purple-500  rounded text-xl font-semibold text text-white font-sans   hover:bg-purple-600 hover:text-yellow-600 shadow-sm items-center p-2"
              >
                Generate Code
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    bleChar: state.ble.char,
  };
};

export default connect(mapStateToProps)(App);
