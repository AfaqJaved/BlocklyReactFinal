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
import { parse } from "postcss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddCategoryDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [toolbox, setToolbox] = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    setOpen(props.open);
    getAllToolboxes();
  }, [props.open]);

  const getAllToolboxes = () => {
    axiosInstance
      .get(CONSTANTS.API.LOOKUP.FIND_ALL_TOOLBOX)
      .then((res) => {
        console.log(res.data);
        setToolbox(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const addCategory = (data) => {
    let obj = {
      str_name: data.str_name,
      container: data.container,
      label: data.label,
      row: data.row,
      icon: data.icon,
      toolboxId: parseInt(data.toolboxId),
    };
    console.log(obj);
    axiosInstance
      .post(CONSTANTS.API.TOOLBOX_CATEGORIES.ADD, obj)
      .then((res) => {
        console.log(res);
        SHOW_TOAST_SUCESS("Category Added Sucess !!");
        handleClose();
      })
      .catch((res) => {
        alert(JSON.stringify(res));
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
            <h1 className="text-3xl font-Roboto ">Add Category</h1>
            <div className="mt-6 w-4/5 flex flex-col gap-4">
              <div class="flex w-full ">
                <span class="text-sm border border-2 rounded-l px-4 py-2 bg-purple-300 whitespace-no-wrap">
                  Name
                </span>
                <input
                  {...register("str_name")}
                  name="str_name"
                  class="border border-2 rounded-r px-4 py-2 w-full"
                  type="text"
                  placeholder="Toolbox Name"
                />
              </div>
              <div class="flex w-full ">
                <span class="text-sm border border-2 rounded-l px-4 py-2 bg-purple-300 whitespace-no-wrap">
                  Container
                </span>
                <input
                  {...register("container")}
                  name="container"
                  class=" border border-2 rounded-r px-4 py-2 w-full"
                  type="text"
                  placeholder="MQTT/BLE"
                />
              </div>
              <div class="flex w-full ">
                <span class="text-sm border border-2 rounded-l px-4 py-2 bg-purple-300 whitespace-no-wrap">
                  Row
                </span>
                <input
                  {...register("row")}
                  name="row"
                  class=" border border-2 rounded-r px-4 py-2 w-full"
                  type="text"
                  placeholder="MQTT/BLE"
                />
              </div>
              <div class="flex w-full ">
                <span class="text-sm border border-2 rounded-l px-4 py-2 bg-purple-300 whitespace-no-wrap">
                  Label
                </span>
                <input
                  {...register("label")}
                  name="label"
                  class=" border border-2 rounded-r px-4 py-2 w-full"
                  type="text"
                  placeholder="MQTT/BLE"
                />
              </div>
              <div class="flex w-full ">
                <span class="text-sm border border-2 rounded-l px-4 py-2 bg-purple-300 whitespace-no-wrap">
                  Icon
                </span>
                <input
                  {...register("icon")}
                  name="icon"
                  class=" border border-2 rounded-r px-4 py-2 w-full"
                  type="text"
                  placeholder="MQTT/BLE"
                />
              </div>
              <div class="flex w-full ">
                <span class="text-sm border border-2 rounded-l px-4 py-2 bg-purple-300 whitespace-no-wrap">
                  Toolbox
                </span>
                <select
                  {...register("toolboxId")}
                  className="w-full bg-white border-2"
                  name="toolboxId"
                  id="toolboxId"
                  type="number"
                  defaultValue={""}
                >
                  <option className="p-4" value="" disabled>
                    {"----Please Select----"}
                  </option>
                  {toolbox.map((obj) => {
                    return (
                      <option className="p-4" value={obj.id}>
                        {obj.str_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex justify-end items-center gap-2 ">
                <button
                  onClick={handleClose}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-2xl rounded-md "
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit(addCategory)}
                  className="bg-purple-600 hover:bg-purple-700  text-white px-4 py-2 text-2xl rounded-md "
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}
