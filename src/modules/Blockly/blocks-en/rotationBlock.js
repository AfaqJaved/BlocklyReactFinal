import * as Blockly from "blockly/core";
import { BLOCKS_LANGUAGE_CONSTANTS } from "../../../utils/blockConstants";

let rotationBlock = {
  type: "rotation_block_en",
  message0: BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.ROTATION_BLOCK.ENGLISH + " %1",
  args0: [
    {
      type: "field_angle",
      name: "angle",
      angle: 90,
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["rotation_block_en"] = {
  init: function () {
    this.jsonInit(rotationBlock);
  },
};
