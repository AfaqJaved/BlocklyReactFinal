import * as Blockly from "blockly/core";
import { CONSTANTS } from "../../../utils/constants";

let startBlock = {
  type: "start_block",
  message0: "%{BKY_START_BLOCK}  %1 %2",
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

Blockly.Blocks["start_block"] = {
  init: function () {
    this.jsonInit(startBlock);
  },
};

Blockly.Msg.START_BLOCK = CONSTANTS.BLOCKS.START_BLOCK.ENGLISH;
// Blockly.Msg.MYBLOCK = "Показать оповещение";
