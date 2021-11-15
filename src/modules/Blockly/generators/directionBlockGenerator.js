import * as Blockly from "blockly";
import { CONSTANTS } from "../../../utils/constants";

Blockly.JavaScript["direction"] = function (block) {
  var dropdown_direction = block.getFieldValue("direction");
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_direction === CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.FORWARD) {
    return "await SMARTY.moveForward();\n";
  } else if (dropdown_direction === CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.BACKWARD) {
    return "await SMARTY.moveBackward();\n";
  } else if (dropdown_direction === CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.LEFT) {
    return "await SMARTY.moveLeft();\n";
  } else if (dropdown_direction === CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.RIGHT) {
    return "await SMARTY.moveRight();\n";
  }
  return "";
};
