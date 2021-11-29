export const TOPICS = {
  subscribeDeviceStatus(client, deviceName) {
    client.subscribe("/topic/" + deviceName + "/status");
  },
  unSubscribeDeviceStatus(client, deviceName) {
    client.unsubscribe("/topic/" + deviceName + "/status");
  },
};
