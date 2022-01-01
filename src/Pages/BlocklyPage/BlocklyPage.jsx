import React, { Component } from "react";
import BlocklyJS from "blockly/javascript";
import { connect, useDispatch, useSelector } from "react-redux";
import NavBarBlockly from "../../components/NavBarBlockly";
import { BLOCKLY_THEME } from "../../utils/blocklyTheme";
import { RUNCODE } from "../../utils/smartyConstants";
import Bot from "../../assets/images/bot.png";
import PlayIcon from "../../assets/images/play.png";
import PauseIcon from "../../assets/images/pause.png";
import ExpandIcon from "../../assets/images/expand.png";
import Editor from "@monaco-editor/react";
import BlocklyComponent from "../../components/blockly/BlocklyComponent";
import * as Blockly from "blockly";
import { WorkspaceSearch } from "@blockly/plugin-workspace-search";

import {
  INITIAL_TOOLBOX_JSON_EN,
  test,
} from "../../modules/Blockly/toolbox/en/toolbox";
import * as Fr from "blockly/msg/fr";
import SelectionDialog from "./dialogSettings/SelectionDialog";
import { setRobot } from "../../features/robot/robotSlice";
import axiosInstance from "../../axios";
import { CONSTANTS } from "../../utils/constants";
import { SHOW_TOAST_WARN } from "../../utils/utils";

import * as Ru from "blockly/msg/ru";
import * as En from "blockly/msg/en";

// importing generators
import "../../generators";

export default function BlocklyPage() {
  const blocklyDiv = React.useRef();
  const language = useSelector((state) => state.language.language);
  const [expanded, setExpanded] = React.useState(false);
  const [toolbox, setToolbox] = React.useState(null);
  const [code, setcode] = React.useState("");
  const blocklyArea = React.useRef();
  const simpleWorkspace = React.useRef();
  const [showDialog, setShowDialog] = React.useState(true);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const robot = useSelector((state) => state.robot.robot);
  const getBlocklyArea = () => {
    return blocklyArea;
  };
  const [blocklyOptions, setBlocklyOptions] = React.useState(null);
  let primaryWorkspace = null;

  React.useEffect(() => {
    if (showDialog == false) {
      axiosInstance
        .get(CONSTANTS.API.BLOCK_DEFINATION.FIND_ALL)
        .then((res) => {
          let options = JSON.parse(res.data.data.str_block_definations);
          console.log(options);
          options.forEach((element) => {
            Blockly.Blocks[element.type] = {
              init: function () {
                this.jsonInit(element);
              },
            };
          });
        })
        .catch((res) => {
          console.log(res);
        });

      getBlocklyParams();
      getBlocklyToolbox();
    }
  }, [showDialog]);

  React.useEffect(() => {
    if (blocklyOptions != null && toolbox != null) {
      initBlockly();
    }
  }, [blocklyOptions, toolbox]);

  React.useEffect(() => {
    setLanguage();
  }, [language]);

  const getTranslations = () => {
    axiosInstance
      .get(CONSTANTS.API.TRANSLATIONS.FIND_BY_LANGUAGE + language)
      .then((res) => {
        if (res.data.data != undefined) {
          res.data.data.str_translations.forEach((element) => {
            Blockly.Msg[element.key] = element.value;
          });
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const setLanguage = () => {
    if (language === CONSTANTS.LANGUAGE.ENGLISH) {
      Blockly.setLocale(En);
    }
    if (language === CONSTANTS.LANGUAGE.RUSSIAN) {
      Blockly.setLocale(Ru);
      // Blockly.Msg["START_PROGRAM"] = "Начать программу";
    }
    getTranslations();
  };
  const getBlocklyToolbox = () => {
    if (robot != undefined) {
      let find = {
        str_mode: "MQTT",
        userId: userId,
        productId: robot.id,
      };
      axiosInstance
        .post(CONSTANTS.API.TOOLBOX.FIND_TOOLBOX_BY_MODE_PRODUCT, find)
        .then((res) => {
          let contents = [];
          res.data.data.toolboxCat.forEach((element) => {
            let obj = {
              kind: element.str_kind,
              name: element.str_name,
              cssConfig: {
                container: element.json_cssConfig.container,
                row: element.json_cssConfig.row,
                label: element.json_cssConfig.label,
                icon: element.json_cssConfig.icon,
              },
              contents: [],
            };
            element.blocks.forEach((block) => {
              let customBlock = undefined;
              if (block.str_block_type == null) {
                customBlock = {
                  kind: block.str_kind,
                  blockxml: block.str_block_xml,
                  // type: block.str_block_style_json,
                };
              } else {
                customBlock = {
                  kind: block.str_kind,
                  type: block.str_block_type,
                };
              }

              obj.contents.push(customBlock);
            });
            contents.push(obj);
          });
          let obj = {
            kind: res.data.data.str_kind,
            contents: contents,
          };
          console.log(obj);
          setToolbox(obj);
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };

  const generateCode = () => {
    try {
      let codeGenertated = BlocklyJS.workspaceToCode(simpleWorkspace.current);
      setcode(codeGenertated);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeDialog = (data) => {
    console.log("parent dta" + JSON.stringify(data));
    setShowDialog(!showDialog);
    dispatch(setRobot(data));
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

  const initBlockly = () => {
    primaryWorkspace = Blockly.inject(blocklyDiv.current, blocklyOptions);
    setSearchFuncBlockly();
    primaryWorkspace.updateToolbox(toolbox);
    Blockly.Xml.domToWorkspace(
      Blockly.Xml.textToDom(`  <xml xmlns="http://www.w3.org/1999/xhtml">
        <block type="start_block_en" x="200" y= "200"></block>
        </xml>`),
      primaryWorkspace
    );
    window.addEventListener("resize", onResize(blocklyArea), false);
    onResize(blocklyArea);
    Blockly.svgResize(primaryWorkspace);
    primaryWorkspace.addChangeListener(generateCode);
  };

  const setSearchFuncBlockly = () => {
    const workspaceSearch = new WorkspaceSearch(primaryWorkspace);
    workspaceSearch.init();
  };

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

  return (
    <div className="h-screen w-screen overflow-hidden ">
      <SelectionDialog
        open={showDialog}
        closeDialog={(data) => onChangeDialog(data)}
      ></SelectionDialog>
      <div>
        <NavBarBlockly onChangeDialog={onChangeDialog}></NavBarBlockly>
      </div>
      <div className="grid grid-cols-3 gap-2 w-full h-full">
        <div
          style={{ height: "90%" }}
          className={
            "relative col-span-3 md:col-span-3 bg-red-500 w-full " +
            (expanded ? "lg:col-span-1" : "lg:col-span-2")
          }
        >
          <div ref={blocklyArea}>
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
                {/* {props.children} */}
              </xml>
            </div>
            {/* <BlocklyComponent
              ref={simpleWorkspace}
              readOnly={false}
              blocklyArea={getBlocklyArea}
              toolbox={toolbox}
              onChange={generateCode}
              options={blocklyOptions}
              initialXml={`
                <xml xmlns="http://www.w3.org/1999/xhtml">
                <block type="start_block_en" x="200" y= "200"></block>
                </xml>
          `}
            ></BlocklyComponent> */}
          </div>
        </div>

        <div
          className={
            "flex flex-col p-5 justify-between items-center bg-blue-300 md:invisible lg:visible invisible " +
            (expanded ? "col-span-2" : "")
          }
        >
          {/* This is the generate btn */}

          <div className="flex  justify-center  items-center  w-full h-full p-5 ">
            <div className="w-full h-full bg-yellow-500 border-4 border-white  shadow-2xl rounded-t-2xl p-5">
              <div className="flex justify-center md:justify-end -mt-16 ">
                <img
                  onClick={() => {
                    setExpanded(!expanded);
                  }}
                  className="w-14 h-18 p-1 object-top  rounded bg-purple-300 cursor-pointer "
                  src={ExpandIcon}
                ></img>
              </div>
              <Editor
                theme="light"
                defaultLanguage="javascript"
                value={code}
                defaultValue={code}
                height="100%"
              />
            </div>
          </div>
          {/* This is the card */}
          <div className="flex flex-col  justify-center w-full p-5 mb-16 items-start">
            <div className="w-full py-4 px-8 bg-pink-600  shadow-lg rounded-lg ">
              <div className="flex justify-center md:justify-end -mt-16">
                <img
                  className="w-18 h-20 object-top  rounded   border-yellow-500 "
                  src={Bot}
                ></img>
              </div>
              <div>
                {/* This is the buttons */}
                <div className="flex justify-around items-center ">
                  <button
                    onClick={() => {
                      RUNCODE(code);
                    }}
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
