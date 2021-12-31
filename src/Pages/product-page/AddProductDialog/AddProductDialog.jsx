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

export default function AddProductDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const addProduct = (data) => {
    console.log(data);
    axiosInstance
      .post(CONSTANTS.API.PRODUCT.ADD, data)
      .then((res) => {
        SHOW_TOAST_SUCESS("Product Added Sucess !!");
        handleClose();
      })
      .catch((res) => {
        console.log(res);
      });
  };
  const handleClose = () => {
    setOpen(false);
    props.closeDialog();
  };

  return (
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
                {...register("str_productName")}
                name="str_productName"
                id="str_productName"
                class="border border-2 rounded-r px-4 py-2 w-full"
                type="text"
                placeholder="Product Name"
              />
            </div>
            <div class="flex w-full ">
              <span class="text-sm border border-2 rounded-l px-4 py-2 bg-purple-300 whitespace-no-wrap">
                Specs
              </span>
              <input
                {...register("str_product_features")}
                name="str_product_features"
                id="str_product_features"
                class=" border border-2 rounded-r px-4 py-2 w-full"
                type="text"
                placeholder="Features"
              />
            </div>
            <div class="flex w-full ">
              <span class="text-sm border border-2 rounded-l px-4 py-2 bg-purple-300 whitespace-no-wrap">
                Desc
              </span>
              <input
                {...register("str_productDescription")}
                name="str_productDescription"
                id="str_productDescription"
                class=" border border-2 rounded-r px-4 py-2 w-full"
                type="text"
                placeholder="Description"
              />
            </div>
            <div class="flex w-full ">
              <span class="text-sm border border-2 rounded-l px-4 py-2 bg-purple-300 whitespace-no-wrap">
                Logo
              </span>
              <input
                {...register("str_productImage")}
                name="str_productImage"
                id="str_productImage"
                class=" border border-2 rounded-r px-4 py-2 w-full"
                type="text"
                placeholder="Image Location"
              />
            </div>
            <div className="flex justify-end items-center gap-2 ">
              <button
                onClick={handleClose}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-2xl rounded-md "
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit(addProduct)}
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
  );
}
