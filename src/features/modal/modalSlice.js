import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { changeStatus } = modalSlice.actions;
export default modalSlice.reducer;
