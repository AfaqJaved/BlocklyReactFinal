import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../features/language/languageSlice";
import {
  changeStatus,
  setChar,
  setDevice,
  setServer,
  setService,
} from "../features/ble/bleSlice";
import { CONSTANTS } from "../utils/constants";
import BlocklsLogo from "../assets/images/blocks_logo.png";
import UploadLogo from "../assets/images/upload.png";
import BleLogo from "../assets/images/bluetooth.png";
import GearLogo from "../assets/images/gear.png";
import { BLE } from "../utils/bleConstants";
import Popup from "./Popup";
import i18next from "i18next";

import Logout from "../assets/images/logout.png";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import {
  ON_BLE_DISCONNECTED,
  RESET_REDUX_STATE,
  SHOW_TOAST_SUCESS,
} from "../utils/utils";
import Iot from "../assets/images/iot.png";

export default function NavBarBlockly(props) {
  const [navState, setnavState] = useState(true);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const bleStatus = useSelector((state) => state.ble.status);
  const mode = useSelector((state) => state.robot.mode);
  const history = useHistory();
  const [deviceBle, setdeviceBle] = useState(null);
  const { t } = useTranslation();

  const requestPermission = async () => {
    try {
      const device = await BLE.getDevice();
      device.addEventListener("gattserverdisconnected", ON_BLE_DISCONNECTED);
      const server = await BLE.connectGattServer(device);
      const service = await BLE.getServices(server);
      const char = await BLE.getChar(service);

      if (device != undefined) {
        dispatch(setDevice(device));
        dispatch(setServer(server));
        dispatch(setService(service));
        dispatch(setChar(char));
        dispatch(changeStatus(BLE.BLE_CONNECTED));
        setdeviceBle(device);
      } else {
        requestPermission();
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log("Language has changed" + language);
  }, [language]);

  const onLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  const logout = () => {
    RESET_REDUX_STATE();
    history.push("login");
  };

  const selectDevicesDialog = () => {
    props.onChangeDialog();
  };

  const disconnectBle = () => {
    if (deviceBle != null) {
      deviceBle.gatt.disconnect();
      SHOW_TOAST_SUCESS("Sucessfull Disconnected !!!");
    }
  };

  return (
    <div className="bg-pink-600   w-full">
      <nav className="flex  justify-center gap-x-0 md:gap-x-16 lg:gap-x-16 md:justify-between lg:justify-between pl-5 pr-10 items-center">
        <div className="p-2 flex   items-center justify-start">
          <img
            onClick={() => history.push(CONSTANTS.ROUTING.BLOCKLY_PARAMS_PAGE)}
            src={BlocklsLogo}
            className="w-12 h-14 cursor-pointer "
            alt=""
          />
          <label className="text-2xl  text-white font-sans font-medium ml-2">
            {t("APP_TITLE_BLOCKLY")}
          </label>
        </div>
        <div className="flex justify-center items-center invisible md:visible lg:visible">
          <label className="text-xl  text-white font-sans mr-2 uppercase lg:visible md:invisible ">
            {t("LANGUAGE")}
          </label>
          <select
            value={language}
            onChange={onLanguageChange}
            className=" bg-gradient-to-r from-yellow-400 to-red-500 p-2 text-2xl shadow-lg pl-10 pr-10  rounded-2xl"
          >
            <option
              value={CONSTANTS.LANGUAGE.ENGLISH}
              className="p-2 bg-blue-500 font-sans"
            >
              English
            </option>
            <option
              value={CONSTANTS.LANGUAGE.RUSSIAN}
              className="p-2 bg-blue-500 font-sans"
            >
              Russian
            </option>
          </select>
        </div>
        <div className=" invisible md:visible lg:visible ">
          <ul className="flex items-center justify-between ">
            {bleStatus === BLE.BLE_CONNECTED ? (
              <li>
                <button
                  onClick={disconnectBle}
                  className="py-2 px-6 rounded-md text-xl shadow-lg bg-red-400 hover:bg-red-600 text-white "
                >
                  Disconnect
                </button>
              </li>
            ) : (
              ""
            )}
            <li>
              {mode === CONSTANTS.MODES.BLE ? (
                <button
                  onClick={requestPermission}
                  disabled={bleStatus === BLE.BLE_CONNECTED ? true : false}
                  className={
                    " ml-3  flex justify-center items-center rounded-md shadow-lg text-white hover:text-black uppercase font-medium text-sm  p-1 md:p-1 lg:p-3 md:p0 lg:p3 md:text-sm lg:text-xl " +
                    (bleStatus === BLE.BLE_CONNECTED
                      ? "bg-green-500 hover:bg-green-500"
                      : "bg-yellow-300 hover:bg-yellow-500")
                  }
                >
                  <img src={BleLogo} className="w-8 h-8 mr-2"></img>
                  {bleStatus === BLE.BLE_CONNECTED
                    ? t("SUCESS")
                    : t("CONNECT_BLE")}
                </button>
              ) : (
                ""
              )}
            </li>
            <button
              onClick={logout}
              className=" ml-3 bg-purple-400 hover:bg-purple-500  flex justify-center items-center rounded-md shadow-lg text-white hover:text-black uppercase font-medium text-sm  p-1 md:p-1 lg:p-3 md:p0 lg:p3 md:text-sm lg:text-xl "
            >
              <img src={Logout} className="w-8 h-8 mr-2"></img>
              {t("LOGOUT")}
            </button>

            {/* <button
              onClick={selectDevicesDialog}
              className=" ml-3 flex justify-center items-center rounded-md text-white hover:text-black uppercase font-medium text-sm   lg:p3 md:text-sm lg:text-xl "
            >
              <img src={GearLogo} className="w-12 h-12 mr-2"></img>
            </button> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
