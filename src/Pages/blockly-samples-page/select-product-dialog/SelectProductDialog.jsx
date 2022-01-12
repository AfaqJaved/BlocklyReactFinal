import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import axiosInstance from "../../../axios";
import { CONSTANTS } from "../../../utils/constants";
import { useForm } from "react-hook-form";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SelectProductDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [products, setProducts] = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const onSelected = (data) => {
    handleClose(data);
  };

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

  React.useEffect(() => {
    getAllProdcuts();
  }, []);

  const handleClose = (data) => {
    setOpen(false);
    props.closeDialog(data);
  };
  return (
    <Dialog
      keepMounted
      disableEscapeKeyDown={true}
      onBackdropClick={() => {
        setOpen(true);
      }}
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
      fullWidth
      maxWidth={"lg"}
      sx={""}
      scroll={"body"}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          handleClose();
        }
      }}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent className="flex justify-center">
        <div className="w-96 h-96 p-5 flex flex-col justify-start items-center gap-4 bg-red-400 shadow-sm rounded-lg ">
          {/* str_mode: mode,
        userId: userId,
        productId: product.id, */}
          <div className="w-full flex justify-start ">
            <h1 className="font-Roboto text-2xl">Select Product</h1>
            <button
              onClick={handleClose}
              className="ml-auto bg-red-500 text-2xl px-2 rounded text-white"
            >
              X
            </button>
          </div>
          <select
            {...register("productId")}
            className="w-full h-12 bg-white rounded  shadow-sm "
            name="productId"
            id="productId"
            type="number"
            defaultValue={""}
          >
            <option className="p-4" value={""} disabled>
              {"Select Product"}
            </option>
            {products.map((obj) => {
              return (
                <option className="p-4" value={obj.id}>
                  {obj.str_productName}
                </option>
              );
            })}
          </select>
          <select
            className="w-full h-12 bg-white rounded  shadow-sm "
            name="str_mode"
            id="str_mode"
            type="number"
            defaultValue={""}
            {...register("str_mode")}
          >
            <option className="p-4" value={""} disabled>
              {"Select Mode"}
            </option>
            <option className="p-4" value={"MQTT"}>
              {"MQTT"}
            </option>
            <option className="p-4" value={"BLE"}>
              {"BLE"}
            </option>
          </select>
          <button
            onClick={handleSubmit(onSelected)}
            className=" py-4 text-2xl w-full bg-purple-500 rounded-xl text-white shadow-sm hover:bg-purple-600 "
          >
            Start Adding Samples
          </button>
        </div>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
