import * as Blockly from "blockly/core";
import { CONSTANTS } from "../../../utils/constants";

let rotationBlock ={
    "type": "rotation_block",
    "message0": "%{BKY_ROTATION_BLOCK} %1",
    "args0": [
      {
        "type": "field_angle",
        "name": "angle",
        "angle": 90
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }

Blockly.Blocks["rotation_block"] = {
  init: function () {
    this.jsonInit(rotationBlock);
  },
};

Blockly.Msg.ROTATION_BLOCK = CONSTANTS.BLOCKS.ROTATION_BLOCK.ENGLISH;
// Blockly.Msg.MYBLOCK = "Показать оповещение";
