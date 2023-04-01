import * as Blockly from "blockly";
import { BLOCKS_LANGUAGE_CONSTANTS } from "../../utils/blockConstants";


Blockly.JavaScript["direction_block_ble"] = function (block) {
  var dropdown_direction = block.getFieldValue("direction");
  // TODO: Assemble JavaScript into code variable.
  if (
    dropdown_direction ===
    BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.FORWARD
  ) {
    return "\nawait SMARTY.moveForward();\n";
  } else if (
    dropdown_direction ===
    BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.BACKWARD
  ) {
    return "\nawait SMARTY.moveBackward();\n";
  } else if (
    dropdown_direction ===
    BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.LEFT
  ) {
    return "\nawait SMARTY.moveLeft();\n";
  } else if (
    dropdown_direction ===
    BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.RIGHT
  ) {
    return "\nawait SMARTY.moveRight();\n";
  } else {
  }
  return "good";
};


Blockly.Python["direction_block_ble"] = function (block) {
  var dropdown_direction = block.getFieldValue("direction");
  // TODO: Assemble JavaScript into code variable.
  if (
    dropdown_direction ===
    BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.FORWARD
  ) {
    return "moveForward()\n";
  } else if (
    dropdown_direction ===
    BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.BACKWARD
  ) {
    return "moveBack()\n";
  } else if (
    dropdown_direction ===
    BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.LEFT
  ) {
    return "moveLeft()\n";
  } else if (
    dropdown_direction ===
    BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.RIGHT
  ) {
    return "moveRight()\n";
  } else {
  }
  return "good";
};








// {
//   "type": "direction_block_ble",
//   "message0": "Move in Direction %1",
//   "args0": [
//     {
//       "type": "field_dropdown",
//       "name": "direction",
//       "options": [
//         [
//           "FORWARD",
//           "FORWARD"
//         ],
//         [
//           "BACKWARD",
//           "BACKWARD"
//         ],
//         [
//           "LEFT",
//           "LEFT"
//         ],
//         [
//           "RIGHT",
//           "RIGHT"
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
