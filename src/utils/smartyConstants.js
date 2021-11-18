import { store } from "../app/store";
import { CONSTANTS } from "../utils/constants";
export const SMARTY = {
  async moveForward() {
    await store.getState().ble.char.writeValue(new TextEncoder().encode("{ 'ssid' : 'Notion360' , 'pass' : 'notion36@' , 'mode' : 'wifi' }"));
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
  async rotateSmarty(angle) {
    await store.getState().ble.char.writeValue(new TextEncoder().encode(CONSTANTS.BLOCKS.ROTATION_BLOCK.ENGLISH + "," + angle));
  },
  async getDistance() {
    let value = await store.getState().ble.char.readValue();
    console.log(new TextDecoder().decode(value));
    return new TextDecoder().decode(value);
  },
/////////////////////////
async moveForwardSteps(num) {
  await store.getState().ble.char.writeValue(new TextEncoder().encode(CONSTANTS.BLOCKS.DIRECTION_STEPS_BLOCK.DIRECTIONS_STEPS_ENGLISH.FORWARD +","+ num));
},
async moveBackwardSteps(num) {
  await store.getState().ble.char.writeValue(new TextEncoder().encode(CONSTANTS.BLOCKS.DIRECTION_STEPS_BLOCK.DIRECTIONS_STEPS_ENGLISH.BACKWARD +","+ num));
},
async moveLeftSteps(num) {
  await store.getState().ble.char.writeValue(new TextEncoder().encode(CONSTANTS.BLOCKS.DIRECTION_STEPS_BLOCK.DIRECTIONS_STEPS_ENGLISH.LEFT +","+ num));
},
async moveRightSteps(num) {
  await store.getState().ble.char.writeValue(new TextEncoder().encode(CONSTANTS.BLOCKS.DIRECTION_STEPS_BLOCK.DIRECTIONS_STEPS_ENGLISH.RIGHT +","+ num));
},

};

export const RUNCODE = (code) => {
  eval(code);
};
