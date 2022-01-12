import * as Blockly from "blockly";

Blockly.JavaScript["blink_leds"] = function (block) {
  var dropdown_color = block.getFieldValue("color");
  var number_loop = block.getFieldValue("loop");

  var code =
    " await SMARTY.blinkLeds('" +
    dropdown_color.toString() +
    "' , " +
    number_loop +
    ")\n";
  return code;
};
