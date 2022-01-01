import React from "react";
import LayoutAdminTheme from "../../layout/LayoutAdmin";
import Editor from "@monaco-editor/react";
import axiosInstance from "../../axios";
import { CONSTANTS } from "../../utils/constants";
import { SHOW_TOAST_SUCESS, SHOW_TOAST_WARN } from "../../utils/utils";
import { red } from "@mui/material/colors";
import AddTranslationDialog from "./add-translation-dialog/AddTranslationDialog";

export default function TranslationsPage() {
  const [value, setValue] = React.useState("");
  const [language, setlanguage] = React.useState("");
  const [addDialog, setAddDialog] = React.useState(false);

  //   React.useEffect(() => {
  //     console.log("called");
  //     axiosInstance
  //       .get(CONSTANTS.API.GET_BLOCKLY_PARAMS)
  //       .then((res) => {
  //         console.log("data");
  //         const object = JSON.parse(res.data.data.str_blockly_json);
  //         setValue(JSON.stringify(object, null, 2));
  //       })
  //       .catch((res) => {
  //         console.log(res);
  //       });
  //   }, []);

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

  const onSelected = (data) => {
    setlanguage(data);
    axiosInstance
      .get(CONSTANTS.API.TRANSLATIONS.FIND_BY_LANGUAGE + data)
      .then((res) => {
        if (res.data.data === undefined) {
          SHOW_TOAST_WARN("No Translation Found");
          setValue("");
        } else {
          console.log(res.data);
          setValue(JSON.stringify(res.data.data.str_translations, null, 2));
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const addTranslationDialog = () => {
    setAddDialog(true);
  };

  const saveButton = () => {
    console.log(value);
    console.log(language);
    let object = {
      lang: language,
      translations: JSON.parse(value),
    };

    console.log(object);

    axiosInstance
      .post(CONSTANTS.API.TRANSLATIONS.UPDATE, object)
      .then((res) => {
        SHOW_TOAST_SUCESS("Changed Sucess");
        axiosInstance
          .get(CONSTANTS.API.TRANSLATIONS.FIND_BY_LANGUAGE + language)
          .then((res) => {
            if (res.data.data === undefined) {
              SHOW_TOAST_WARN("No Translation Found");
              setValue("");
            } else {
              console.log(res.data);
              setValue(JSON.stringify(res.data.data.str_translations, null, 2));
            }
          })
          .catch((res) => {
            console.log(res);
          });
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const closeAddTranslationDialog = () => {
    setAddDialog(false);
  };

  return (
    <LayoutAdminTheme>
      <AddTranslationDialog
        open={addDialog}
        closeDialog={closeAddTranslationDialog}
      ></AddTranslationDialog>
      <div className="p-5 flex justify-around items-center text-2xl">
        <h1>Translations</h1>
        <button
          onClick={addTranslationDialog}
          className="px-4 py-2 bg-purple-600 shadow-md text-white rounded-lg "
        >
          Add
        </button>
        <div>
          <select
            className="w-52 h-12 text-xl bg-red-200 border-black rounded-full border-2"
            name="categoryId"
            id="categoryId"
            type="number"
            defaultValue={""}
            onChange={(event) => {
              onSelected(event.target.value);
            }}
          >
            <option className="p-4" defaultChecked value={""} disabled>
              {"Select Language"}
            </option>
            <option className="p-4" value={"en"}>
              English
            </option>
            <option className="p-4" value={"ru"}>
              Russian
            </option>
          </select>
        </div>
      </div>
      <div className="flex  justify-around items-center">
        <div className="border-b-4 border-purple-500">
          <Editor
            height="70vh"
            width="90vh"
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
