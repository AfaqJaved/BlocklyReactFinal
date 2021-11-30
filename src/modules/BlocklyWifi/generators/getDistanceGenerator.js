import * as Blockly from "blockly";
// For English Block
Blockly.JavaScript["getdistance_en"] = function (block) {
  var code = "await SMARTY.getDistance()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// For russian  Block
Blockly.JavaScript["getdistance_ru"] = function (block) {
  var code = "await SMARTY.getDistance()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};
