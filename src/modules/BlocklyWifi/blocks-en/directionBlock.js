import * as Blockly from "blockly/core";
import { BLOCKS_LANGUAGE_CONSTANTS } from "../../../utils/blockConstants";
import { store } from "../../../app/store";

let directionBlock = {
  type: "direction_en",
  message0: BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.ENGLISH + " %1",
  args0: [
    {
      type: "field_dropdown",
      name: "direction",
      options: [
        //1st show 2nd value
        [BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.FORWARD, BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.FORWARD],
        [BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.BACKWARD, BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.BACKWARD],
        [BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.LEFT, BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.LEFT],
        [BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.RIGHT, BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.RIGHT],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 270,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["direction_en"] = {
  init: function () {
    this.jsonInit(directionBlock);
  },
};
