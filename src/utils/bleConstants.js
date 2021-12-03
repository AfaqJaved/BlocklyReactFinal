import { store } from "../app/store";
export const BLE = {
  BLE_DEVICE_NAME: "MyESP32",
  BLE_SERVICE_NAME: "4fafc201-1fb5-459e-8fcc-c5c9c331914b",
  BLE_CHAR_UUID: "beb5483e-36e1-4688-b7f5-ea07361b26a8",
  BLE_DISCONNECTED: "disconnected",
  BLE_CONNECTED: "Connected",
  getDevice() {
    return navigator.bluetooth.requestDevice({ filters: [], optionalServices: [BLE.BLE_SERVICE_NAME] });
  },
  connectGattServer(device) {
    return device.gatt.connect();
  },
  getServices(server) {
    return server.getPrimaryService(BLE.BLE_SERVICE_NAME);
  },
  getChar(service) {
    return service.getCharacteristic(BLE.BLE_CHAR_UUID);
  },
  writeBle(data, char) {
    char.writeValue(BLE.getTextEncoder().encode(data));
  },
  async getSsidPassword() {
    let value = await store.getState().ble.char.readValue();
    console.log(new TextDecoder().decode(value));
    return new TextDecoder().decode(value);
  },
  getTextEncoder() {
    return new TextEncoder();
  },
};
