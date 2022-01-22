import * as Blockly from "blockly";

Blockly.JavaScript["play_melody_ble"] = function (block) {
  var number_times = block.getFieldValue("TIMES");
  // TODO: Assemble JavaScript into code variable.
  var code = "await SMARTY.playMelody( " + number_times + " );\n";
  return code;
};
