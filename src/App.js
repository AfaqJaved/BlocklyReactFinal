import React, { Component } from "react";
import "./App.css";
import BlocklyComponent from "./modules/Blockly";
import BlocklyJS from "blockly/javascript";
import BottomBackGround from "./assets/images/bottom-background.png";

//importing blocks
import "./modules/Blockly/blocks";

//importing generators
import "./modules/Blockly/generators";

import NavBar from "./components/NavBar";
import "./modules/Blockly/toolbox/customToolBox";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
    this.blocklyArea = React.createRef();
    this.myButton = React.createRef();
  }
  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(this.simpleWorkspace.current.workspace);
    console.log(code);
    eval(code);
  };

  getBlocklyArea() {
    return this.blocklyArea;
  }
  render() {
    return (
      <div className="h-screen w-screen overflow-hidden ">
        <div>
          <NavBar></NavBar>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full h-full">
          <div style={{ height: "90%" }} className="relative col-span-2 md:col-span-2 lg:col-span-1 bg-red-500 w-full">
            <div ref={this.blocklyArea}>
              <BlocklyComponent
                ref={this.simpleWorkspace}
                readOnly={false}
                blocklyArea={this.getBlocklyArea}
                trashcan={true}
                toolboxPosition="end"
                media={process.env.PUBLIC_URL + "media/"}
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
