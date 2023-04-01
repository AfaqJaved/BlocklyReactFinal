import * as Blockly from "blockly";
import Python from "blockly/python";

Blockly.JavaScript["start_block_en"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "async function StartProgram(){" +
    statements_name +
    "};\n\n\n\n\n StartProgram();";
  return code;
};


Blockly.Python["start_block_en"] = function (block) {
  let branch = Blockly.Python.statementToCode(block, "NAME");
  branch = Python.addLoopTrap(branch,block) || 'pass';
  // TODO: Assemble JavaScript into code variable.
  var code =
    `def StartProgram():\n  ${branch}\n\n\n\n\n\n\n StartProgram()`
  return code;
};
