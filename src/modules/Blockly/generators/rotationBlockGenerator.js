import * as Blockly from "blockly";
Blockly.JavaScript['rotation_block'] = function(block) {
    var angle_angle = block.getFieldValue('angle');
    var code = '\nawait SMARTY.rotateSmarty('+angle_angle+');\n';
    return code;
  };