import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CONSTANTS } from "../../utils/constants";
const initialState = {
  language: CONSTANTS.LANGUAGE.ENGLISH,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      console.log(state.language);
    },
    resetLang: () => initialState,
  },
});

export const { setLanguage, resetLang } = languageSlice.actions;
export default languageSlice.reducer;
