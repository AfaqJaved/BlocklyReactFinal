import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BLE } from "../../utils/bleConstants";

const initialState = {
  robot: {},
};

export const robotSlice = createSlice({
  name: "robot",
  initialState,
  reducers: {
    setRobot(state, action) {
      state.robot = action.payload;
    },
    resetRobot: () => initialState,
  },
});

export const { resetRobot, setRobot } = robotSlice.actions;
export default robotSlice.reducer;
