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
import Bot from "./assets/images/bot.png";
import PlayIcon from "./assets/images/play.png";
import PauseIcon from "./assets/images/pause.png";
import ExpandIcon from "./assets/images/expand.png";
import Editor, { DiffEditor, useMonaco, loader, Monaco } from "@monaco-editor/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
    this.blocklyArea = React.createRef();
    this.myButton = React.createRef();
    this.code = "";
    this.initInterpreter = null;
    this.state = {
      code: this.code,
      expanded: false,
    };
  }
  generateCode = () => {
    this.code = BlocklyJS.workspaceToCode(this.simpleWorkspace.current);
    console.log(this.code);
    this.setState({
      code: this.code,
    });
  };

  componentDidMount() {
    this.generateCode();
  }

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
          <div style={{ height: "90%" }} className={"relative col-span-3 md:col-span-3 bg-red-500 w-full " + (this.state.expanded ? "lg:col-span-1" : "lg:col-span-2")}>
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
                grid={{ spacing: 50, length: 5, colour: "gray", snap: true }}
                zoom={{ controls: true, wheel: true, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2, pinch: true }}
                onChange={this.generateCode}
                initialXml={`
                <xml xmlns="http://www.w3.org/1999/xhtml">
                <block type="start_block" x="200" y= "200"></block>
                </xml>
          `}
              ></BlocklyComponent>
              <div className="float-right">
                <h1>Test</h1>
              </div>
            </div>
          </div>

          <div className={"flex flex-col p-5 justify-between items-center bg-pink-600 md:invisible lg:visible invisible " + (this.state.expanded ? "col-span-2" : "")}>
            {/* This is the generate btn */}

            <div className="flex  justify-center items-center  w-full h-full p-5 ">
              <div className="w-full h-full bg-yellow-500 border-4 border-white  shadow-2xl rounded-t-2xl p-5">
                <div className="flex justify-center md:justify-end -mt-16 ">
                  <img
                    onClick={() => {
                      this.setState({ expanded: !this.state.expanded });
                    }}
                    className="w-14 h-18 p-1 object-top  rounded bg-purple-300 cursor-pointer "
                    src={ExpandIcon}
                  ></img>
                </div>
                <Editor theme="light" defaultLanguage="javascript" value={this.code} defaultValue={this.code} height="100%" />
              </div>
            </div>
            {/* This is the card */}
            <div className="flex flex-col  justify-center w-full p-5 mb-16 items-start">
              <div className="w-full py-4 px-8 bg-white  shadow-lg rounded-lg ">
                <div className="flex justify-center md:justify-end -mt-16">
                  <img className="w-18 h-20 object-top  rounded   border-yellow-500 " src={Bot}></img>
                </div>
                <div>
                  {/* This is the buttons */}
                  <div className="flex justify-around items-center ">
                    <button
                      onClick={this.generateCode}
                      className="p-5 flex flex-col text-white justify-center items-center text-2xl bg-blue-500 rounded-3xl
                    shadow-3xl"
                    >
                      <img className="w-16 h-16 " src={PlayIcon}></img>
                    </button>
                    <button className="flex text-white flex-col justify-center items-center p-5 text-2xl  bg-blue-500 rounded-3xl shadow-3xl">
                      <img className="w-16 h-16 " src={PauseIcon}></img>
                    </button>
                  </div>
                </div>
              </div>
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
