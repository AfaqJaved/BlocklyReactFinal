import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { store } from "../app/store";
import storage from "redux-persist/lib/storage";

import { resetAuth } from "../features/auth/authSlice";
import { resetBle } from "../features/ble/bleSlice";
import { resetDevice } from "../features/devices/deviceSlice";
import { resetLang } from "../features/language/languageSlice";
import { resetModal } from "../features/modal/modalSlice";

export const DECODEJWT = (token) => {
  return jwt_decode(token);
};

export const SHOW_TOAST_WARN = (message) => {
  toast.warn(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const SHOW_TOAST_SUCESS = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const RESET_REDUX_STATE = () => {
  store.dispatch(resetModal());
  store.dispatch(resetAuth());
  store.dispatch(resetBle());
  store.dispatch(resetDevice());
  store.dispatch(resetLang());
  storage.removeItem("persist:root");
};
