import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { connect, useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../axios";
import { CONSTANTS } from "../../../utils/constants";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ShowExamplesDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [data, setData] = React.useState([]);
  const product = useSelector((state) => state.robot.product);
  const mode = useSelector((state) => state.robot.mode);

  React.useEffect(() => {
    setOpen(props.open);
    console.log(product);
    if (props.open) {
      let obj = {
        productId: product.id,
        mode: mode,
      };
      console.log(obj);
      axiosInstance
        .post(CONSTANTS.API.BLOCKLY_SAMPLES.FIND_BY_PARAMS, obj)
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
        })
        .catch((res) => {
          console.log(res);
        });
    }
  }, [props.open]);

  const selectedRow = (data) => {
    setOpen(false);
    props.closeDialog(data);
  };

  const handleClose = (data) => {
    setOpen(false);
    props.closeDialog(data);
  };

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: "white",
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
        handleClose();
      }}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <div className="w-full h-full">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-700 text-white uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Mode</th>
                <th className="py-3 px-6 text-center">Product</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {data.map((obj) => {
                return (
                  <tr
                    key={obj.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                    onClick={() => selectedRow(obj)}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">
                          {obj.samples_str_name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>{obj.samples_str_mode}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        {product.str_productName}
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => selectedRow(obj)}
                        className="bg-indigo-500 hover:bg-indigo-900 py-2 px-4 rounded-md shadow-md text-xl text-white font-Roboto "
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
