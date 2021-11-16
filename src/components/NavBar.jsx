import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../features/language/languageSlice";
import { changeStatus, setDevice, setServer, setService, setchar } from "../features/ble/bleSlice";
import { CONSTANTS } from "../utils/constants";
import BlocklsLogo from "../assets/images/blocks_logo.png";
import UploadLogo from "../assets/images/upload.png";
import BleLogo from "../assets/images/bluetooth.png";
import { BLE } from "../utils/bleConstants";
import Popup from "./Popup";

export default function NavBar() {
  const [navState, setnavState] = useState(true);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const bleStatus = useSelector((state) => state.ble.status);

  const onDisconnected = () => {
    console.log("Device disconnected!!!");
    dispatch(changeStatus(BLE.BLE_DISCONNECTED));
  };

  const requestPermission = async () => {
    const device = await BLE.getDevice();
    device.addEventListener("gattserverdisconnected", onDisconnected);
    const server = await BLE.connectGattServer(device);
    const service = await BLE.getServices(server);
    const char = await BLE.getChar(service);

    if (device != undefined) {
      dispatch(setDevice(device));
      dispatch(setServer(server));
      dispatch(setService(service));
      dispatch(setchar(char));
      dispatch(changeStatus(BLE.BLE_CONNECTED));
      BLE.writeBle("This is from chrome", char);
    } else {
      requestPermission();
    }
  };

  return (
    <div className="bg-pink-600  rounded-br-full w-full">
      <nav className="flex  justify-center gap-x-0 md:gap-x-16 lg:gap-x-16 md:justify-between lg:justify-between pl-5 pr-10 items-center">
        <div className="p-2 flex  items-center justify-center">
          <img src={BlocklsLogo} className="w-12 h-14 " alt="" />
          <label className="text-2xl  text-white font-sans font-medium ml-2">Blockly</label>
        </div>
        <div className="flex justify-center items-center invisible md:visible lg:visible">
          <label className="text-xl  text-white font-sans mr-2 uppercase md:invisible ">Language</label>
          <select
            value={language}
            onChange={(e) => {
              dispatch(setLanguage(e.target.value));
            }}
            className=" bg-gradient-to-r from-yellow-400 to-red-500 p-2 text-2xl shadow-lg pl-10 pr-10  rounded-2xl"
          >
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
              <button className="bg-blue-500  flex justify-center items-center rounded-md shadow-lg text-white hover:text-black uppercase font-medium text-sm  p-1 md:p-1 lg:p-3 md:text-sm lg:text-xl hover:bg-blue-600">
                <img src={UploadLogo} className="w-8 h-8 mr-2"></img>
                Upload
              </button>
            </li>
            <li>
              <button
                onClick={requestPermission}
                className={
                  "ml-3  flex justify-center items-center rounded-md shadow-lg text-white hover:text-black uppercase font-medium text-sm  p-1 md:p-1 lg:p-3 md:p0 lg:p3 md:text-sm lg:text-xl " +
                  (bleStatus === BLE.BLE_CONNECTED ? "bg-green-500 hover:bg-green-500" : "bg-yellow-300 hover:bg-yellow-500")
                }
              >
                <img src={BleLogo} className="w-8 h-8 mr-2"></img>
                {bleStatus === BLE.BLE_CONNECTED ? "Sucess" : "Please Connect"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
