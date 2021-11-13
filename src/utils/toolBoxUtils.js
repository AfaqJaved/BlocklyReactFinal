import Logic from "../assets/images/logic.png";
import Logo from "../assets/images/logic.png";
import Loops from "../assets/images/loops.png";
import Math from "../assets/images/math.png";

export const toolboxDefaultState = (categoryName, rowDiv_, labelDom, iconDom_) => {
  switch (categoryName) {
    case "Logic": {
      rowDiv_.style.backgroundColor = "#EEB76B";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      iconDom_.style.bac = "black";

      // rowDiv_.style.fontFamily = "FingerPaint";
      break;
    }
    case "Loops": {
      rowDiv_.style.backgroundColor = "#E2703A";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case "Math": {
      rowDiv_.style.backgroundColor = "#9C3D54";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case "Text": {
      rowDiv_.style.backgroundColor = "#FFCDA3";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case "Lists": {
      rowDiv_.style.backgroundColor = "#EE9595";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case "Colour": {
      rowDiv_.style.backgroundColor = "#EF4F4F";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case "Custom Button": {
      rowDiv_.style.backgroundColor = "#D4AC2B";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case "Variables": {
      rowDiv_.style.backgroundColor = "#64C9CF";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
    case "Functions": {
      rowDiv_.style.backgroundColor = "#DF711B";
      labelDom.style.fontFamily = "Finger Paint";
      labelDom.style.fontWeight = 2;
      break;
    }
  }
};

export const setToolBoxIcons = (categoryName) => {
  switch (categoryName) {
    case "Logic": {
      const img = document.createElement("img");
      img.src = Logic;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case "Loops": {
      const img = document.createElement("img");

      img.src = Loops;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case "Math": {
      const img = document.createElement("img");

      img.src = Math;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case "Text": {
      const img = document.createElement("img");

      img.src = Logo;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case "Lists": {
      const img = document.createElement("img");

      img.src = Logo;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case "Colour": {
      const img = document.createElement("img");

      img.src = Logo;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case "Custom Button": {
      const img = document.createElement("img");

      img.src = Logo;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case "Variables": {
      const img = document.createElement("img");

      img.src = Logo;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
    case "Functions": {
      const img = document.createElement("img");

      img.src = Logo;
      img.className = "w-10 h-10 ";
      img.alt = "Lamp";
      return img;
    }
  }
};
