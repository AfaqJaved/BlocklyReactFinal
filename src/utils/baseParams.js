export const blocklyParams = {
  toolbox: {
    kind: "categoryToolbox",
    contents: [],
  },
  collapse: true,
  comments: true,
  css: true,
  disable: true,
  grid: {
    spacing: 50,
    length: 5,
    colour: "gray",
    snap: true,
  },
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
  trashcan: false,
  zoom: {
    controls: false,
    wheel: false,
    startScale: 1,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
    pinch: true,
  },
  renderer: "geras",
  plugins: [],
  move: {
    scrollbars: false,
    drag: true,
    wheel: false,
  },
};
