import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import languageReducer from "../features/language/languageSlice";
import bleReducer from "../features/ble/bleSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer,
    ble: bleReducer,
  },
  middleware: (getDefaultMiddleware) => customizedMiddleware,
});
