import { store } from "../app/store";
import { BLOCKS_LANGUAGE_CONSTANTS } from "../utils/blockConstants";
import client from "../mqtt";

const TOPICS = {
  FORWARD_TOPIC_SMARTY: "/topic/" + store.getState().auth.userId + "/FORWARD",
  BACKWARD_TOPIC_SMARTY: "/topic/" + store.getState().auth.userId + "/BACKWARD",
  LEFT_TOPIC_SMARTY: "/topic/" + store.getState().auth.userId + "/LEFT",
  RIGHT_TOPIC_SMARTY: "/topic/" + store.getState().auth.userId + "/RIGHT",
};
export const SMARTY_WIFI = {
  async moveForward() {
    await client.publish(TOPICS.FORWARD_TOPIC_SMARTY, "move forward");
  },
  async moveBackward() {
    await client.publish(TOPICS.BACKWARD_TOPIC_SMARTY, "move backward");
  },
  async moveLeft() {
    await client.publish(TOPICS.LEFT_TOPIC_SMARTY, "move left");
  },
  async moveRight() {
    await client.publish(TOPICS.RIGHT_TOPIC_SMARTY, "move right");
  },
  async rotateSmarty(angle) {
    // await client.publish(TOPICS.FORWARD_TOPIC_SMARTY, "move forward");
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
