import * as Blockly from "blockly";
Blockly.JavaScript["get_distance"] = function (block) {
  var code = "await SMARTY.getDistance()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};
