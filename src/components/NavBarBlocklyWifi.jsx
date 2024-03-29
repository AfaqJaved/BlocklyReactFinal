import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../features/language/languageSlice";
import { changeStatus, setDevice, setServer, setService, setchar } from "../features/ble/bleSlice";
import { CONSTANTS } from "../utils/constants";
import BlocklsLogo from "../assets/images/blocks_logo.png";
import UploadLogo from "../assets/images/upload.png";
import Iot from "../assets/images/iot.png";
import { BLE } from "../utils/bleConstants";
import Popup from "./Popup";
import i18next from "i18next";
import { setToken, setAuth, setEmail, setFirstName, setLastName, setUserId } from "../features/auth/authSlice";
import Logout from "../assets/images/logout.png";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { RESET_REDUX_STATE } from "../utils/utils";

export default function NavBarBlocklyWifi() {
  const [navState, setnavState] = useState(true);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const bleStatus = useSelector((state) => state.ble.status);
  const history = useHistory();
  const { t } = useTranslation();

  const onDisconnected = () => {
    console.log("Device disconnected!!!");
    dispatch(changeStatus(BLE.BLE_DISCONNECTED));
  };

  const showDevicesDialog = () => {};
  const onLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  const logout = () => {
    RESET_REDUX_STATE();
    history.push("login");
  };

  return (
    <div className="bg-pink-600   w-full">
      <nav className="flex  justify-center gap-x-0 md:gap-x-16 lg:gap-x-16 md:justify-between lg:justify-between pl-5 pr-10 items-center">
        <div className="p-2 flex  items-center justify-start">
          <img src={BlocklsLogo} className="w-12 h-14 " alt="" />
          <label className="text-2xl  text-white font-sans font-medium ml-2">{t("APP_TITLE_BLOCKLY_WIFI")}</label>
        </div>
        <div className="flex justify-center items-center invisible md:visible lg:visible">
          <label className="text-xl  text-white font-sans mr-2 uppercase lg:visible md:invisible ">{t("LANGUAGE")}</label>
          <select value={language} onChange={onLanguageChange} className=" bg-gradient-to-r from-yellow-400 to-red-500 p-2 text-2xl shadow-lg pl-10 pr-10  rounded-2xl">
            <option value={CONSTANTS.LANGUAGE.ENGLISH} className="p-2 bg-blue-500 font-sans">
              English
            </option>
            <option value={CONSTANTS.LANGUAGE.RUSSIAN} className="p-2 bg-blue-500 font-sans">
              Russian
            </option>
          </select>
        </div>
        <div className=" invisible md:visible lg:visible ">
          <ul className="flex items-center justify-between ">
            <li>
              <button
                onClick={showDevicesDialog}
                className=" ml-3  flex justify-center items-center rounded-md shadow-lg text-white hover:text-black uppercase font-medium text-sm  p-1 md:p-1 lg:p-3 md:p0 lg:p3 md:text-sm lg:text-xl bg-green-400 hover:bg-green-600 "
              >
                <img src={Iot} className="w-8 h-8 mr-2"></img>
                {t("DEVICES")}
              </button>
            </li>
            <button
              onClick={logout}
              className=" ml-3 bg-purple-400 hover:bg-purple-500  flex justify-center items-center rounded-md shadow-lg text-white hover:text-black uppercase font-medium text-sm  p-1 md:p-1 lg:p-3 md:p0 lg:p3 md:text-sm lg:text-xl "
            >
              <img src={Logout} className="w-8 h-8 mr-2"></img>
              {t("LOGOUT")}
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}
