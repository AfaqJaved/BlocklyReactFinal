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
import BackLogo from "./assets/images/back.jpg";

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
                grid={{ spacing: 50, length: 5, colour: "gray", snap: true }}
                zoom={{ controls: true, wheel: true, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2, pinch: true }}
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

          <div className="flex flex-col  justify-between items-center bg-red-500 md:invisible lg:visible invisible ">
            {/* This is the generate btn */}
            <div className="flex justify-center items-center">
              <h1>Code </h1>
            </div>
            {/* This is the card */}
            <div className="flex flex-col  justify-center w-full p-5 shadow-xl  items-start">
              <div style={{ backgroundImage: `url(${BackLogo})`, backgroundSize: "cover" }} class="w-full py-4 px-8     shadow-lg rounded-lg my-20">
                <div class="flex justify-center md:justify-end -mt-16">
                  <img class="w-18 h-20 object-top  rounded   border-yellow-500 " src={Bot}></img>
                </div>
                <div>
                  {/* This is the buttons */}
                  <div className="flex justify-around items-center ">
                    <button
                      onClick={this.generateCode}
                      className="p-5 flex flex-col text-white justify-center items-center text-2xl bg-blue-500 rounded-3xl
                    shadow-2xl"
                    >
                      <img class="w-16 h-16 " src={PlayIcon}></img>
                    </button>
                    <button className="flex text-white flex-col justify-center items-center p-5 text-2xl  bg-blue-500 rounded-3xl shadow-xl">
                      <img class="w-16 h-16 " src={PauseIcon}></img>
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
