import Logic from "../assets/images/logic.png";
import Robot from "../assets/images/robot.png";
import loops from "../assets/images/loops.png";
import text_icon from "../assets/images/text_icon.png";
import list_icon from "../assets/images/list_icon.png";
import color from "../assets/images/color.png";
import function_icon from "../assets/images/function_icon.png";
import Math from "../assets/images/math.png";
import { BLOCKLY_CATEGORIES_CONSTANTS } from "./blocklyCategories";
import i18next from "i18next";

export const toolboxDefaultState = (categoryName, rowDiv_, labelDom, iconDom_) => {
  switch (categoryName) {
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_SMARTY: {
      rowDiv_.style.backgroundColor = "#E75480";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      iconDom_.style.bac = "black";

      // rowDiv_.style.fontFamily = "FingerPaint";
      break;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_LOGIC: {
      rowDiv_.style.backgroundColor = "#9400D3";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      iconDom_.style.bac = "black";

      // rowDiv_.style.fontFamily = "FingerPaint";
      break;
    }

    case BLOCKLY_CATEGORIES_CONSTANTS.EN_LOOPS: {
      rowDiv_.style.backgroundColor = "#EF3038";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_MATH: {
      rowDiv_.style.backgroundColor = "#9C3D54";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_TEXT: {
      rowDiv_.style.backgroundColor = "#FF8C00";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_LISTS: {
      rowDiv_.style.backgroundColor = "#FF69B4";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_COLOUR: {
      rowDiv_.style.backgroundColor = "#EF4F4F";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_FUNCTIONS: {
      rowDiv_.style.backgroundColor = "#DF711B";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
  }
};

export const setToolBoxIcons = (categoryName) => {
  switch (categoryName) {
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_SMARTY: {
      const img = document.createElement("img");
      img.src = Robot;
      img.className = "w-20 h-14 ";
      img.alt = "Lamp";
      return img;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_LOGIC: {
      const img = document.createElement("img");
      img.src = Logic;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_LOOPS: {
      const img = document.createElement("img");

      img.src = loops;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_MATH: {
      const img = document.createElement("img");

      img.src = Math;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_TEXT: {
      const img = document.createElement("img");

      img.src = text_icon;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_LISTS: {
      const img = document.createElement("img");

      img.src = list_icon;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_COLOUR: {
      const img = document.createElement("img");

      img.src = color;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case BLOCKLY_CATEGORIES_CONSTANTS.EN_FUNCTIONS: {
      const img = document.createElement("img");
      img.src = function_icon;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
  }
};
