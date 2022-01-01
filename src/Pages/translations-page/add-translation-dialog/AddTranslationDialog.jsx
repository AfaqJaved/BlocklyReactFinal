import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import axiosInstance from "../../../axios";
import { CONSTANTS } from "../../../utils/constants";
import { useForm } from "react-hook-form";
import { SHOW_TOAST_SUCESS } from "../../../utils/utils";
import Editor from "@monaco-editor/react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddTranslationDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [value, setValue] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    setOpen(props.open);
    getAllCategories();
  }, [props.open]);

  const getAllCategories = () => {
    axiosInstance
      .get(CONSTANTS.API.LOOKUP.FIND_ALL_TOOLBOX_CATEGORIES)
      .then((res) => {
        console.log(res.data);
        setCategories(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const onChange = (data) => {
    setValue(data);
  };

  const addTranslation = (data) => {
    let obj = {
      lang: data.lang,
      translations: JSON.parse(value),
    };
    console.log(obj);
    axiosInstance
      .post(CONSTANTS.API.TRANSLATIONS.ADD, obj)
      .then((res) => {
        console.log(res);
        SHOW_TOAST_SUCESS("Translation Added Sucess !!");
        handleClose();
      })
      .catch((res) => {
        console.log(res);
      });
  };
  const handleClose = () => {
    props.closeDialog();
  };

  return (
    <>
      <Dialog
        fullWidth
        maxWidth={"md"}
        sx={""}
        scroll={"body"}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div className="w-full h-full flex justify-center items-center flex-col">
            <h1 className="text-3xl font-Roboto ">Add Block</h1>
            <div className="flex justify-around w-full items-center mt-12 gap-2">
              <div className="flex justify-center items-center">
                <span class="text-sm border border-2 rounded-l px-4 py-2 bg-purple-300 whitespace-no-wrap">
                  Name
                </span>
                <input
                  {...register("lang")}
                  name="lang"
                  id="lang"
                  class=" border border-2 rounded-r px-4 py-2 w-full"
                  type="text"
                  placeholder="Language"
                />
              </div>

              <button
                onClick={handleSubmit(addTranslation)}
                className=" px-6 py-2 rounded-md text-white font-Roboto bg-purple-600 shadow-md"
              >
                Add
              </button>
            </div>
            <div className="mt-6 w-4/5 flex flex-col gap-4">
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
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}
