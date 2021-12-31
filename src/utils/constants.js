import { INITIAL_TOOLBOX_JSON_EN } from "../modules/Blockly/toolbox/en/toolbox";

export const CONSTANTS = {
  LANGUAGE: {
    RUSSIAN: "ru",
    ENGLISH: "en",
  },
  API: {
    LOGIN: "/api/login",
    REGISTER: "/api/register",
    SAVE_DEVICE: "/api/device/add",
    GET_ALL_DEVICES: "/api/device/findAll",
    DELETE_DEVICE: "/api/device/delete/",
    FIND_ALL_PRODUCTS: "/api/product/findAll",
    GET_BLOCKLY_PARAMS: "/api/blockly-params/find",
    ADD_BLOCKLY_PARAMS: "/api/blockly-params/add",
    TOOLBOX: {
      ADD: "/api/toolbox/add",
      FIND_ALL: "/api/toolbox/findAll",
      DELETE: "/api/toolbox/delete/",
      FIND_TOOLBOX_BY_MODE_PRODUCT: "/api/toolbox/findByParams",
    },
    TOOLBOX_CATEGORIES: {
      FIND_ALL: "/api/toolbox-category/findAll",
      ADD: "/api/toolbox-category/add",
      DELETE: "/api/toolbox-category/delete/",
    },
    PRODUCT: {
      ADD: "/api/product/add",
      FIND_ALL: "/api/product/findAll",
      DELETE: "/api/product/delete/",
    },
    LOOKUP: {
      FIND_ALL_PRODUCTS: "/api/lookup/products",
      FIND_ALL_TOOLBOX: "/api/lookup/toolbox",
      FIND_ALL_TOOLBOX_CATEGORIES: "/api/lookup/categories",
    },
    BLOCK: {
      FIND_ALL: "/api/block/findAll",
      ADD: "/api/block/add",
      DELETE: "/api/block/delete/",
    },
  },
  ROUTING: {
    LOGIN_PAGE: "/login",
    REGISTER_PAGE: "/register",
    BLOCKY_PAGE: "/blockly",
    BLOCKLY_WIFI_PAGE: "/blockly-wifi",
    DEVICES_PAGE: "/devices",
    BLOCKLY_PARAMS_PAGE: "/blockly-params",
    BLOCKY_TOOLBOX_PAGE: "/blockly-toolbox",
    TOOLBOX_CATEGORIES: "/categories",
    PRODUCT_PAGE: "/product",
    BLOCKS_PAGE: "/blocks",
  },
};

export const BLOCKLY_OPTIONS = {
  collapse: true,
  comments: true,
  css: true,
  disable: true,
  grid: { spacing: 50, length: 5, colour: "gray", snap: true },
  horizontalLayout: false,
  media: "media/",
  oneBasedIndex: false,
  readOnly: false,
  rtl: false,
  scrollbars: false,
  theme: {
    fontStyle: {
      weight: "lighter ",
      size: 12,
      family: "Finger Paint, cursive",
    },
    blockStyles: {
      colour_blocks: {
        colourPrimary: "20",
      },
      list_blocks: {
        colourPrimary: "260",
      },
      logic_blocks: {
        colourPrimary: "210",
      },
      loop_blocks: {
        colourPrimary: "120",
      },
      math_blocks: {
        colourPrimary: "230",
      },
      procedure_blocks: {
        colourPrimary: "290",
      },
      text_blocks: {
        colourPrimary: "160",
      },
      variable_blocks: {
        colourPrimary: "330",
      },
      variable_dynamic_blocks: {
        colourPrimary: "310",
      },
      hat_blocks: {
        colourPrimary: "330",
        hat: "cap",
      },
    },
    categoryStyles: {},
    componentStyles: {
      workspaceBackgroundColour: "#ECF0F1",
      toolboxBackgroundColour: "#DB2777",
      flyoutBackgroundColour: "#DB2777",
      flyoutOpacity: "0.5",
      scrollbarColour: "#FFFFFF",
      scrollbarOpacity: "0.1",
      toolboxForegroundColour: "#db2777",
    },
  },
  toolboxPosition: "start",
  trashcan: true,
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
    pinch: true,
  },
  renderer: "geras",
  plugins: [],
  move: {
    scrollbars: true,
    drag: true,
    wheel: true,
  },
};
