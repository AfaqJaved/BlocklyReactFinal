import { store } from "../app/store";
import client from "../mqtt";
import { BLOCKS_LANGUAGE_CONSTANTS } from "../utils/blockConstants";
import { SHOW_TOAST_SUCESS } from "./utils";
import { VARIABLES } from "./SmartyVariables";

export const ACTIONS = {
  FORWARD: "FORWARD",
  BACKWARD: "BACKWARD",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  SIMPLE_BLINK: "BLINK",
  BLINK_RED_LED: "BLINK_RED_LED",
  BLINK_COLOR_ITERATION: "BLINK_COLOR_ITERATION",
};

const TOPICS = {
  getForwardTopicSmarty(deviceName) {
    return (
      "/topic/" +
      store.getState().auth.userId +
      "/" +
      deviceName +
      "/" +
      ACTIONS.FORWARD
    );
  },
  getBackwardTopicSmarty(deviceName) {
    return (
      "/topic/" +
      store.getState().auth.userId +
      "/" +
      deviceName +
      "/" +
      ACTIONS.BACKWARD
    );
  },
  getLeftTopicSmarty(deviceName) {
    return (
      "/topic/" +
      store.getState().auth.userId +
      "/" +
      deviceName +
      "/" +
      ACTIONS.LEFT
    );
  },
  getRightTopicSmarty(deviceName) {
    return (
      "/topic/" +
      store.getState().auth.userId +
      "/" +
      deviceName +
      "/" +
      ACTIONS.RIGHT
    );
  },
};

export const SMARTY = {
  async moveForward() {
    await store
      .getState()
      .ble.char.writeValue(new TextEncoder().encode(ACTIONS.FORWARD));
  },
  async moveBackward() {
    await store
      .getState()
      .ble.char.writeValue(new TextEncoder().encode(ACTIONS.BACKWARD));
  },
  async moveLeft() {
    await store
      .getState()
      .ble.char.writeValue(new TextEncoder().encode(ACTIONS.LEFT));
  },
  async moveRight() {
    await store
      .getState()
      .ble.char.writeValue(new TextEncoder().encode(ACTIONS.RIGHT));
  },
  async rotateSmarty(angle) {
    await store
      .getState()
      .ble.char.writeValue(
        new TextEncoder().encode(
          BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.ROTATION_BLOCK.ENGLISH + "," + angle
        )
      );
  },
  async getDistance() {
    let value = await store.getState().ble.char.readValue();
    let valueInString = new TextDecoder().decode(value);
    console.log(valueInString);
    let obj = JSON.parse(valueInString);
    return obj.distance;
  },

  async blinkLeds(color, times, led_type) {
    await store
      .getState()
      .ble.char.writeValue(
        new TextEncoder().encode(
          ACTIONS.BLINK_COLOR_ITERATION +
            "," +
            times.toString() +
            "," +
            color +
            "," +
            led_type
        )
      );
  },
};

export const SMARTY_WIFI = {
  async moveForward() {
    for (let i = 0; i < store.getState().devices.devices.length; i++) {
      let currentDevice = store.getState().devices.devices[i];
      if (JSON.parse(currentDevice.str_deployCode)) {
        console.log(
          TOPICS.getForwardTopicSmarty(
            store.getState().devices.devices[i].str_deviceName
          )
        );
        await client.publish(
          TOPICS.getForwardTopicSmarty(
            store.getState().devices.devices[i].str_deviceName
          ),
          "move forward"
        );
      }
    }
  },
  async moveBackward() {
    for (let i = 0; i < store.getState().devices.devices.length; i++) {
      let currentDevice = store.getState().devices.devices[i];
      if (JSON.parse(currentDevice.str_deployCode)) {
        console.log(
          TOPICS.getBackwardTopicSmarty(
            store.getState().devices.devices[i].str_deviceName
          )
        );
        await client.publish(
          TOPICS.getBackwardTopicSmarty(
            store.getState().devices.devices[i].str_deviceName
          ),
          "move forward"
        );
      }
    }
  },
  async moveLeft() {
    for (let i = 0; i < store.getState().devices.devices.length; i++) {
      let currentDevice = store.getState().devices.devices[i];
      if (JSON.parse(currentDevice.str_deployCode)) {
        console.log(
          TOPICS.getLeftTopicSmarty(
            store.getState().devices.devices[i].str_deviceName
          )
        );
        await client.publish(
          TOPICS.getLeftTopicSmarty(
            store.getState().devices.devices[i].str_deviceName
          ),
          "move forward"
        );
      }
    }
  },
  async moveRight() {
    for (let i = 0; i < store.getState().devices.devices.length; i++) {
      let currentDevice = store.getState().devices.devices[i];
      if (JSON.parse(currentDevice.str_deployCode)) {
        console.log(
          TOPICS.getRightTopicSmarty(
            store.getState().devices.devices[i].str_deviceName
          )
        );
        await client.publish(
          TOPICS.getRightTopicSmarty(
            store.getState().devices.devices[i].str_deviceName
          ),
          "move forward"
        );
      }
    }
  },
  async rotateSmarty(angle) {
    //  client.publish(TOPICS.FORWARD_TOPIC_SMARTY, "move forward");
  },
};

export const RUNCODE = (code) => {
  SHOW_TOAST_SUCESS("Uploding !!!!");
  eval(code);
  SHOW_TOAST_SUCESS("Uploading Done !!");
};
