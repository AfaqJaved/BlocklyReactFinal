
import * as Blockly from "blockly";
import { CONSTANTS } from "../../../utils/constants";

Blockly.JavaScript['direction_steps'] = function(block) {
    var dropdown_direction_steps = block.getFieldValue('direction_steps');
    if (dropdown_direction_steps=== CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.FORWARD) {
        return "await SMARTY.moveForward();\n";
      } else if (dropdown_direction_steps === CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.BACKWARD) {
        return "await SMARTY.moveBackward();\n";
      } else if (dropdown_direction_steps === CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.LEFT) {
        return "await SMARTY.moveLeft();\n";
      } else if (dropdown_direction_steps === CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.RIGHT) {
        return "await SMARTY.moveRight();\n";
      }
        
    var value_number_input = Blockly.JavaScript.valueToCode(block, 'number_input', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };