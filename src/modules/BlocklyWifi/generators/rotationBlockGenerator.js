import * as Blockly from "blockly";

// For english block
Blockly.JavaScript["rotation_block_en"] = function (block) {
  var angle_angle = block.getFieldValue("angle");
  var code = "\nawait SMARTY.rotateSmarty(" + angle_angle + ");\n";
  return code;
};

// For russian block
Blockly.JavaScript["rotation_block_ru"] = function (block) {
  var angle_angle = block.getFieldValue("angle");
  var code = "\nawait SMARTY.rotateSmarty(" + angle_angle + ");\n";
  return code;
};
