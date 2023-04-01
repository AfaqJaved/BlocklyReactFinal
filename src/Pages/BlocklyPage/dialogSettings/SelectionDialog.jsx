import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import axiosInstance from "../../../axios";
import { CONSTANTS } from "../../../utils/constants";
import { SHOW_TOAST_SUCESS } from "../../../utils/utils";
import { useDispatch } from "react-redux";
import { setMode, setProduct } from "../../../features/robot/robotSlice";
import { constants } from "blockly";
import { BLE } from "../../../utils/bleConstants";
import {
  changeStatus,
  setDevice,
  setServer,
  setService,
  setchar_Rx,
  setChar,
} from "../../../features/ble/bleSlice";
import { useSelector } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SelectionDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [checked, setChecked] = React.useState({
    status: false,
    data: undefined,
  });
  const [products, setProducts] = React.useState([]);
  const mode = useSelector((state) => state.robot.mode);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const handleClose = () => {
    setOpen(false);
    props.closeDialog();
  };

  const onDisconnected = () => {
    console.log("Device disconnected!!!");
    dispatch(changeStatus(BLE.BLE_DISCONNECTED));
  };

  const requestPermission = async () => {
    if (mode === "MQTT") {
      const device = await BLE.getDevice();
      device.addEventListener("gattserverdisconnected", onDisconnected);
      const server = await BLE.connectGattServer(device);
      const service = await BLE.getServices(server);
      const char = await BLE.getChar(service);

      if (device != undefined) {
        dispatch(setDevice(device));
        dispatch(setServer(server));
        dispatch(setService(service));
        dispatch(setChar(char));
        dispatch(changeStatus(BLE.BLE_CONNECTED));

        let obj = {
          mode: "BLE",
        };
        BLE.writeBle(JSON.stringify(obj), char);
      } else {
        requestPermission();
      }
    }
  };

  React.useEffect(() => {
    axiosInstance
      .get(CONSTANTS.API.FIND_ALL_PRODUCTS)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((res) => {});
  }, []);

  const onProductSelected = (data) => {
    if (checked.data == data && checked.status) {
      SHOW_TOAST_SUCESS(data.str_productName + "  DeSelected Sucessfully");
    } else {
      console.log("selected");
      dispatch(setProduct(data));
      SHOW_TOAST_SUCESS(data.str_productName + " Selected Sucessfully");
    }
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
                      Select Programming Language
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => {
                  dispatch(setMode(CONSTANTS.MODES.PYTHON));
                  props.closeDialog();
                }}
                className="py-2 px-6 shadow-lg rounded-xl text-black bg-green-400 hover:bg-green-500"
              >
                Python
              </button>
              <button
                onClick={() => {
                  dispatch(setMode(CONSTANTS.MODES.JAVASCRIPT));
                  props.closeDialog();
                }}
                className="py-2 px-6 shadow-lg rounded-xl text-black bg-yellow-400 hover:bg-yellow-500"
              >
                JavaScript
              </button>
            </div>
          </div>
        </section>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
