import * as Blockly from "blockly";
Blockly.JavaScript["getdistance"] = function (block) {
  var code = "await SMARTY.getDistance()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};
