import * as Blockly from "blockly/core";
import { CONSTANTS } from "../../../utils/constants";

let directionBlock = {
  type: "direction",
  message0: "%{BKY_DIRECTION_BLOCK} %1",
  args0: [
    {
      type: "field_dropdown",
      name: "direction",
      options: [
        //1st show 2nd value
        [CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.FORWARD, CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.FORWARD],
        [CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.BACKWARD, CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.BACKWARD],
        [CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.LEFT, CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.LEFT],
        [CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.RIGHT, CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.RIGHT],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 270,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["direction"] = {
  init: function () {
    this.jsonInit(directionBlock);
  },
};

Blockly.Msg.DIRECTION_BLOCK = CONSTANTS.BLOCKS.DIRECTION_BLOCK.ENGLISH;
