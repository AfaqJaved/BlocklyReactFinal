import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import axiosInstance from "../../../axios";
import { CONSTANTS } from "../../../utils/constants";
import { SHOW_TOAST_SUCESS } from "../../../utils/utils";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SelectionDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [checked, setChecked] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleClose = () => {
    setOpen(false);
    props.closeDialog();
  };

  React.useEffect(() => {
    axiosInstance
      .get(CONSTANTS.API.FIND_ALL_PRODUCTS)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((res) => {});
  }, []);

  const onSelected = (data) => {
    props.closeDialog(data);
    SHOW_TOAST_SUCESS(data.str_productName + " Selected Sucessfully");
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
      <DialogContent>
        <section className="relative py-16 bg-blueGray-50">
          <div className="w-full mb-12 px-4">
            <div
              className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded
  bg-pink-900 text-white"
            >
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                    <h3 className="font-Roboto text-lg text-white text-center">
                      Robots
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto ">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-6 align-middle border border-solid py-3 text-md font-Roboto uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                        Name
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-md font-Roboto uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                        Firmware Version
                      </th>
                      <th className="px-6 align-middle border border-solid py-3 text-md font-Roboto uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                        Features
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((obj) => {
                      return (
                        <tr
                          key={obj.id}
                          onClick={() => {
                            onSelected(obj);
                          }}
                        >
                          <th
                            className={
                              "border-t-0 cursor-pointer px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center " +
                              (checked ? "bg-red-200 " : "")
                            }
                          >
                            <img
                              src={obj.str_productImage}
                              className="h-12 w-12 bg-white rounded-full border"
                              alt="..."
                            />
                            <span className="ml-3 font-Roboto text-sm text-white">
                              {obj.str_productName}
                            </span>
                          </th>
                          <td className=" font-Roboto text-sm  cursor-pointer border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                            {obj.str_productDescription}
                          </td>
                          <td className=" font-Roboto text-sm cursor-pointer border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                            <i className="fas fa-circle text-orange-500 mr-2" />
                            {obj.str_productDescription}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
