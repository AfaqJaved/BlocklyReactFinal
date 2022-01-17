import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setChar, setService } from "../../features/ble/bleSlice";
import LayoutAdminTheme from "../../layout/LayoutAdmin";
import { BLE } from "../../utils/bleConstants";

const BleTestingPage = (props) => {
  const [char, setchar] = React.useState(null);
  const [connected, setconnected] = React.useState(false);
  const [device, setdevice] = React.useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const bleStart = async () => {
    try {
      const ble_device = await BLE.getDevice();
      ble_device.addEventListener("gattserverdisconnected", onDisconnected);
      const ble_server = await BLE.connectGattServer(ble_device);
      const ble_service = await BLE.getServices(ble_server);
      const ble_char = await BLE.getChar(ble_service);

      if (ble_device !== undefined) {
        setchar(ble_char);
        setconnected(true);
        setdevice(ble_device);
      }
    } catch (error) {
      alert(error);
    }
  };

  const onDisconnected = () => {
    alert("Device Disconnected !!!!");
    setconnected(false);
  };
  const disconnectDevice = () => {
    device.gatt.disconnect();
  };

  const bleSend = async (data) => {
    console.log("command sent : " + data.command.toUpperCase());
    await char.writeValue(
      BLE.getTextEncoder().encode(data.command.toUpperCase())
    );
    reset({
      command: "",
    });
  };

  return (
    <>
      <LayoutAdminTheme>
        <div className="flex w-full h-full p-5 gap-5  justify-start items-start">
          <button
            onClick={bleStart}
            className={
              " text-2xl rounded-lg px-4 py-2 ml-auto text-white shadow-sm " +
              (connected ? " bg-green-300 " : " bg-red-500 ")
            }
          >
            {connected ? "Sucessfully Connected " : "Please Connect"}
          </button>
          <button
            onClick={disconnectDevice}
            className={
              " text-2xl rounded-lg px-4 py-2 text-white shadow-sm bg-red-300 " +
              (connected ? "visible" : "invisible")
            }
          >
            Disconnect
          </button>
        </div>
        <div className="flex justify-start items-center gap-2 p-5  w-full h-full">
          <label className="text-xl font-Roboto ">Command</label>
          <input
            {...register("command")}
            type={"text"}
            className="border-2 p-4 w-full text-xl uppercase text-white bg-gray-500"
          ></input>
          <button
            onClick={handleSubmit(bleSend)}
            className="bg-purple-500 hover:bg-purple-600 text-white shadow-sm px-4 py-2 text-2xl rounded-md "
          >
            Send
          </button>
        </div>
      </LayoutAdminTheme>
    </>
  );
};

export default BleTestingPage;
