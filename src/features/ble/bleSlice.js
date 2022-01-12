import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BLE } from "../../utils/bleConstants";

const initialState = {
  status: BLE.BLE_DISCONNECTED,
  device: null,
  server: null,
  service: null,
  char: null,
};

export const bleSlice = createSlice({
  name: "ble",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
    setDevice: (state, action) => {
      state.device = action.payload;
    },
    setServer: (state, action) => {
      state.server = action.payload;
    },
    setService: (state, action) => {
      state.service = action.payload;
    },
    setChar: (state, action) => {
      state.char = action.payload;
    },

    resetBle: () => initialState,
  },
});

export const {
  changeStatus,
  setDevice,
  setServer,
  setService,
  setChar,
  resetBle,
} = bleSlice.actions;
export default bleSlice.reducer;
