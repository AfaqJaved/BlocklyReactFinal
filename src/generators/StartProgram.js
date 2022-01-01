import * as Blockly from "blockly";

Blockly.JavaScript["start_block_en"] = function (block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "async function StartProgram(){" +
    statements_name +
    "};\n\n\n\n\n StartProgram();";
  return code;
};
