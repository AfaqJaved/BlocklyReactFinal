import Logic from "../assets/images/logic.png";
import Logo from "../assets/images/logic.png";
import loops from "../assets/images/loops.png";
import text_icon from "../assets/images/text_icon.png";
import list_icon from "../assets/images/list_icon.png";
import color from "../assets/images/color.png";
import function_icon from "../assets/images/function_icon.png";
import Math from "../assets/images/math.png";
import { BLOCKLY_CATEGORIES_CONSTANTS } from "./blocklyCategories";

export const toolboxDefaultState = (categoryName, rowDiv_, labelDom, iconDom_) => {
  switch (categoryName) {
    case BLOCKLY_CATEGORIES_CONSTANTS.LOGIC: {
      rowDiv_.style.backgroundColor = "#9400D3";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      iconDom_.style.bac = "black";

      // rowDiv_.style.fontFamily = "FingerPaint";
      break;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.LOOPS: {
      rowDiv_.style.backgroundColor = "#EF3038";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.MATH: {
      rowDiv_.style.backgroundColor = "#9C3D54";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.TEXT: {
      rowDiv_.style.backgroundColor = "#FF8C00";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.LISTS: {
      rowDiv_.style.backgroundColor = "#FF69B4";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.COLOUR: {
      rowDiv_.style.backgroundColor = "#EF4F4F";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.FUNCTIONS: {
      rowDiv_.style.backgroundColor = "#DF711B";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
  }
};

export const setToolBoxIcons = (categoryName) => {
  switch (categoryName) {
    case BLOCKLY_CATEGORIES_CONSTANTS.LOGIC: {
      const img = document.createElement("img");
      img.src = Logic;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.LOOPS: {
      const img = document.createElement("img");

      img.src = loops;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.MATH: {
      const img = document.createElement("img");

      img.src = Math;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.TEXT: {
      const img = document.createElement("img");

      img.src = text_icon;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.LISTS: {
      const img = document.createElement("img");

      img.src = list_icon;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.COLOUR: {
      const img = document.createElement("img");

      img.src = color;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.FUNCTIONS: {
      const img = document.createElement("img");

      img.src = function_icon;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
  }
};
