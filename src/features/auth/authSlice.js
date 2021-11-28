import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BLE } from "../../utils/bleConstants";

const initialState = {
  authenticated: false,
  token: "",
  userId: 0,
  firstName: "",
  LastName: "",
  Email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.authenticated = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.LastName = action.payload;
    },
    setEmail: (state, action) => {
      state.char = action.payload;
    },
  },
});

export const { setAuth, setToken, setFirstName, setLastName, setEmail, setUserId } = authSlice.actions;
export default authSlice.reducer;
