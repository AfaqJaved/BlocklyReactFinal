import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BLE } from "../../utils/bleConstants";

const initialState = {
  devices: [
    // {
    //   str_deviceName: null,
    //   str_ssid: null,
    //   str_pass: null,
    // },
  ],
};

export const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    addDevice: (state, action) => {
      state.devices = action.payload;
    },
    changeDeviceStatus: (state, action) => {
      state.devices.forEach((device) => {
        if (device.str_deviceName == action.payload) {
          device.str_status = true;
        }
      });
    },
    resetDevice: () => initialState,
  },
});

export const { addDevice, changeDeviceStatus, resetDevice } = devicesSlice.actions;
export default devicesSlice.reducer;
