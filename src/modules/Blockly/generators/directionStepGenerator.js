// import * as Blockly from "blockly";
// import { CONSTANTS } from "../../../utils/constants";

// // Blockly.JavaScript['dropdowndirectionstep'] = function(block) {
// //   var dropdown_steps = block.getFieldValue('Steps');

// //   var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
// //   // TODO: Assemble JavaScript into code variable.
// //   var code = "await Smarty.test("+ value_number+");";
// //   return code;
// // };

// Blockly.JavaScript["directionstepblock"] = function (block) {
//   var dropdown_steps = block.getFieldValue("steps");
//   var value_number = Blockly.JavaScript.valueToCode(
//     block,
//     "number",
//     Blockly.JavaScript.ORDER_ATOMIC
//   );

  
//   if (
//     dropdown_steps ===
//     CONSTANTS.BLOCKS.DIRECTION_STEPS_BLOCK.DIRECTIONS_STEPS_ENGLISH.FORWARD
//   ) {
//     var code = "\nawait SMARTY.moveForwardSteps(" + value_number + ");\n";
//   } else if (
//     dropdown_steps ===
//     CONSTANTS.BLOCKS.DIRECTION_STEPS_BLOCK.DIRECTIONS_STEPS_ENGLISH.BACKWARD
//   ) {
//     var code = "\nawait SMARTY.moveBackwardSteps(" + value_number + ");\n";
//   } else if (
//     dropdown_steps ===
//     CONSTANTS.BLOCKS.DIRECTION_STEPS_BLOCK.DIRECTIONS_STEPS_ENGLISH.LEFT
//   ) {
//     var code = "\nawait SMARTY.moveLeftSteps(" + value_number + ");\n";
//   } else if (
//     dropdown_steps ===
//     CONSTANTS.BLOCKS.DIRECTION_STEPS_BLOCK.DIRECTIONS_STEPS_ENGLISH.RIGHT
//   ) {
//     var code = "\nawait SMARTY.moveRightSteps(" + value_number + ");\n";
//   }

//   return code;
// };

