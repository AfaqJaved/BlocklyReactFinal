import * as Blockly from "blockly";
import { BLOCKS_LANGUAGE_CONSTANTS } from "../utils/blockConstants";

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

Blockly.JavaScript["direction_block_mqtt"] = function (block) {
  var dropdown_direction = block.getFieldValue("direction");
  // TODO: Assemble JavaScript into code variable.
  if (
    dropdown_direction ===
    BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.FORWARD
  ) {
    return "\nawait SMARTY_WIFI.moveForward();\n";
  } else if (
    dropdown_direction ===
    BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.BACKWARD
  ) {
    return "\nawait SMARTY_WIFI.moveBackward();\n";
  } else if (
    dropdown_direction ===
    BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.LEFT
  ) {
    return "\nawait SMARTY_WIFI.moveLeft();\n";
  } else if (
    dropdown_direction ===
    BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.RIGHT
  ) {
    return "\nawait SMARTY_WIFI.moveRight();\n";
  } else {
  }
  return "good";
};
