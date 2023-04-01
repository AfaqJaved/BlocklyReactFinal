import React, { Component } from "react";
import BlocklyJS from "blockly/javascript";
import BlocklyPython from "blockly/python";
import { connect, useDispatch, useSelector } from "react-redux";
import NavBarBlockly from "../../components/NavBarBlockly";
import { BLOCKLY_THEME } from "../../utils/blocklyTheme";
import { RUNCODE, SMARTY, SMARTY_WIFI } from "../../utils/smartyConstants";
import Bot from "../../assets/images/bot.png";
import PlayIcon from "../../assets/images/play.png";
import PauseIcon from "../../assets/images/example.png";
import Robots from "../../assets/images/robots.png";
import ExpandIcon from "../../assets/images/expand.png";
import Editor, { useMonaco } from "@monaco-editor/react";
import BlocklyComponent from "../../components/blockly/BlocklyComponent";
import * as Blockly from "blockly";
import { WorkspaceSearch } from "@blockly/plugin-workspace-search";
import SelectionDialog from "./dialogSettings/SelectionDialog";
import { setRobot } from "../../features/robot/robotSlice";
import axiosInstance from "../../axios";
import { CONSTANTS } from "../../utils/constants";
import { SHOW_TOAST_WARN } from "../../utils/utils";
import * as Ru from "blockly/msg/ru";
import * as En from "blockly/msg/en";

// importing generators
import "../../generators";

import { useHistory } from "react-router-dom";
import ShowExamplesDialog from "./dialogSamples/ShowExamples";
import { fontSize } from "tailwindcss/lib/plugins";



export default function BlocklyPage() {
  const blocklyDiv = React.useRef();
  const language = useSelector((state) => state.language.language);
  const [expanded, setExpanded] = React.useState(false);
  const [toolbox, setToolbox] = React.useState(null);
  const [code, setcode] = React.useState("");
  const blocklyArea = React.useRef();
  // const [editorLanguage , setEditorLanguage] = React.useState("javascript");
  const simpleWorkspace = React.useRef();
  const [showDialog, setShowDialog] = React.useState(true);
  const [showMqttDevicesDialog, setShowMqttDevicesDialog] =
    React.useState(false);
  const [showExampleDialog, setShowExampleDialog] = React.useState(false);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const product = useSelector((state) => state.robot.product);
  const editorLanguage = useSelector((state) => state.robot.mode);
  const history = useHistory();
  const [blocklyReady , setBlocklyReady] = React.useState(false);
  // const monaco = useMonaco();

  let mode = CONSTANTS.MODES.BLE;

  const getBlocklyArea = () => {
    return blocklyArea;
  };





  const [blocklyOptions, setBlocklyOptions] = React.useState(null);
  let primaryWorkspace = null;

  React.useEffect(() => {
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

  }, []);

  React.useEffect(() => {
    if (blocklyOptions != null && toolbox != null) {
      initBlockly();
    }
  }, [blocklyOptions, toolbox , editorLanguage ]);

  React.useEffect(() => {
    setLanguage();
    if (blocklyOptions != null) history.go(0);
    // window.location.reload();
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
    }
    getTranslations();
    if (primaryWorkspace != null) initBlockly();
  };

  const getBlocklyToolbox = () => {
    if (product != undefined) {
      let find = {
        str_mode: mode,
        userId: userId,
        productId: product.id,
      };
      axiosInstance
        .post(CONSTANTS.API.TOOLBOX.FIND_TOOLBOX_BY_MODE_PRODUCT, find)
        .then((res) => {
          let contents = [];
          if (res.data.data == undefined) {
            SHOW_TOAST_WARN("No Toolbox Found");
          }
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


  const generatePython = () => {
    try {
      let codeGenerated = "";
      BlocklyPython.init(Blockly.getMainWorkspace());
        codeGenerated = BlocklyPython.workspaceToCode(
          Blockly.getMainWorkspace()
        );
      // }
      console.log(codeGenerated);
      setcode(codeGenerated);
    } catch (error) {
      console.log(error);
    }
  };

  const generateJS = () => {
    try {
      let codeGenerated = "";
      BlocklyPython.init(Blockly.getMainWorkspace());
      codeGenerated = BlocklyJS.workspaceToCode(
        Blockly.getMainWorkspace()
      );
      // }
      console.log(codeGenerated);
      setcode(codeGenerated);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeDialog = (data) => {
    console.log("parent dta" + JSON.stringify(data));
    setShowDialog(!showDialog);
    // if (mode === CONSTANTS.MODES.MQTT) setShowMqttDevicesDialog(true);
    // // dispatch(setRobot(data));
  };

  const onMqttDevicesChangeDialog = (data) => {
    console.log("parent dta" + JSON.stringify(data));
    setShowMqttDevicesDialog(!showMqttDevicesDialog);
    // dispatch(setRobot(data));
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
    // Blockly.Xml.domToWorkspace(
    //   Blockly.Xml.textToDom(`  <xml xmlns="http://www.w3.org/1999/xhtml">
    //     <block type="start_block_en" x="200" y= "200"></block>
    //     </xml>`),
    //   primaryWorkspace
    // );
    window.addEventListener("resize", onResize(blocklyArea), false);
    onResize(blocklyArea);
    Blockly.svgResize(primaryWorkspace);
    console.log("Init Blockly CAlled" + editorLanguage);
    // if(editorLanguage === "javascript") {
    //   primaryWorkspace.addChangeListener(generateJS);
    // }
    // else {
    //   primaryWorkspace.addChangeListener(generatePython);
    // }
    setBlocklyReady(true);
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

  const onExamplesDialogClose = (data) => {
    console.log(data);
    if (data != undefined) {
      let xml = data.samples_str_xml;
      Blockly.mainWorkspace.clear();
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(xml),
        Blockly.mainWorkspace
      );
    }

    setShowExampleDialog(!showExampleDialog);
  };

  React.useEffect(()=>{
    console.log(editorLanguage);
    console.log(primaryWorkspace);
    console.log(blocklyReady);

  },[editorLanguage])





  return (
    <div className="h-screen w-screen overflow-hidden ">
      <SelectionDialog
        open={showDialog}
        closeDialog={(data) => onChangeDialog(data)}
      ></SelectionDialog>
      <ShowExamplesDialog
        open={showExampleDialog}
        closeDialog={(data) => onExamplesDialogClose(data)}
      ></ShowExamplesDialog>
      <div>
        <NavBarBlockly></NavBarBlockly>
      </div>
      <div className="grid grid-cols-3 gap-2 w-full h-full">
        <div
          style={{ height: "90%" }}
          className={
            "relative col-span-3 md:col-span-3 bg-red-500 w-full transition-all ease-linear delay-1000 " +
            (expanded ? "lg:col-span-1" : "lg:col-span-2")
          }
        >
          <div ref={blocklyArea}>
            <div
              className="w-full transition-all ease-linear delay-1000 bottom-0 md:pb-20 lg:pb-0 pb-20  top-0 absolute  h-screen lg:h-full md:h-screen"
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
            "flex flex-col p-5 justify-between transition-all ease-linear delay-1000 items-center bg-blue-300 md:invisible lg:visible invisible " +
            (expanded ? "col-span-3" : "")
          }
        >
          {/* This is the generate btn */}
          <div className={"flex justify-between gap-5 text-white "}>
            <button onClick={()=>{
              if(editorLanguage === "javascript") {
                generateJS();
              }
              else {
                generatePython();
              }
            }} className={"text-xl bg-blue-500 hover:bg-blue-600 rounded shadow-lg py-2 px-4 "}>Generate Code</button>
            <h1 className={"text-3xl text-gray-700 font-bold "}>{editorLanguage.toUpperCase()}</h1>
          </div>

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
                theme="vs-dark"
                defaultLanguage={editorLanguage}
                language={editorLanguage}
                value={code}
                onChange={(value)=>{
                  setcode(value);
                }}
                defaultValue={code}
                height="100%"
                options={
                  {
                    fontSize : "22px"
                  }
                }
                // beforeMount={handleEditorWillMount}
                // onMount={handleEditorDidMount}
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
                        if(editorLanguage === 'python'){
                          try {
                            let codeGenerated = "";
                            BlocklyPython.init(Blockly.getMainWorkspace());
                            codeGenerated = BlocklyJS.workspaceToCode(
                              Blockly.getMainWorkspace()
                            );
                            // }
                            console.log(codeGenerated);
                            RUNCODE(codeGenerated);
                          } catch (error) {
                            console.log(error);
                          }
                        }
                        RUNCODE(code);
                    }}
                    className="p-5 flex flex-col text-white justify-center items-center text-2xl bg-blue-500 rounded-3xl
                    shadow-3xl"
                  >
                    <img className="w-16 h-16 " src={PlayIcon}></img>
                  </button>
                  <button
                    onClick={() => setShowExampleDialog(!showExampleDialog)}
                    className="flex text-white flex-col justify-center items-center p-5 text-2xl  bg-blue-500 rounded-3xl shadow-3xl"
                  >
                    <img className="w-16 h-16 " src={PauseIcon}></img>
                  </button>
                  {mode === CONSTANTS.MODES.MQTT ? (
                    <button
                      onClick={() => {
                        history.push(CONSTANTS.ROUTING.MQTT_DEVICES_PAGE);
                      }}
                      className="flex text-white flex-col justify-center items-center p-5 text-2xl  bg-blue-500 rounded-3xl shadow-3xl"
                    >
                      <img className="w-16 h-16 " src={Robots}></img>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
