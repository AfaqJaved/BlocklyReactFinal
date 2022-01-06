import { store } from "../app/store";
import client from "../mqtt";
import { BLOCKS_LANGUAGE_CONSTANTS } from "../utils/blockConstants";
import { SHOW_TOAST_SUCESS } from "./utils";
const TOPICS = {
  getForwardTopicSmarty(deviceName) {
    return (
      "/topic/" + store.getState().auth.userId + "/" + deviceName + "/FORWARD"
    );
  },
  getBackwardTopicSmarty(deviceName) {
    return (
      "/topic/" + store.getState().auth.userId + "/" + deviceName + "/BACKWARD"
    );
  },
  getLeftTopicSmarty(deviceName) {
    return (
      "/topic/" + store.getState().auth.userId + "/" + deviceName + "/LEFT"
    );
  },
  getRightTopicSmarty(deviceName) {
    return (
      "/topic/" + store.getState().auth.userId + "/" + deviceName + "/RIGHT"
    );
  },
  getStatusTopic(deviceName) {
    return (
      "/topic/" + store.getState().auth.userId + "/" + deviceName + "/STATUS"
    );
  },
  subscribeStatusTopicSmarty(deviceName) {
    client.subscribe(
      "/topic/" + store.getState().auth.userId + "/" + deviceName + "/STATUS"
    );
  },
  unSubscribeStatusTopicSmarty(deviceName) {
    client.unsubscribe(
      "/topic/" + store.getState().auth.userId + "/" + deviceName + "/STATUS"
    );
  },
};

export const SMARTY = {
  async moveForward() {
    await store
      .getState()
      .ble.char.writeValue(
        new TextEncoder().encode(
          BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH
            .FORWARD
        )
      );
  },
  async moveBackward() {
    await store
      .getState()
      .ble.char.writeValue(
        new TextEncoder().encode(
          BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH
            .BACKWARD
        )
      );
  },
  async moveLeft() {
    await store
      .getState()
      .ble.char.writeValue(
        new TextEncoder().encode(
          BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH
            .LEFT
        )
      );
  },
  async moveRight() {
    await store
      .getState()
      .ble.char.writeValue(
        new TextEncoder().encode(
          BLOCKS_LANGUAGE_CONSTANTS.BLOCKS.DIRECTION_BLOCK.DIRECTIONS_ENGLISH
            .RIGHT
        )
      );
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
    console.log(new TextDecoder().decode(value));
    return new TextDecoder().decode(value);
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
        client.publish(
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
        client.publish(
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
        client.publish(
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
        client.publish(
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
