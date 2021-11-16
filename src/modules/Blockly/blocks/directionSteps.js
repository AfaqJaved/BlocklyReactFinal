import * as Blockly from "blockly/core";
import { CONSTANTS } from "../../../utils/constants";

let directionSteps = {
    "type": "direction_steps",
    "message0": "%{BKY_DIRECTION_BLOCK} %1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "direction_steps",
        "options": [

            ["%{BKY_DIRECTION_BLOCK_FORWARD}", CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.FORWARD],
        ["%{BKY_DIRECTION_BLOCK_BACKWARD}", CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.BACKWARD],
        ["%{BKY_DIRECTION_BLOCK_LEFT}", CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.LEFT],
        ["%{BKY_DIRECTION_BLOCK_RIGHT}", CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.RIGHT],
    
        ]
      },
      {
        "type": "input_value",
        "name": "number_input",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
Blockly.Blocks["direction_steps"] = {
  init: function () {
    this.jsonInit(directionSteps);
  },
};

Blockly.Msg.DIRECTION_BLOCK = CONSTANTS.BLOCKS.DIRECTION_BLOCK.ENGLISH;
Blockly.Msg.DIRECTION_BLOCK_FORWARD = CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.FORWARD;
Blockly.Msg.DIRECTION_BLOCK_BACKWARD = CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.BACKWARD;
Blockly.Msg.DIRECTION_BLOCK_LEFT = CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.LEFT;
Blockly.Msg.DIRECTION_BLOCK_RIGHT = CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.RIGHT;
// Blockly.Msg.MYBLOCK = "Показать оповещение";
