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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddToolBoxDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [products, setProducts] = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    setOpen(props.open);
    getAllProdcuts();
  }, [props.open]);

  const getAllProdcuts = () => {
    axiosInstance
      .get(CONSTANTS.API.LOOKUP.FIND_ALL_PRODUCTS)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const addToolbox = (data) => {
    let obj = {
      productId: parseInt(data.productId),
      str_mode: data.str_mode,
      str_name: data.str_name,
    };
    axiosInstance
      .post(CONSTANTS.API.TOOLBOX.ADD, obj)
      .then((res) => {
        console.log(res);
        SHOW_TOAST_SUCESS("Toolbox Added Sucess !!");
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
            <h1 className="text-3xl font-Roboto ">Add ToolBox</h1>
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
                  Mode
                </span>
                <input
                  {...register("str_mode")}
                  name="str_mode"
                  class=" border border-2 rounded-r px-4 py-2 w-full"
                  type="text"
                  placeholder="MQTT/BLE"
                />
              </div>
              <div class="flex w-full ">
                <span class="text-sm border border-2 rounded-l px-4 py-2 bg-purple-300 whitespace-no-wrap">
                  Product
                </span>
                <select
                  {...register("productId")}
                  className="w-full bg-white border-2"
                  name="productId"
                  id="productId"
                  type="number"
                  defaultValue={""}
                >
                  <option className="p-4" value="" disabled>
                    {"----Please Select----"}
                  </option>
                  {products.map((obj) => {
                    return (
                      <option className="p-4" value={obj.id}>
                        {obj.str_productName}
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
                  onClick={handleSubmit(addToolbox)}
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
