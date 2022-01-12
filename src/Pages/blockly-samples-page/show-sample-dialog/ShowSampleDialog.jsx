import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import * as Blockly from "blockly";
import { blocklyParams } from "../../../utils/baseParams";
import axiosInstance from "../../../axios";
import { CONSTANTS } from "../../../utils/constants";
import * as En from "blockly/msg/en";
Blockly.setLocale(En);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ShowSampleDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [data, setData] = React.useState(props.data);
  let [primaryWorkspace, setprimaryWorkspace] = React.useState(null);
  const blocklyArea = React.useRef();
  const blocklyDiv = React.useRef();
  //   let primaryWorkspace = null;

  React.useEffect(() => {
    setOpen(props.open);

    if (props.open && primaryWorkspace == null) {
      initBlockly();
      // Blockly.Xml.domToWorkspace(
      //   Blockly.Xml.textToDom(props.data.str_xml),
      //   primaryWorkspace
      // );
    }
  }, [props.open]);

  const getTranslations = () => {
    axiosInstance
      .get(CONSTANTS.API.TRANSLATIONS.FIND_BY_LANGUAGE + "en")
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

  const getBlockDefinations = () => {
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
        initBlockly();
        Blockly.mainWorkspace.clear();
        Blockly.Xml.domToWorkspace(
          Blockly.Xml.textToDom(props.data.str_xml),
          Blockly.mainWorkspace
        );
      })
      .catch((res) => {
        console.log(res);
      });
  };

  React.useEffect(() => {
    setData(props.data);
    if (props.data != undefined) {
      getTranslations();
      getBlockDefinations();
    }
  }, [props.data]);

  const handleClose = (data) => {
    setOpen(false);
    setprimaryWorkspace("123");
    props.closeDialog(data);
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

  const initBlockly = () => {
    if (primaryWorkspace == null) {
      primaryWorkspace = Blockly.inject(blocklyDiv.current, blocklyParams);
      Blockly.svgResize(primaryWorkspace);
      window.addEventListener("resize", onResize(blocklyArea), false);
      onResize(blocklyArea);
    }
  };

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
      fullWidth
      maxWidth={"lg"}
      sx={""}
      scroll={"body"}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={(event, reason) => {
        handleClose();
      }}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <div className="  w-full h-full">
          <div className="flex justify-end items-center p-5 ">
            <button
              onClick={handleClose}
              className="text-white bg-red-400 py-2 text-2xl px-4 rounded-lg "
            >
              X
            </button>
          </div>
          <div
            style={{ width: "70vw", height: "70vh" }}
            ref={blocklyArea}
            className="bg-red-500 "
          >
            <div
              className="absolute w-full h-full "
              ref={blocklyDiv}
              id="blocklyDiv"
            >
              <xml
                xmlns="https://developers.google.com/blockly/xml"
                is="blockly"
                style={{ display: "none" }}
              ></xml>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
