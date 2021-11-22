import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import languageReducer from "../features/language/languageSlice";
import bleReducer from "../features/ble/bleSlice";
import modalReducer from "../features/modal/modalSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

// /This si faetstaese
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer,
    ble: bleReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => customizedMiddleware,
});
