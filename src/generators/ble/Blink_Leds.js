import * as Blockly from "blockly";

Blockly.JavaScript["blink_rgb_leds_ble"] = function (block) {
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

// {
//   "type": "blink_rgb_leds_ble",
//   "message0": "Blink Leds  %1 No of Times %2 Led Type %3",
//   "args0": [
//     {
//       "type": "field_dropdown",
//       "name": "color",
//       "options": [
//         [
//           "RED",
//           "RED"
//         ],
//         [
//           "GREEN",
//           "GREEN"
//         ],
//         [
//           "BLUE",
//           "BLUE"
//         ]
//       ]
//     },
//     {
//       "type": "field_number",
//       "name": "loop",
//       "value": 1,
//       "min": 1,
//       "max": 10
//     },
//     {
//       "type": "field_dropdown",
//       "name": "led_type",
//       "options": [
//         [
//           "CATHODE",
//           "CATHODE"
//         ],
//         [
//           "ANODE",
//           "ANODE"
//         ]
//       ]
//     }
//   ],
//   "previousStatement": null,
//   "nextStatement": null,
//   "colour": 230,
//   "tooltip": "",
//   "helpUrl": ""
// }
