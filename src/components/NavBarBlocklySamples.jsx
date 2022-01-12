import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CONSTANTS } from "../utils/constants";
import BlocklsLogo from "../assets/images/blocks_logo.png";
import Save from "../assets/images/save.png";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import {
  ON_BLE_DISCONNECTED,
  RESET_REDUX_STATE,
  SHOW_TOAST_SUCESS,
} from "../utils/utils";
import Iot from "../assets/images/iot.png";

export default function NavBarBlocklySamples(props) {
  const [navState, setnavState] = useState(true);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const bleStatus = useSelector((state) => state.ble.status);
  const mode = useSelector((state) => state.robot.mode);
  const history = useHistory();
  const [deviceBle, setdeviceBle] = useState(null);
  const { t } = useTranslation();
  const name = React.useRef();

  const saveSample = () => {
    props.saveSample(name);
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

        <div className=" invisible md:visible lg:visible ">
          <ul className="flex items-center justify-between ">
            <input
              className="py-2 rounded px-1 "
              placeholder="Sample Name"
              ref={name}
            ></input>
            <button
              onClick={saveSample}
              className=" ml-3 bg-purple-400 hover:bg-purple-500  flex justify-center items-center rounded-md shadow-lg text-white hover:text-black uppercase font-medium text-sm  p-1 md:p-1 lg:p-3 md:p0 lg:p3 md:text-sm lg:text-xl "
            >
              <img src={Save} className="w-8 h-8 mr-2"></img>
              {"Save Sample"}
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}
