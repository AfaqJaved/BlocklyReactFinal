import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

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
