import React from "react";
import LayoutAdminTheme from "../../layout/LayoutAdmin";
import Editor from "@monaco-editor/react";
import axiosInstance from "../../axios";
import { CONSTANTS } from "../../utils/constants";
import { SHOW_TOAST_SUCESS } from "../../utils/utils";

export default function BlockDefinationPage() {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    console.log("called");
    axiosInstance
      .get(CONSTANTS.API.BLOCK_DEFINATION.FIND_ALL)
      .then((res) => {
        console.log(res.data);
        const object = JSON.parse(res.data.data.str_block_definations);
        setValue(JSON.stringify(object, null, 2));
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  const onChange = (data) => {
    console.log(data);
    setValue(data);
  };

  const formatJSON = () => {
    try {
      const res = JSON.parse(value);
      return JSON.stringify(res, null, 2);
    } catch {
      const errorJson = {
        error: `Error Fomratting Json`,
      };
      return JSON.stringify(errorJson, null, 2);
    }
  };

  const saveButton = () => {
    console.log(value);
    let object = JSON.parse(value);
    let stringToSend = JSON.stringify(object);
    console.log(JSON.parse(stringToSend));
    axiosInstance
      .post(CONSTANTS.API.BLOCK_DEFINATION.ADD, {
        definations: stringToSend,
      })
      .then((res) => {
        SHOW_TOAST_SUCESS("Params Changed Sucess");
        const object = JSON.parse(res.data.data.str_blockly_json);
        setValue(JSON.stringify(object, null, 2));
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <LayoutAdminTheme>
      <div className="p-5 flex justify-center items-center text-2xl">
        <h1>JSON DEFINATIONS</h1>
      </div>
      <div className="flex  justify-around items-center">
        <div className="border-b-4 border-purple-500">
          <Editor
            height="70vh"
            width="120vh"
            theme="vs-dark"
            defaultLanguage="json"
            value={value}
            onChange={(data) => onChange(data)}
            options={{
              fontSize: 20,
              minimap: {
                enabled: false,
              },
            }}
          />
        </div>
      </div>
      <div className="flex mt-4 justify-center items-center ">
        <button
          onClick={saveButton}
          className=" px-12 py-4 bg-purple-600 rounded-2xl text-white shadow-md "
        >
          Save
        </button>
      </div>
    </LayoutAdminTheme>
  );
}
