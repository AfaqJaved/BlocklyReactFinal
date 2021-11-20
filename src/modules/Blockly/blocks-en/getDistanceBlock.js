import * as Blockly from "blockly/core";
import { CONSTANTS } from "../../../utils/constants";
import { BLOCKS_LANGUAGE_CONSTANTS } from "../../../utils/blockConstants";

let getDistanceBlock = {
  type: "getdistance_en",
  message0: BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.GET_DISTANCE_BLOCK.EMGLISH,
  output: "Number",
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["getdistance_en"] = {
  init: function () {
    this.jsonInit(getDistanceBlock);
  },
};
