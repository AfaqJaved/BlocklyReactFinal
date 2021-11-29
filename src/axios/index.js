import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../app/store";

const getToken = async () => {
  return await store.getState().auth.token;
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    // authorization: "Bearer " + getToken(),
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor for jwt token
axiosInstance.interceptors.request.use(function (config) {
  const token = "Bearer " + store.getState().auth.token;
  config.headers.Authorization = token;
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);

    if (error.response.status === 401) {
      toast.warn("Invalid Credintionals!!!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (error.response.status === 404) {
      toast.warn("User Not Found!!!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
