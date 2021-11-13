import * as Blockly from "blockly";
import { setToolBoxIcons, toolboxDefaultState } from "../../../utils/toolBoxUtils";
class CustomCategory extends Blockly.ToolboxCategory {
  /**
   * Constructor for a custom category.
   * @override
   */
  constructor(categoryDef, toolbox, opt_parent) {
    super(categoryDef, toolbox, opt_parent);
  }

  /** @override */
  addColourBorder_() {
    this.htmlDiv_.className = "p-1 flex flex-col text-center  border-r-4  border-purple-700   shadow-lg bg-purple-500 bg-opacity-40 opacity-100 bg-bottom ";
    let labelDom = this.rowDiv_.getElementsByClassName("blocklyTreeLabel")[0];
    this.rowDiv_.className = " flex flex-col rounded-xl mb-2 shadow-lg font-sans ";
    toolboxDefaultState(this.name_, this.rowDiv_, labelDom, this.iconDom_);
  }

  /** @override */
  setSelected(isSelected) {
    var labelDom = this.rowDiv_.getElementsByClassName("blocklyTreeLabel")[0];
    if (isSelected) {
      this.rowDiv_.style.backgroundColor = "white";
      labelDom.style.color = this.colour_;
    } else {
      toolboxDefaultState(this.name_, this.rowDiv_, labelDom, this.iconDom_);
      labelDom.style.color = "black";
    }
    // This is used for accessibility purposes.
    Blockly.utils.aria.setState(/** @type {!Element} */ (this.htmlDiv_), Blockly.utils.aria.State.SELECTED, isSelected);
  }

  /** @override */
  createIconDom_() {
    return setToolBoxIcons(this.name_);
  }
}

Blockly.registry.register(Blockly.registry.Type.TOOLBOX_ITEM, Blockly.ToolboxCategory.registrationName, CustomCategory, true);
