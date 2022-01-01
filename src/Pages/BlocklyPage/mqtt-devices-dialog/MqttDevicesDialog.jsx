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
import { useForm } from "react-hook-form";
import { BLE } from "../../../utils/bleConstants";
import {
  changeStatus,
  setDevice,
  setServer,
  setService,
  setchar,
  resetBle,
} from "../../../features/ble/bleSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MqttDevicesDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [checked, setChecked] = React.useState({
    status: false,
    data: undefined,
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [products, setProducts] = React.useState([]);
  const dispatch = useDispatch();

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

  const onProductSelected = (data) => {
    if (checked.data == data && checked.status) {
      SHOW_TOAST_SUCESS(data.str_productName + "  DeSelected Sucessfully");
    } else {
      console.log("selected");
      dispatch(setProduct(data));
      SHOW_TOAST_SUCESS(data.str_productName + " Selected Sucessfully");
    }
  };

  const addDevice = (data) => {
    console.log(data);
  };

  const scanDevices = async () => {
    const device = await BLE.getDevice();
    device.addEventListener("gattserverdisconnected", onDisconnected);
    const server = await BLE.connectGattServer(device);
    const service = await BLE.getServices(server);
    const char = await BLE.getChar(service);

    if (device !== undefined) {
      dispatch(setDevice(device));
      dispatch(setServer(server));
      dispatch(setService(service));
      dispatch(setchar(char));
      dispatch(changeStatus(BLE.BLE_CONNECTED));
      console.log(await BLE.getSsidPassword());
      let { ssid, pass, deviceId } = JSON.parse(await BLE.getSsidPassword());
      console.log(ssid);
      console.log(pass);
      setValue("ssid", ssid);
      setValue("pass", pass);

      // this.setState({
      //   ssid: ssid,
      //   password: pass,
      //   deviceName: deviceId,
      //   addBtnStatus: false,
      // });
    }
  };

  const onDisconnected = () => {
    console.log("Device disconnected!!!");
    dispatch(changeStatus(BLE.BLE_DISCONNECTED));
  };

  return (
    <Dialog
      keepMounted
      //   disableEscapeKeyDown={true}
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
        handleClose();
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

              <div className="w-full flex justify-end items-center gap-2 p-5 ">
                <input
                  {...register("name")}
                  placeholder={"Name"}
                  className="text-gray-700 bg-gray-200 shadow-xl  font-sans font-light   p-2 ml-2 rounded-full"
                  type="text"
                />
                <input
                  {...register("ssid")}
                  // value={this.state.deviceName}
                  // onChange={(event) =>
                  //   this.setState({ deviceName: event.target.value })
                  // }
                  placeholder={"Ssid"}
                  className="text-gray-700 bg-gray-200 shadow-xl  font-sans font-light   p-2 ml-2 rounded-full"
                  type="text"
                />
                <input
                  {...register("pass")}
                  // value={this.state.deviceName}
                  // onChange={(event) =>
                  //   this.setState({ deviceName: event.target.value })
                  // }
                  placeholder={"Password"}
                  className="text-gray-700 bg-gray-200 shadow-xl  font-sans font-light   p-2 ml-2 rounded-full"
                  type="text"
                />
                <button
                  onClick={() => {
                    scanDevices();
                  }}
                  className="px-4 py-2 shadow-lg rounded-xl bg-pink-500 hover:bg-pink-600  "
                >
                  Scan
                </button>
                <button
                  onClick={handleSubmit(addDevice)}
                  className="px-4 py-2 shadow-lg rounded-xl bg-purple-500 hover:bg-purple-600  "
                >
                  Add Device
                </button>
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
                            setChecked({
                              data: obj,
                              status: !checked.status,
                            });
                            onProductSelected(obj);
                          }}
                          className={
                            checked.data === obj && checked.status
                              ? "bg-yellow-500"
                              : ""
                          }
                        >
                          <td className="border-t-0 cursor-pointer px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center ">
                            <img
                              src={obj.str_productImage}
                              className="h-12 w-12 bg-white rounded-full border"
                              alt="..."
                            />
                            <span className="ml-3 font-Roboto text-sm text-white">
                              {obj.str_productName}
                            </span>
                          </td>
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
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => {
                  dispatch(setMode(CONSTANTS.MODES.BLE));
                  props.closeDialog();
                }}
                className="py-2 px-6 shadow-lg rounded-xl text-black bg-green-400 hover:bg-green-500"
              >
                Single Device
              </button>
              <button
                onClick={() => {
                  dispatch(setMode(CONSTANTS.MODES.MQTT));
                  props.closeDialog();
                }}
                className="py-2 px-6 shadow-lg rounded-xl text-black bg-yellow-400 hover:bg-yellow-500"
              >
                Multiple Device
              </button>
            </div>
          </div>
        </section>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
