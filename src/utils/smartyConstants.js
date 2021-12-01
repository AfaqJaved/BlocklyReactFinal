import { store } from "../app/store";
import { BLOCKS_LANGUAGE_CONSTANTS } from "../utils/blockConstants";
export const SMARTY = {
  async moveForward() {
    await store.getState().ble.char.writeValue(new TextEncoder().encode(BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.FORWARD));
  },
  async moveBackward() {
    await store.getState().ble.char.writeValue(new TextEncoder().encode(BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.BACKWARD));
  },
  async moveLeft() {
    await store.getState().ble.char.writeValue(new TextEncoder().encode(BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.LEFT));
  },
  async moveRight() {
    await store.getState().ble.char.writeValue(new TextEncoder().encode(BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH.RIGHT));
  },
  async rotateSmarty(angle) {
    await store.getState().ble.char.writeValue(new TextEncoder().encode(BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.ROTATION_BLOCK.ENGLISH + "," + angle));
  },
  async getDistance() {
    let value = await store.getState().ble.char.readValue();
    console.log(new TextDecoder().decode(value));
    return new TextDecoder().decode(value);
  },
};

export const RUNCODE = (code) => {
  eval(code);
};
