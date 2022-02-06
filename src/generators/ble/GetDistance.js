import * as Blockly from "blockly";
Blockly.JavaScript["get_distance_ble"] = function (block) {
  var code = "await SMARTY.getDistance()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// {
//   "type": "get_distance_ble",
//   "message0": "Get Ultrasonic Distance",
//   "output": "Number",
//   "colour": 255,
//   "tooltip": "",
//   "helpUrl": ""
// }
