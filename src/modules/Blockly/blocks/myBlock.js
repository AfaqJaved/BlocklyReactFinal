import * as Blockly from "blockly/core";

let myBlock = {
  type: "afaq_block",
  message0: "My Block %1 %2",
  args0: [
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "Code",
    },
  ],
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["afaq_block"] = {
  init: function () {
    this.jsonInit(myBlock);
    // this.setStyle("loop_blocks");
  },
};
