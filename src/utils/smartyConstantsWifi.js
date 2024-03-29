import { store } from "../app/store";
import client from "../mqtt";

export const TOPICS = {
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
export const SMARTY_WIFI = {
  async moveForward() {
    for (let i = 0; i < store.getState().devices.devices.length; i++) {
      let currentDevice = store.getState().devices.devices[i];
      if (currentDevice.str_deployCode) {
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
      if (currentDevice.str_deployCode) {
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
      if (currentDevice.str_deployCode) {
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
      if (currentDevice.str_deployCode) {
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
  eval(code);
};
