import * as Blockly from "blockly";

Blockly.JavaScript["play_melody_ble"] = function (block) {
  var number_times = block.getFieldValue("TIMES");
  // TODO: Assemble JavaScript into code variable.
  var code = "await SMARTY.playMelody( " + number_times + " );\n";
  return code;
};

Blockly.Python["play_melody_ble"] = function (block) {
  var number_times = block.getFieldValue("TIMES");
  // TODO: Assemble JavaScript into code variable.
  var code = `playMelody(${number_times})\n`;
  return code;
};

// {
//   "type": "play_melody_ble",
//   "message0": "Play Melody  %1",
//   "args0": [
//     {
//       "type": "field_number",
//       "name": "TIMES",
//       "value": 1,
//       "min": 1,
//       "max": 10
//     }
//   ],
//   "previousStatement": null,
//   "nextStatement": null,
//   "colour": 230,
//   "tooltip": "",
//   "helpUrl": ""
// }
