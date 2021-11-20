import * as Blockly from "blockly/core";
import { BLOCKS_LANGUAGE_CONSTANTS } from "../../../utils/blockConstants";

let rotationBlock = {
  type: "rotation_block_ru",
  message0: BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.ROTATION_BLOCK.RUSSIAN + " %1",
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

Blockly.Blocks["rotation_block_ru"] = {
  init: function () {
    this.jsonInit(rotationBlock);
  },
};
