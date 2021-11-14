import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../features/language/languageSlice";
import { CONSTANTS } from "../utils/constants";
import BlocklsLogo from "../assets/images/blocks_logo.png";
import UploadLogo from "../assets/images/upload.png";

export default function NavBar() {
  const [navState, setnavState] = useState(true);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  return (
    <div className="bg-pink-600 rounded-br-full w-full block ">
      <nav className="flex justify-around items-center">
        <div className="p-2 flex items-center justify-center">
          <img src={BlocklsLogo} className="w-12 h-14 ml-48 lg:ml-0 md:ml-0" alt="" />
          <label className="text-2xl  text-white font-sans font-medium ml-2">Blockly</label>
        </div>
        <div className="flex justify-center items-center invisible md:visible lg:visible">
          <label className="text-xl text-white font-sans mr-2 uppercase">Language</label>
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
              <button className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-white hover:to-red-500 flex justify-center items-center rounded-md shadow-lg text-white uppercase font-medium text-sm  p-3 md:p0 lg:p3 md:text-sm lg:text-xl hover:bg-white">
                <img src={UploadLogo} className="w-5 h-5 mr-5"></img>
                Upload Code
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
