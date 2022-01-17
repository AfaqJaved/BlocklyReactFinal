import * as Blockly from "blockly";

// Blockly.JavaScript["blink_leds"] = function (block) {
//   var dropdown_color = block.getFieldValue("color");
//   var number_loop = block.getFieldValue("loop");

//   var code =
//     " await SMARTY.blinkLeds('" +
//     dropdown_color.toString() +
//     "' , " +
//     number_loop +
//     ")\n";
//   return code;
// };

Blockly.JavaScript["blink_leds"] = function (block) {
  var dropdown_color = block.getFieldValue("color");
  var number_loop = block.getFieldValue("loop");
  var dropdown_led_type = block.getFieldValue("led_type");
  // TODO: Assemble JavaScript into code variable.
  var code =
    " await SMARTY.blinkLeds('" +
    dropdown_color.toString() +
    "' , " +
    number_loop +
    ", '" +
    dropdown_led_type.toString() +
    "'" +
    ");\n";
  return code;
};
