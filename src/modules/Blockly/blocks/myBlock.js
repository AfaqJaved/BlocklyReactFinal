import * as Blockly from "blockly/core";

let myBlock = {
  type: "afaq_custom_block",
  message0: "Show Alert",
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
