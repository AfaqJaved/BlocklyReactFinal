import { store } from "../app/store";
import { CONSTANTS } from "../utils/constants";
export const SMARTY = {
  async moveForward() {
    await store.getState().ble.char.writeValue(new TextEncoder().encode(CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.FORWARD));
  },
  async moveBackward() {
    await store.getState().ble.char.writeValue(new TextEncoder().encode(CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.BACKWARD));
  },
  async moveLeft() {
    await store.getState().ble.char.writeValue(new TextEncoder().encode(CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.LEFT));
  },
  async moveRight() {
    await store.getState().ble.char.writeValue(new TextEncoder().encode(CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.RIGHT));
  },
};

export const RUNCODE = (code) => {
  eval(code);
};
