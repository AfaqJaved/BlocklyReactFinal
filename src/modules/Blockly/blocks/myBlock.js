import * as Blockly from "blockly/core";
import { CONSTANTS } from "../../../utils/constants";

let myBlock = {
  type: "afaq_custom_block",
  message0: "%{BKY_MYBLOCK}",
  previousStatement: null,
  nextStatement: null,
  colour: 315,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["afaq_custom_block"] = {
  init: function () {
    this.jsonInit(myBlock);
  },
};

Blockly.Msg.MYBLOCK = CONSTANTS.BLOCKS.MYBLOCK.ENGLISH;
// Blockly.Msg.MYBLOCK = "Показать оповещение";
