export const TOPICS = {
  subscribeDeviceStatus(client, userId) {
    client.subscribe("/topic/" + userId.toString() + "/status");
  },
  unSubscribeDeviceStatus(client, deviceName) {
    client.unsubscribe("/topic/" + deviceName + "/status");
  },
};
