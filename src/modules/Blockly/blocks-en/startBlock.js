import * as Blockly from "blockly/core";
import { BLOCKS_LANGUAGE_CONSTANTS } from "../../../utils/blockConstants";

let startBlock = {
  type: "start_block_en",
  message0: BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.START_BLOCK.ENGLISH + "  %1 %2",
  args0: [
    {
      type: "input_dummy",
      align: "CENTRE",
    },
    {
      type: "input_statement",
      name: "NAME",
    },
  ],
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["start_block_en"] = {
  init: function () {
    this.jsonInit(startBlock);
  },
};
