import * as Blockly from "blockly/core";
import { CONSTANTS } from "../../../utils/constants";

let getDistanceBlock = {
  type: "getdistance",
  message0: "getDistance",
  output: "Number",
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["getdistance"] = {
  init: function () {
    this.jsonInit(getDistanceBlock);
  },
};

// Blockly.Msg.DIRECTION_BLOCK = CONSTANTS.BLOCKS.DIRECTION_BLOCK.ENGLISH;
